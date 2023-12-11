import styled from "styled-components";

export const Title = styled.div`
  color: #3c8b15;
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
  background-color: #7fe684;
`;

export const Button = styled.button`
  background-color: #3c8b15;
  color: #7fe684;
  &:hover {
    background-color: #589e28;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;