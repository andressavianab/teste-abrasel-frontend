import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: ${({ sidebarOpen }) =>
    sidebarOpen ? "300px 1fr" : "50px calc(100% - 50px)"};
  background-color: ${({ route }) => {
    switch (route) {
      case "/cep":
        return "#a6d0f6"; 
      case "/palindromos":
        return "#e2f6eb";
      case "/caixa":
        return "#86e4d3"; 
      case "/veiculo":
        return "#8fc24c"; 
      default:
        return "white"; 
    }
  }};
  transition: background-color 0.5s ease; 
`;

export const Content = styled.div`
  grid-column: ${({ sidebarOpen }) =>
    sidebarOpen ? "2 / span 1" : "1 / span 2"};
  padding-left: 0.5rem;
  height: inherit;
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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
