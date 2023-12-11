import { keyframes, styled } from "styled-components";

export const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Title = styled.div`
color: #17676a;
`;

export const Form = styled.form`
  max-width: 37.5rem;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Div = styled.div`
  max-width: 30.75rem;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  background-color: #b7e2c6;
`;

export const Button = styled.button`
 background-color: #17676a;
 color: #b7e2c6;
 &:hover{
  background-color: #2b8a8f;
 }
`;

export const Card = styled.div`
  max-width: 37.5rem;
  width: 90%;
  height: 20rem;
  background-color: #b7e2c6;
  padding: 2rem;
  border-radius: 13px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  animation: ${zoomIn} 0.5s ease forwards;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #17676a;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: #b7e2c6;
`;