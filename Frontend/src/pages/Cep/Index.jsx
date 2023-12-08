import { useState } from "react";
import { Button, Div, Input, Main, Form, Title } from "./Styles";
import axios from "axios";
import { Map } from "../../components/Map/Index";

export const Ceps = () => {
  const [ceps, setCeps] = useState(["", "", "", "", ""]);
  const [coordinates, setCoordinates] = useState([]);
  const [showMarkers, setShowMarkers] = useState(false);
  const [error, setErrorMessage] = useState("");

  const handleChange = (e, index) => {
    const { value } = e.target;
    const formattedCep = value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2") 
      .slice(0, 9); 

    setCeps((prevCeps) => {
      const newCeps = [...prevCeps];
      newCeps[index] = formattedCep;
      return newCeps;
    });

    setErrorMessage("");
  };

  const fetchViaCep = async (cep) => {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return res.data;
    } catch (error) {
      throw new Error("Cep não encontrado.");
    }
  };

  const fetchCoordinates = async (address) => {
    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyAaWiIZd0uhOztStA_NGAqahkkq2MrF90c`
      );

      if (res.data && res.data.results.length > 0) {
        const { lat, lng } = res.data.results[0].geometry.location;
        return { latitude: lat, longitude: lng };
      } else {
        throw new Error("Coordenadas não encontradas");
      }
    } catch (error) {
      throw new Error("Erro ao buscar coordenadas");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ceps.filter(Boolean).length < 5) {
      setErrorMessage("Por favor, preencha todos os campos");
      return;
    }

    try {
      const newCoordinates = [];

      for (let i = 0; i < ceps.length; i++) {
        const dataViaCep = await fetchViaCep(ceps[i]);
        const address = `${dataViaCep.logradouro}, ${dataViaCep.localidade}, ${dataViaCep.uf}`;
        const dataCoordinates = await fetchCoordinates(address);
        newCoordinates.push(dataCoordinates);
      }

      setCoordinates(newCoordinates.filter((coord) => coord !== null));
      setShowMarkers(true);
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error.message);
      setCoordinates([]);
    }
  };

  return (
    <Main>
      <div style={{ width: "100%" }}>
        <Map coordinates={showMarkers ? coordinates : []} />
      </div>
      <Title>
        <h1>Informe os ceps para consultar ao mapa</h1>
      </Title>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          name="cepUm"
          value={ceps[0]}
          onChange={(e) => handleChange(e, 0)}
          type="text"
          placeholder="00000-000"
        />
        <Input
          name="cepDois"
          value={ceps[1]}
          onChange={(e) => handleChange(e, 1)}
          type="text"
          placeholder="00000-000"
        />
        <Input
          name="cepTres"
          value={ceps[2]}
          onChange={(e) => handleChange(e, 2)}
          type="text"
          placeholder="00000-000"
        />
        <Input
          name="cepQuatro"
          value={ceps[3]}
          onChange={(e) => handleChange(e, 3)}
          type="text"
          placeholder="00000-000"
        />
        <Div>
          <Input
            name="cepCinco"
            value={ceps[4]}
            onChange={(e) => handleChange(e, 4)}
            type="text"
            placeholder="00000-000"
          />
          {error && <p>{error}</p>}
          <Button>enviar</Button>
        </Div>
      </Form>
    </Main>
  );
};
