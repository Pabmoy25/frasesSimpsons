import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logosimpson from "./imagenes/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import ObtenerFrase from "./componentes/ObtenerFrase";
import { useEffect, useState } from "react";

function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({})

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const datos = await respuesta.json();
    console.log(respuesta);
    console.log(datos);
    //guardar los datos del api en el state
    setFrasePersonaje(datos[0])
    
    
  };

  return (
    <>
      <Container className="text-center my-5">
        <img
          src={logosimpson}
          alt="logo del los simpsons"
          className="w-50"
        ></img>
        <ObtenerFrase frasePersonajeProps={frasePersonaje}></ObtenerFrase>
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
