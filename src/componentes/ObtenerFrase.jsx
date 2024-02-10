import { Card } from "react-bootstrap";

const ObtenerFrase = ({frasePersonajeProps}) => {
    return (
      <section className="my-5">
        <h2>{frasePersonajeProps.character}</h2>
        <hr />
        <img className="mb-3" src={frasePersonajeProps.image} alt={frasePersonajeProps.character} />
        <Card>
          <Card.Body>
            <figure>
              <blockquote className="blockquote">
                <p>{frasePersonajeProps.quote}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
              {frasePersonajeProps.character} in <cite title="Source Title">The Simpsons</cite>
              </figcaption>
            </figure>
          </Card.Body>
        </Card>
      </section>
    );
  };
  

export default ObtenerFrase;