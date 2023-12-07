import { Choose, Nav, Link } from "./Styles";
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
      <Link>
        <img src={math} alt="" />
        <p>Polindromos</p>
      </Link>
      <Link>
        <img src={shoppingCart} alt="" />
        <p>Caixa</p>
      </Link>
      <Link>
        <img src={car} alt="" />
        <p>Veículos</p>
      </Link>
      <Link exact to="/cep" active="active"> 
        <img src={mapPin} alt="" />
        <p>CEP</p>
      </Link>
    </Nav>
  );
};
