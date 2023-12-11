import styled from "styled-components";

export const Title = styled.div`
  color: #070e16;
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
  background-color: #fafafb;
  color: #070e16;
`;

export const Button = styled.button`
  background-color: #070e16;
  color: #fafafb;
  &:hover {
    background-color: #0c1923;
  }
`;
