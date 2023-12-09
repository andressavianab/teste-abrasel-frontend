import { useState } from "react";
import { Button, Card, Form, Input, Main, Title } from "./Styles";
import xCircle from "../../assets/x-circle.svg";
import styled from "styled-components";

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
`;

export const Cashier = () => {
  const [data, setData] = useState({
    purchaseValue: "",
    moneyValue: "",
    change: 0,
    minimumBills: 0,
    oneDollarBill: 0,
    tenDollarBill: 0,
    aHundredDollarBill: 0,
  });
  const [error, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    const formattedValue = value.replace(/^(\d+\.?\d{0,2})\d*$/, "$1");

    setData({
      ...data,
      [name]: formattedValue,
    });

    setErrorMessage("");
  };

  const calcChange = () => {
    const { purchaseValue, moneyValue } = data;
    let change = moneyValue - purchaseValue;

    let oneDollarBill = 0;
    let tenDollarBill = 0;
    let aHundredDollarBill = 0;

    if (change >= 100) {
      aHundredDollarBill = Math.floor(change / 100);
      change = change % 100;
    }

    if (change >= 10) {
      tenDollarBill = Math.floor(change / 10);
      change = change % 10;
    }

    if (change >= 1) {
      oneDollarBill = change;
    }

    let minimumBills = parseInt(
      oneDollarBill + tenDollarBill + aHundredDollarBill
    );

    oneDollarBill = parseInt(oneDollarBill);
    tenDollarBill = parseInt(tenDollarBill);
    aHundredDollarBill = parseInt(aHundredDollarBill);

    setData({
      ...data,
      change: moneyValue - purchaseValue,
      minimumBills,
      aHundredDollarBill,
      tenDollarBill,
      oneDollarBill,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.purchaseValue == "" || data.moneyValue == "") {
      setErrorMessage("Por favor, preencha todos os campos");
    }

    calcChange();
  };

  return (
    <Main>
      <Title>
        <h1>
          Por favor, informe o valor total da compra e o valor a ser entregue ao
          caixa
        </h1>
      </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="valor total da compra"
          min={0}
          name="purchaseValue"
          value={data.purchaseValue}
          onChange={(e) => handleChange(e)}
        />
        <Input
          min={0}
          name="moneyValue"
          value={data.moneyValue}
          onChange={(e) => handleChange(e)}
          placeholder="valor a ser entregue"
        />
        {error && <p>{error}</p>}
        <Button>Calcular</Button>
      </Form>
      <Card>
        <Texts>
          <p>Valor da compra: R$ {data.purchaseValue} </p>
          <p>Valor do troco: R$ {data.change}</p>
          <p>Número minimo de notas do troco: {data.minimumBills}</p>
          <p>Notas de 1: {data.oneDollarBill}</p>
          <p>Notas de 10: {data.tenDollarBill}</p>
          <p>Notas de 100: {data.aHundredDollarBill}</p>
        </Texts>
        <CloseButton>
          <img src={xCircle} alt="" />
        </CloseButton>
      </Card>
    </Main>
  );
};
