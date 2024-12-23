
"use client"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const DatePicker = ({ onChange, selectedDate }) => {
  return (
    <div>
      <h5 className="text-lg mb-3 text-center">Choose Date</h5>
      <Calendar
        // activeStartDate={new Date()}
        // onChange={onChange} value={selectedDate} 
        minDate={new Date()}
        onChange={onChange}
        // minDetail='decade'
        tileDisabled={({ activeStartDate, date, view }) => date < new Date() }
        tileClassName={({ activeStartDate, date, view }) => {
          return date < new Date() ? "opacity-30" : `${selectedDate.getDate() === date.getDate() ? "bg-primary text-white " : "bg-transparent"}` + "rounded-sm"
        }}

      />
    </div>
  )
}

export default DatePicker