import styled, { keyframes } from "styled-components";

const showSidebar = keyframes`
 from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
`

const fadeInMenu = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Nav = styled.nav`
  width: 300px;
  height: 98vh;
  background-color: #f0f0f0;
  animation: ${showSidebar} 0.5s;

  border-radius: 10px;
  margin: 10px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  animation: ${fadeInMenu} 0.3s ease-in-out forwards;
  opacity: 0;
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.5s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
  &:nth-child(5) {
    animation-delay: 0.7s;
  }
  `;

export const Choose = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  animation: ${fadeInMenu} 0.5s ease-in-out forwards;
`