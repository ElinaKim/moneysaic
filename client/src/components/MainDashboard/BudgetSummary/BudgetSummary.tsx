import React from 'react'
import ExpenseIcon from '../../../assets/icons/expense.svg'
import IncomeIcon from '../../../assets/icons/income.svg'

export function BudgetSummary() {
    return (
        <div className='bg-[#544686] w-[80%] lg:w-[60%] px-8 py-8 rounded-xl mx-auto text-white'>
            <div className="text-xs sm:text-lg lg:text-center mx-auto max-w-[35rem]">
                <h2>User's name Wallet</h2>
                <p className='text-2xl mb-4'>$2,323,56</p>
                <div className='flex justify-between text-center'>
                    <div className='flex items-center'>
                        <img src={ExpenseIcon} className='w-8 h-8 mr-2' />
                        <div>
                            <h3 className='text-sm'>Expense</h3>
                            <p className='font-medium'>$2,176.24</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={IncomeIcon} className='w-8 h-8 mr-2' />
                        <div>
                            <h3 className='text-sm'>Income</h3>
                            <p>$2,176.24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}