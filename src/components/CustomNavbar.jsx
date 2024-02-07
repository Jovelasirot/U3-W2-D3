import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  return (
    <Navbar expand="lg" className="bg-primary text-light" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" className="logNavBar" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-semibold ">
            <Link
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/TVShows"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/TVShows"
            >
              Tv Shows
            </Link>
            <Link
              className={
                location.pathname === "/Movies" ? "nav-link active" : "nav-link"
              }
              to="/Movies"
            >
              Movies
            </Link>

            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center ">
            <Nav.Link href="#">
              <i className="bi bi-search icons text-light"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <div id="kids" className="fw-bold text-light">
                KIDS
              </div>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bell icons text-light"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-person-circle icons text-light"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
