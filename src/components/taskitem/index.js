import React from 'react';
import { TaskContainer, TaskCheckbox, TaskText, DeleteButton } from './style';

function TaskItem({ task, index, onToggle, onDelete }) {
  return (
    <TaskContainer>
      <TaskText completed={task.completed}>{task.text}</TaskText>
      <TaskCheckbox 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(index)} 
      />
      <DeleteButton onClick={() => onDelete(index)}>
        <img src="/3.webp" alt="Delete" />
      </DeleteButton>
    </TaskContainer>
  );
}

export default TaskItem;