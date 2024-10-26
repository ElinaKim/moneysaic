import { Router } from 'express'
import type { Request, Response } from 'express'
import db from '../db'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import type { User } from '../../types/user'
import type { AuthenticatedReq } from '../../types/authenticatedReq'
import { findUserByEmail } from '../utils/userModel'


const router = Router()
console.log("User routes initialized");


router.post('/register', async (req, res) => {
    console.log('Received register request:', req.body);
    const { user_name, email, password } = req.body
    if (!user_name || !email || !password) {
        return res.status(400).json('Required fields are empty!')
    }
    const existingUser = await findUserByEmail(email)
    if (existingUser) {
        return res.status(400).json('User already exists')
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    try {
        console.log("inserting new user into the db")
        const [user_id] = await db<User>('user').insert({
            user_name,
            email,
            password: hashedPwd
        }, ['id'])
        res.status(201).send({ user_id })
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Error registering user' })
    }
})

router.get('/test', (req, res) => {
    res.send('User route test successful');
});

export default router;
