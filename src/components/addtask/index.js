import React, { useState } from 'react';
import { Input } from './style';

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Add task..."
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleAddTask();
          }
        }}
      />
    </div>
  );
}

export default AddTask;
