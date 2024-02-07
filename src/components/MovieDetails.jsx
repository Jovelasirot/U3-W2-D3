import React, { useState, useEffect } from "react";
import { Button, Col, Placeholder, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);

  const fetchMovieDetails = () => {
    const myUrl = "http://www.omdbapi.com/?apikey=f690f01f&i=";
    const movieId = params.MovieId;
    fetch(myUrl + movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch movie details (˚ ˃̣̣̥⌓˂̣̣̥ )");
        }
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <Container fluid className="bg-primary text-light pt-4">
      {error && <div>Error: {error}</div>}
      {loading && (
        <Container>
          <Row>
            <Col>
              <Spinner animation="border" variant="warning"></Spinner>
            </Col>
            <Col>
              <div className="text-center  mb-5">
                <Placeholder animation="glow">
                  <Placeholder xs={5} />
                </Placeholder>
              </div>
              <div className="text-start">
                <Placeholder animation="glow">
                  <Placeholder xs={5} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {movie && (
        <>
          <Container>
            <Row>
              <Col>
                <img src={movie.Poster} alt={movie.Title} />
              </Col>
              <Col>
                <Row>
                  <Col className="text-start">
                    <h1 className="text-center">{movie.Title}</h1>
                    <div className="d-flex justify-content-between ">
                      <p className="bg-success p-1 rounded-2 ">{movie.Rated}</p>
                      <p className="bg-warning p-1 rounded-2 ">{movie.Genre}</p>
                    </div>
                    <p className="text-end">Directed by: {movie.Director}</p>
                    <p>Cast: {movie.Actors}</p>
                    <h6>Plot</h6>
                    <p>{movie.Plot}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
