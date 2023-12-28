import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logosimpson from "./imagenes/logosimpson.png";

function App() {
  return (
    <>
      <article className="text-center">
      <img className="w-25 mt-5"  src= {logosimpson} alt="logo del los simpsons"/>
      </article>
    </>
  );
}

export default App;
