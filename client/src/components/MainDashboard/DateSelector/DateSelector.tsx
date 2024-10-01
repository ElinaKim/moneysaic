import { useState, useRef } from 'react'
import DatePicker from 'react-datepicker'
import CalendarIcon from '../../../assets/icons/calendar.svg'


import "react-datepicker/dist/react-datepicker.css";

export function DateSelector() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    const datePickerElement = useRef<any>(null)

    const handleButtonClick = () => {
        if (datePickerElement.current) {
            datePickerElement.current.setOpen(true)
        }
    }

    const handleCalendarOpen = () => {
        const calendarContainer = document.querySelector('.react-datepicker__month-container')
        if (calendarContainer) {
            calendarContainer.classList.add('animate-fade')
        }
    }

    return (
        <div className='flex mx-8 my-4 items-center'>
            <button onClick={handleButtonClick} className='w-12 h-12'><img src={CalendarIcon} /></button>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                    console.log(date)
                    setSelectedDate(date)
                }}
                showMonthYearPicker
                dateFormat="MMM yyyy"
                ref={datePickerElement}
                onCalendarOpen={handleCalendarOpen}
                className={`ml-2 pl-2 py-2`}
            />
        </div>
    )
}