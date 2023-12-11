import styled from "styled-components";
import { zoomIn } from "../Caixa/Styles";

export const Title = styled.div`
  color: #081634;
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

export const Input = styled.input`
  background-color: #f6f2e6;
`;

export const Button = styled.button`
  background-color: #081634;
  color: #f6f2e6;
  &:hover {
    background-color: #0d224b;
  }
`;

export const Card = styled.div`
  max-width: 37.5rem;
  width: 90%;
  height: 20rem;
  background-color: #f6f2e6;
  color: #081634;
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
  font-weight: bold;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: #f6f2e6;
`;