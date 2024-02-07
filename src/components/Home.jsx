import { Col, Container, Row } from "react-bootstrap";
import FilmGallery from "./FilmGallery";

const Home = () => {
  return (
    <Container fluid>
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
    </Container>
  );
};

export default Home;
