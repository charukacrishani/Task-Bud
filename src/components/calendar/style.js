import styled from 'styled-components';

export const CalendarContainer = styled.div`
  position: fixed;
  top: 40%; 
  left: 51%;
  transform: translate(-50%, -50%);
  background-color: lightblack;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1); 
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin-bottom: 10px;

  button {
    border: none;
    margin-top: 1%;
    margin-bottom: -5%;
    background-color: #FDF2F8;
    cursor: pointer;
    font-size: 16px;
  }
`;

export const CalendarBody = styled.div`
  .react-calendar {
    width: -50%;
    height: 100%;
    border: none; 
  }
`;
