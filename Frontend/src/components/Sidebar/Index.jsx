import { Choose, Nav, Link } from "./Styles";
import math from "../../assets/math-operations.svg";
import shoppingCart from '../../assets/shopping-cart.svg'
import car from '../../assets/car.svg'
import mapPin from '../../assets/map-pin-line.svg'

export const Sidebar = ( {route} ) => {
  return (
    <Nav route={route}>
      <Choose>
        <p>Escolha um Desafio</p>
      </Choose>
      <Link exact to="/palindromos" active="active" activeColor="#3c8b15">
        <img src={math} alt="" />
        <p>Palíndromos</p>
      </Link>
      <Link exact to="/caixa" active="active" activeColor="#17676a">
        <img src={shoppingCart} alt="" />
        <p>Caixa</p>
      </Link>
      <Link exact to="/veiculo" active="active" activeColor="#dcd8cc">
        <img src={car} alt="" />
        <p>Veículos</p>
      </Link>
      <Link exact to="/cep" active="active" activeColor="#e1e1e1"> 
        <img src={mapPin} alt="" />
        <p>CEP</p>
      </Link>
    </Nav>
  );
};
