import { Choose, Menu, Nav } from "./Styles";
import math from "../../assets/math-operations.svg";
import shoppingCart from '../../assets/shopping-cart.svg'
import car from '../../assets/car.svg'
import mapPin from '../../assets/map-pin-line.svg'

export const Sidebar = () => {
  return (
    <Nav>
      <Choose>
        <p>Escolha um Desafio</p>
      </Choose>
      <Menu>
        <img src={math} alt="" />
        <p>Polindromos</p>
      </Menu>
      <Menu>
        <img src={shoppingCart} alt="" />
        <p>Caixa</p>
      </Menu>
      <Menu>
        <img src={car} alt="" />
        <p>Veículos</p>
      </Menu>
      <Menu>
        <img src={mapPin} alt="" />
        <p>CEP</p>
      </Menu>
    </Nav>
  );
};
