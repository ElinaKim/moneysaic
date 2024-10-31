import { Router } from "express";
import type { Request, Response } from 'express'
import { authenticateToken } from "../middleware/auth";
import db from "../db";
import dayjs from "dayjs";
import { AuthenticatedReq } from "../../types/authenticatedReq";

const router = Router()

// Route for posting a transaction
router.post('/add-transaction', authenticateToken, async (req: AuthenticatedReq, res: Response) => {
    const postData = req.body
    const formattedDate = dayjs(postData.date).format("YYYY-MM-DD HH:mm:ss");
    try {
        const data = await db('transaction').insert({
            user_id: req.user?.userId,
            ...postData,
            date: formattedDate
        }
        )
        const insertedData = await db('transaction').where({ id: data[0] }).first()
        res.status(201).json({ insertedData })
    } catch (error) {
        res.status(500).json({ message: `Error creating new transaction`, error: (error as Error).message })
    }

})

// Route for getting income transactions for a specific month
router.get('/income/:year/:month', authenticateToken, async (req: AuthenticatedReq, res: Response) => {
    const { year, month } = req.params;
    const startDate = dayjs(`${year}-${month}-01`).startOf('month').toISOString();
    const endDate = dayjs(startDate).endOf('month').toISOString();

    try {
        const incomeTransactions = await db('transaction')
            .where({ user_id: req.user?.userId, type: 'income' })
            .andWhere('date', '>=', startDate)
            .andWhere('date', '<=', endDate)
            .select('*');
        res.status(200).json({ incomeTransactions });
    } catch (error) {
        res.status(500).json({ message: `Error fetching income transactions`, error: (error as Error).message });
    }
});

// Route for getting expense transactions for a specific month
router.get('/expense/:year/:month', authenticateToken, async (req: AuthenticatedReq, res: Response) => {
    const { year, month } = req.params;
    const startDate = dayjs(`${year}-${month}-01`).startOf('month').toISOString();
    const endDate = dayjs(startDate).endOf('month').toISOString();

    try {
        const expenseTransactions = await db('transaction')
            .where({ user_id: req.user?.userId, type: 'expense' })
            .andWhere('date', '>=', startDate)
            .andWhere('date', '<=', endDate)
            .select('*');
        res.status(200).json({ expenseTransactions });
    } catch (error) {
        res.status(500).json({ message: `Error fetching expense transactions`, error: (error as Error).message });
    }
});

// Route for getting the balance for a specific month
router.get('/balance/:year/:month', authenticateToken, async (req: AuthenticatedReq, res: Response) => {
    const { year, month } = req.params;
    const startDate = dayjs(`${year}-${month}-01`).startOf('month').toISOString();
    const endDate = dayjs(startDate).endOf('month').toISOString();

    try {
        const incomeTransactions = await db('transaction')
            .where({ user_id: req.user?.userId, type: 'income' })
            .andWhere('date', '>=', startDate)
            .andWhere('date', '<=', endDate)
            .select('amount');

        const expenseTransactions = await db('transaction')
            .where({ user_id: req.user?.userId, type: 'expense' })
            .andWhere('date', '>=', startDate)
            .andWhere('date', '<=', endDate)
            .select('amount');

        const totalIncome = incomeTransactions.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
        const totalExpense = expenseTransactions.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
        const balance = totalIncome - totalExpense;

        res.status(200).json({ balance });
    } catch (error) {
        res.status(500).json({ message: `Error fetching balance`, error: (error as Error).message });
    }
});

// Route for getting categories based on type
router.get('/categories/:type', authenticateToken, async (req: AuthenticatedReq, res: Response) => {
    const { type } = req.params;
    if (!['income', 'expense'].includes(type)) {
        return res.status(400).json({ message: 'Invalid category type. Must be "income" or "expense".' });
    }

    try {
        const categories = await db('category').where({ type }).select('*');
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: `Error fetching categories`, error: (error as Error).message });
    }
});

export default router