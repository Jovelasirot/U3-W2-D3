import { Col, Row } from "react-bootstrap";
import FilmGallery from "./FilmGallery";

const Home = () => {
  return (
    <>
      <Row className="flex-column">
        <Col>
          <FilmGallery titlePart="Avengers" />
        </Col>
        <Col>
          <FilmGallery titlePart="Harry Potter" />
        </Col>

        <Col>
          <FilmGallery titlePart="The Indiana Jones" />
        </Col>
      </Row>
    </>
  );
};

export default Home;
