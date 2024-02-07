import React from "react";
import {
  Container,
  ButtonGroup,
  Button,
  Card,
  Dropdown,
  FormCheck,
} from "react-bootstrap";
import avatarIcon from "../assets/kids_icon.png";

function UserProfileEdit() {
  return (
    <main className="bg-primary">
      <Container>
        <p className="text-light display-3 border-bottom border-light pb-3 d-flex justify-content-between">
          Edit profile
          <img
            src="./assets/kids_icon.png"
            alt="icon"
            height="50px"
            className="d-block d-md-none"
          />
        </p>
      </Container>
      <Container className="d-flex text-start">
        <img
          src={avatarIcon}
          alt="icon"
          height="150px"
          className="d-none d-md-block"
        />
        <Card className="w-100 mb-3  bg-primary border-bottom border-primary ">
          <Card.Body className="bg-primary border-bottom border-light pe-3">
            <p className="card-text text-light  bg-dark px-4 py-2">
              Strive Student
            </p>
            <p className="text-light">Language:</p>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-black text-light border border-light "
                id="dropdown-basic"
              >
                English
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-black border border-light">
                <Dropdown.Item className="text-light" href="#">
                  Italiano
                </Dropdown.Item>
                <Dropdown.Item className="text-light" href="#">
                  Tedesco
                </Dropdown.Item>
                <Dropdown.Item className="text-light" href="#">
                  Tagalog
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <Card className="w-100 mb-3 border border-primary bg-primary">
            <Card.Body className="bg-primary border-bottom border-light pe-3">
              <p className="card-text text-light fs-2">Maturity Settings:</p>
              <span className="text-light bg-dark px-4 py-2 fw-semibold">
                ALL MATURITY RATINGS
              </span>
              <div className="d-flex text-light mt-4">
                Show titles of
                <p className="fw-semibold mx-1">all maturity rating</p>
                for this profile
              </div>
              <span className="border border-light py-1 px-3 text-light">
                EDIT
              </span>
            </Card.Body>
            <Card.Body className="bg-primary pe-3">
              <p className="card-text text-light fs-2">Autoplay controls</p>
              <FormCheck className="fs-5">
                <FormCheck.Input
                  className="bg-dark rounded-0"
                  type="checkbox"
                  id="exampleCheckbox"
                />
                <FormCheck.Label
                  className="text-light"
                  htmlFor="exampleCheckbox"
                >
                  Autoplay next episode in a series on all devices.
                </FormCheck.Label>
              </FormCheck>
              <FormCheck className="fs-5">
                <FormCheck.Input
                  className="bg-dark rounded-0"
                  type="checkbox"
                  id="exampleCheckbox2"
                />
                <FormCheck.Label
                  className="text-light"
                  htmlFor="exampleCheckbox2"
                >
                  Autoplay previews while browsing on all devices.
                </FormCheck.Label>
              </FormCheck>
            </Card.Body>
          </Card>
        </Card>
      </Container>
      <Container className="mt-4 border-top border-light py-4">
        <ButtonGroup
          className="btn-group-lg d-flex"
          aria-label="Large button group"
        >
          <Button variant="outline-light" className="mx-2 rounded-0">
            Save
          </Button>
          <Button variant="outline-light" className="mx-2 rounded-0">
            Cancel
          </Button>
          <Button variant="outline-light" className="mx-2 rounded-0">
            Delete Profile
          </Button>
        </ButtonGroup>
      </Container>
    </main>
  );
}

export default UserProfileEdit;
