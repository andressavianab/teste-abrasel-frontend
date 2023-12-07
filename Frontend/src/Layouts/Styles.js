import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: ${({ sidebarOpen }) =>
    sidebarOpen ? "300px 1fr" : "50px calc(100% - 50px)"};
`;

export const Content = styled.div`
  grid-column: ${({ sidebarOpen }) =>
    sidebarOpen ? "2 / span 1" : "1 / span 2"};
    padding-left: 0.5rem;
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-right: 1px solid #ebeef0;
`;

export const ArrowIcon = styled.span`
  display: block;
  position: absolute;
  left: 300;
  top: 50%;
  cursor: pointer;
  z-index: 1;
  transform: ${({ sidebarOpen }) => !sidebarOpen && "rotate(-180deg)"};
  transition: transform 0.6s ease;
`;
