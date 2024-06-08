import React from 'react';
import TaskItem from '../taskitem';

function List({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          onToggle={onToggleTask} 
          onDelete={onDeleteTask} 
        />
      ))}
    </ol>
  );
}

export default List;