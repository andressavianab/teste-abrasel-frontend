import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Title = styled.div`
  font-family: "Smooch Sans", sans-serif;
  text-transform: uppercase;

  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
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
  font-family: "Manrope", sans-serif;
  max-width: 15.75rem;
  height: 3.25rem;
  border-radius: 13px;
  font-size: 1rem;
  border: none;
  background-color: #f0f0f0;
  outline: none;
  padding-inline: 28px;
`;

export const Button = styled.button`
  width: 100%;
  height: 3.25rem;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
`;

export const Card = styled.div`
  max-width: 37.5rem;
  width: 90%;
  height: 20rem;
  background-color: #f0f0f0;
  padding: 2rem;
  border-radius: 13px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`;