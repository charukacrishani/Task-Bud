import React, { useState } from 'react';
import { Container, Layout, SecondContainer, DateText, Button, Image, ListHeader } from './style';
import AddTask from '../addtask';
import List from '../list';
import CustomCalendar from '../calendar';

function TODO() {
  const [tasks, setTasks] = useState([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleAddTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const handleButtonClick = () => {
    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = (date) => {
    setIsCalendarOpen(false);
    if (date) {
      setSelectedDate(date.toLocaleDateString());
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
        <ListHeader>TO DO LIST</ListHeader>
        <List tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
        <AddTask onAddTask={handleAddTask} />
      </SecondContainer>
      {isCalendarOpen && <CustomCalendar onClose={handleCloseCalendar} />}
    </Layout>
  );
}

export default TODO;