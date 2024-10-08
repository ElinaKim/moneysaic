import React from 'react'

export function BudgetSlider() {
    return (
        <div className='bg-[#CDEBC5] w-[80%] lg:w-[60%] mt-4 px-8 py-8 rounded-xl mx-auto'>
            <h2 className='text-xs sm:text-lg lg:text-center'>Left to Spend</h2>
            <p className='my-4 lg:text-center'>$2,323.56 out of $4,500.00</p>
            <input type='range' max='5000' value='2000' className='slider'></input>
        </div>
    )
}

