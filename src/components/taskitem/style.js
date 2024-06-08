import styled from 'styled-components';

export const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
  list-style: decimal; /* To show numbers */
`;

export const TaskCheckbox = styled.input`
  margin-left: 10px;
`;

export const TaskText = styled.span`
  color: ${({ completed }) => (completed ? 'gray' : 'black')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  flex-grow: 1;
  text-align: left;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px; 
  margin-right: 10px;

  img {
    width: 20px;
    height: 20px;
  }
`;