import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logosimpson from "./imagenes/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import ObtenerFrase from "./componentes/ObtenerFrase";
import { useState } from "react";

function App() {
  const [frasePersonaje] = useState({})

  return (
    <>
      <Container className="text-center my-5">
        <img
          src={logosimpson}
          alt="logo del los simpsons"
          className="w-50"
          ></img>
          <ObtenerFrase frasePersonajeProps={frasePersonaje}></ObtenerFrase>
          <Button variant="warning">Obtener frase</Button>
      </Container>
    </>
  );
}

export default App;
