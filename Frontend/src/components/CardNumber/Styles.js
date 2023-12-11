import styled, { keyframes } from "styled-components";

const fadeInCard = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const Card = styled.div`
  width: 7.85rem;
  border-radius: 13px;
  background-color: #7fe684;
  color: #3c8b15;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadeInCard} 0.5s ease-in-out forwards;
`; 