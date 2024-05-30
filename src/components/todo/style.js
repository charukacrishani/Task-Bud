import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120%;
`;

export const Container = styled.div`
  position: relative;
  background-color: white;
  color: darkslategray;
  border-radius: 50px;
  width: 120%;
  height: 20px; 
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateText = styled.b`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Button = styled.button`
  position: absolute;
  top: 8px; 
  right: 10px; 
  width: 52px;
  height: 35px; 
  border: none; 
  cursor: pointer; 
  background-color: transparent;
`;

export const SecondContainer = styled.div`
  background-color: white;
  color: darkslategray;
  border-radius: 20px;
  width: 120%;
  max-height: 500px; 
  overflow-y: auto;
  padding: 15px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  b {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 52px; 
  height: 35px; 
`;
