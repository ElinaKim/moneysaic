import React from 'react'
import GroceryIcon from '../../../assets/icons/groceries.svg'

export function TransactionList() {
    return (
        <>
            <div className='w-[80%] lg:w-[60%] py-4 mx-auto'>
                <div className='flex justify-between my-8'>
                    <h2>Expenses</h2>
                    <h3 className=''>View all</h3>
                </div>
                <ul className='divide-y-2 last:border-b-2'>
                    <li className='first:border-t-2 flex justify-between items-center px-2 py-4'>
                        <div className='flex items-center'>
                            <img src={GroceryIcon} className='w-10 mr-4' alt='Groceries icon' />
                            <h3>Groceries</h3>
                        </div>
                        <p>$500</p>
                    </li>
                </ul>
            </div>
            <div className='w-[80%] lg:w-[60%] py-4 mx-auto'>
                <div className='flex justify-between my-8'>
                    <h2>Income</h2>
                    <h3 className=''>View all</h3>
                </div>
                <ul className='divide-y-2 last:border-b-2'>
                    <li className='first:border-t-2 flex justify-between items-center px-2 py-4'>
                        <div className='flex items-center'>
                            <img src={GroceryIcon} className='w-10 mr-4' alt='Groceries icon' />
                            <h3>Groceries</h3>
                        </div>
                        <p>$500</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TransactionList