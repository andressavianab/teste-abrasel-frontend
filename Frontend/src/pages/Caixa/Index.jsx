import { useState } from "react";
import { Button, Card, Form, Input, Title, CloseButton, Texts } from "./Styles";
import xCircle from "../../assets/x-circle.svg";

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
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const formattedValue = value
      .replace(/[^0-9.]/g, "")
      .replace(/^(\d*\.?\d{0,2}).*/, "$1");

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
      return;
    }

    calcChange();
    setShowCard(true);
  };

  const handleClick = () => {
    setData({
      purchaseValue: "",
      moneyValue: ""
    })
    setShowCard(false)
  }

  return (
    <main>
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
      {showCard && ( 
        <Card>
          <Texts>
            <p>Valor da compra: R$ {data.purchaseValue} </p>
            <p>Valor do troco: R$ {data.change}</p>
            <p>Número mínimo de notas do troco: {data.minimumBills}</p>
            <p>Notas de 1: {data.oneDollarBill}</p>
            <p>Notas de 10: {data.tenDollarBill}</p>
            <p>Notas de 100: {data.aHundredDollarBill}</p>
          </Texts>
          <CloseButton onClick={() => handleClick()}>
            <img src={xCircle} alt="" />
          </CloseButton>
        </Card>
      )}
    </main>
  );
};
