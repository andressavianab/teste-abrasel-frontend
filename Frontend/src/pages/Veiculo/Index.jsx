import xCircle from "../../assets/x-circle.svg";
import { useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Form,
  Input,
  Main,
  Texts,
  Title,
} from "./Styles";
import { Car, Motorcycle } from "./Veiculo";

export const Vehicle = () => {
  const [vehicleData, setVehicleData] = useState({
    model: "",
    yearManufacture: "",
    numberDoors: "",
    brand: "",
    wheels: "",
    passengers: "",
  });
  const [vehicleType, setVehicleType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value,
    });

    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newVehicle;

    if (
      !vehicleData.model ||
      !vehicleData.yearManufacture ||
      !vehicleData.numberDoors ||
      !vehicleData.brand ||
      !vehicleData.wheels
    ) {
      setErrorMessage("Por favor, preencha todos os campos!");
    }

    if (
      (vehicleData.numberDoors === "0" && vehicleData.wheels >= "3") ||
      (vehicleData.numberDoors >= 1 && vehicleData.wheels > 2)
    ) {
      setErrorMessage("Veículo inválido!");
    }

    try {
      if (vehicleData.wheels === "2" && vehicleData.numberDoors === "0") {
        newVehicle = new Motorcycle(
          vehicleData.model,
          vehicleData.yearManufacture,
          vehicleData.brand,
          vehicleData.passengers
        );
        setVehicleType("Moto");
        return;
      }

      if (vehicleData.numberDoors >= 1 && vehicleData.numberDoors <= 4) {
        newVehicle = new Car(
          vehicleData.model,
          vehicleData.yearManufacture,
          vehicleData.numberDoors,
          vehicleData.brand
        );
        setVehicleType("Carro");
        return;
      }

      const jsonData = JSON.stringify(newVehicle);
      setVehicleData([...vehicleData, jsonData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <Title>
        <h1>Preencha as informações sobre o seu veículo</h1>
      </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Modelo"
          value={vehicleData.model}
          onChange={(e) => handleChange(e)}
          name="model"
        />
        <Input
          placeholder="Ano de fabricação"
          value={vehicleData.yearManufacture}
          onChange={(e) => handleChange(e)}
          name="yearManufacture"
          pattern="\d{4}"
          maxLength={4}
        />
        <Input
          placeholder="Quantidade de portas"
          type="number"
          min={0}
          max={4}
          value={vehicleData.numberDoors}
          onChange={(e) => handleChange(e)}
          name="numberDoors"
        />
        <Input
          placeholder="Marca"
          value={vehicleData.brand}
          onChange={(e) => handleChange(e)}
          name="brand"
        />
        <Input
          placeholder="Quantidade de rodas"
          type="number"
          min={2}
          max={4}
          value={vehicleData.wheels}
          onChange={(e) => handleChange(e)}
          name="wheels"
        />
        <Button>Enviar informações</Button>
        {errorMessage && <p>{errorMessage}</p>}
      </Form>
      <Card>
        <Texts>
          <p>Tipo de veículo: {vehicleType} </p>
          <p>Modelo: {vehicleData.model} </p>
          <p>Ano de fabricação: {vehicleData.yearManufacture} </p>
          <p>Marca: {vehicleData.brand} </p>
        </Texts>
        <CloseButton>
          <img src={xCircle} alt="" />
        </CloseButton>
      </Card>
    </Main>
  );
};
