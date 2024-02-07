import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from "react-bootstrap";
import Search from "./Search";

const TVShows = () => (
  <Container fluid className="">
    <Row className="justify-content-between bg-primary text-light  align-items-center px-2 ">
      <Col>
        <div className="d-flex align-items-center ">
          <div>
            <h2 className="me-3 fs-6 d-sm-none  ">TV Shows</h2>
            <h2 className="d-none d-sm-block me-3">TV Shows</h2>
          </div>
          <div>
            <Dropdown className="ms-3">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="primary border border-1  border-secondary mt-1   rounded-0 p-1"
              >
                Geners
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Col>
      <Col className="text-end fs-5">
        <i className="bi bi-grid icons me-4"></i>
        <i className="bi bi-grid-3x3 icons"></i>
      </Col>
    </Row>
    <Row>
      <Search />
    </Row>
  </Container>
);

export default TVShows;
