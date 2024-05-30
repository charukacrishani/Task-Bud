import React, { useState } from 'react';
import { Container, Layout, SecondContainer, DateText, Button, Image } from './style';
import AddTask from '../addtask/index';
import List from '../list/index';
import CustomCalendar from '../calendar/index'; // Import the Calendar component

function TODO() {
  const [tasks, setTasks] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State to manage calendar visibility
  const [selectedDate, setSelectedDate] = useState(''); // State to manage selected date

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
    setIsCalendarOpen(true); // Open calendar when button is clicked
  };

  const handleCloseCalendar = (date) => {
    setIsCalendarOpen(false); // Close calendar when close button is clicked
    if (date) {
      setSelectedDate(date.toLocaleDateString()); // Update selected date
    }
  };

  return (
    <Layout>
      <Container>
        <DateText>{selectedDate || 'Select a date'}</DateText>
        <Button onClick={handleButtonClick}>
          <Image src="/2.png" alt="Your Image" />
        </Button>
      </Container>
      <SecondContainer>
        <b>TO DO LIST</b>
        <List tasks={tasks} />
        <AddTask onAddTask={handleAddTask} />
      </SecondContainer>
      {isCalendarOpen && <CustomCalendar onClose={handleCloseCalendar} />} {/* Render Calendar if isCalendarOpen is true */}
    </Layout>
  );
}

export default TODO;
