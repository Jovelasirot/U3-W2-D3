import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

class Search extends Component {
  state = {
    films: [],
    error: null,
    searchValue: "",
    loading: false,
  };

  fetchFilms = () => {
    const filmUrl = "http://www.omdbapi.com/?apikey=f690f01f&s=";
    const { searchValue } = this.state;
    fetch(filmUrl + searchValue)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          this.setState({ films: data.Search, loading: false });
          console.log(data);
        } else {
          this.setState({
            films: [],
            loading: false,
            error: "Something went wrong while searching your film (╯•ᗣ•╰)",
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
        this.setState({ error: error.message, loading: false });
      });
  };

  handleSearch = () => {
    this.setState({ loading: true, error: null, searchValue: "" });
    this.fetchFilms();
  };

  render() {
    const { films, loading, error } = this.state;

    return (
      <Container fluid className="pt-4 bg-primary text-light pb-5">
        <Row>
          <Col>
            <h4 className="text-start">Find your favorite film</h4>
          </Col>
          <Col sm={1} md={3} lg={2} xl={2}>
            <Form>
              <Form.Control
                type="text"
                className="rounded-1"
                placeholder="Find a film"
                value={this.state.searchValue}
                onChange={(e) => {
                  this.setState({ searchValue: e.target.value });
                }}
              />
            </Form>
          </Col>
          <Col xs="auto">
            <Button
              onClick={this.handleSearch}
              variant="warning"
              className="rounded-1"
            >
              <i className="bi bi-search"></i>
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3 g-3 mx-3 mx-md-0">
          {loading ? (
            <Spinner animation="border" variant="warning"></Spinner>
          ) : error ? (
            <Col xs={12}>
              <p>Error: {error}</p>
            </Col>
          ) : (
            <>
              <Row
                xs={1}
                md={2}
                lg={3}
                xl={6}
                className="justify-content-center gy-5 "
              >
                {films && films.length > 0 ? (
                  films.map((film) => (
                    <Col key={film.imdbID}>
                      <img
                        src={film.Poster}
                        alt={film.Title}
                        className="h-100 w-75"
                      />
                      <div>{film.Title}</div>
                    </Col>
                  ))
                ) : (
                  <p>Waiting for you to search</p>
                )}
              </Row>
            </>
          )}
        </Row>
      </Container>
    );
  }
}

export default Search;
