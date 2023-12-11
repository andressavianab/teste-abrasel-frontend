import { useState } from "react";
import { Button, Content, Form, Input, Title } from "./Styles";
import { CardNumber } from "../../components/CardNumber/Index";

export const Palindromes = () => {
  const [values, setValues] = useState({
    start: 0,
    end: 0,
    palindromes: [],
  });
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrorMessage("")
  };

  const findPalindromes = () => {
    const { start, end } = values;
    let palindromesArray = [];

    for (let i = parseInt(start); i < parseInt(end); i++) {
      const numAsString = String(i);
      if (numAsString === numAsString.split("").reverse().join("")) {
        palindromesArray.push(i);
      }
    }

    setValues({
      ...values,
      palindromes: palindromesArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.start == "" && values.end == "") {
      setErrorMessage("Por favor, preencha todos os campos!")
    }

    findPalindromes();
  };

  return (
    <main>
      <Title>
        <h1>
          Especifique um intervalo de dois números para mostrar os palíndromos
          contidos nele
        </h1>
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          min={0}
          name="start"
          value={values.start}
          onChange={(e) => handleChange(e)}
          placeholder="inicio do intervalo"
          type="number"
        ></Input>
        <Input
          min={0}
          name="end"
          value={values.end}
          onChange={(e) => handleChange(e)}
          placeholder="fim do intervalo"
          type="number"
        ></Input>
        {errorMessage && <p>{errorMessage}</p>}
        <Button>Achar Palíndromos</Button>
      </Form>
      <Content>
        {values.palindromes.map((num, index) => (
          <CardNumber key={index} number={num} />
        ))}
      </Content>
    </main>
  );
};
