import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer, CalendarHeader, CalendarBody } from './style';
import ReactCalendar from 'react-calendar'; 

function CustomCalendar({ onClose }) { 
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to track selected date

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update selected date state
  };

  const handleApply = () => {
    onClose(selectedDate); // Call onClose with the selected date
  };

  return (
    <CalendarContainer>
      <CalendarBody>
        <ReactCalendar onChange={handleDateChange} value={selectedDate} /> {/* Update calendar value */}
      </CalendarBody>
      <CalendarHeader>
        <button onClick={handleApply}>Apply</button>
      </CalendarHeader>
    </CalendarContainer>
  );
}

export default CustomCalendar;
