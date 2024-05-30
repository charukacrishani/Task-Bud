import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: inherit;
  color: inherit;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;

  &::placeholder {
    color: gray;
  }
`;
