import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logosimpson from "./imagenes/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import ObtenerFrase from "./componentes/ObtenerFrase";
import { useEffect, useState } from "react";


function App() {
  const [frasePersonaje, setFrasePersonaje] = useState({})
  const [error, setError] = useState ("")

  useEffect(() => {
    consultarAPI();
  }, []);

  
  const consultarAPI = async () => {

    try {const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes___"
    );
    const datos = await respuesta.json();
    console.log(respuesta);
    console.log(datos);
    //guardar los datos del api en el state
    setFrasePersonaje(datos[0])
      
    } catch (error) {
      setError ("Disculpe, en esta momento no se puede procesar la solicitud, intentalo más tarde")
          
    }
    
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
       <h5 className="text-danger">{error}</h5> 
        </Container>
    </>
  );
}

export default App;
