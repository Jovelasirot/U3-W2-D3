import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class FilmGallery extends Component {
  state = {
    films: [],
    error: null,
    loading: true,
    selected: false,
  };

  fetchFilms = () => {
    const myUrl = "http://www.omdbapi.com/?apikey=f690f01f&s=";
    const { titlePart } = this.props;
    this.setState({ loading: true });
    fetch(myUrl + titlePart)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch films (˚ ˃̣̣̥⌓˂̣̣̥ )");
        }
      })
      .then((data) => {
        this.setState({ films: data.Search, loading: false });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
        this.setState({ error: error.message, loading: false });
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { films, error, loading } = this.state;
    return (
      <Container fluid className="bg-primary text-light pt-4 text-center">
        {error && <div>Error: {error}</div>}
        {loading && <Spinner animation="border" variant="warning"></Spinner>}
        <Row>
          <Col>
            <h4 className="text-start ms-2">{this.props.titlePart}</h4>
          </Col>
          <Col className="text-end">
            <Button
              variant="primary"
              className="rounded-0 p-1  border-1  border-secondary"
              onClick={() => {
                this.setState({
                  selected: !this.state.selected,
                });
              }}
            >
              {this.state.selected === true ? "Hide Titles" : "Show Titles"}
            </Button>
          </Col>
        </Row>
        <Row
          xs={1}
          sm={1}
          md={3}
          lg={4}
          xl={6}
          className="g-2 justify-content-center "
        >
          {films.slice(0, 6).map((film, index) => (
            <Col key={index}>
              <Link to={`/MovieDetails/${film.imdbID}`}>
                <div className="image-container anima">
                  <img
                    src={film.Poster}
                    alt={film.Title}
                    className="mt-1 w-75 h-100"
                  />
                  {this.state.selected && (
                    <Col className="text-light">{film.Title}</Col>
                  )}
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FilmGallery;
