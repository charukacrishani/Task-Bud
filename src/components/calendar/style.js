import styled from 'styled-components';

export const CalendarContainer = styled.div`
  position: fixed;
  top: 44%;
  left: 43%;
  transform: translate(-50%, -50%);
  background-color: lightgray;
  padding: 10px; /* Reduced padding */
  border-radius: 10px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.1);
  width: 298px;
  height: 350px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px; /* Adjusted margin */
  margin-bottom: 0px;

  button {
    border: none;
    background-color: #FDF2F8;
    cursor: pointer;
    font-size: 14px; 
    padding: 5px 10px; 
  }
`;

export const CalendarBody = styled.div`
  .react-calendar {
    width: 100%;
    height: 100%;
    border: none;

    .react-calendar__tile {
      max-width: 45px; /* Adjust tile size */
      height: 45px; /* Adjust tile size */
    }
  }
`;
