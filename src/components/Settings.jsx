import React from "react";
import {
  Container,
  ButtonGroup,
  Button,
  Card,
  Dropdown,
  FormCheck,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatarIcon from "../assets/kids_icon.png";

const Setting = () => (
  <Container fluid className="bg-light">
    <Container className="bg-light">
      <Row>
        <p className="text-dark text-start display-3 border-bottom border-info pb-3 fw-semibold">
          Account
        </p>
      </Row>
      <Container className="text-info">
        <Row className="text-start border-bottom border-info">
          <Col className="d-flex flex-column " sm={4}>
            <h4>MEMBERSHIP & BILLING</h4>
            <p className="p-4 bg-danger border-bottom border-info ">
              {" "}
              Cancel Membership
            </p>
          </Col>

          <Col>
            <div className="d-flex justify-content-between ">
              <p className="fw-bold">studen@gstrive.school</p>
              <p className="text-success fw-bold ">Change account email</p>
            </div>
            <div className="d-flex justify-content-between ">
              <p>Password:********</p>
              <p className="text-success fw-bold ">Change password</p>
            </div>
            <div className="d-flex justify-content-between border-bottom border-info">
              <p>Phone: 321 044 12333 </p>
              <p className="text-success fw-bold ">Change phone number</p>
            </div>
            <div className="text-end">
              <p className="text-success fw-bold ">
                Redeem gift card or promo code
              </p>
              <p className="text-success fw-bold ">Where to buy gift cards</p>
            </div>
          </Col>
        </Row>
        <Row className="border-bottom border-info pt-3">
          <div className="d-flex justify-content-between ">
            <h4>PLAN DETAILS</h4>
            <p className="fs-5 text-dark fw-bold ">
              Premium <i className="bi bi-badge-4k-fill"></i>
            </p>
            <p className="text-success fw-bold ">Change plan</p>
          </div>
        </Row>
        <Row className="text-start border-bottom border-info pt-3">
          <Col className="d-flex flex-column " sm={4}>
            <h4>SETTINGS</h4>
          </Col>

          <Col>
            <p className="text-success fw-bold ">Parental controls</p>
            <p className="text-success fw-bold ">Test participation</p>
            <p className="text-success fw-bold ">Manage download devices</p>
            <p className="text-success fw-bold ">Active a device</p>
            <p className="text-success fw-bold ">
              Recent device streaming activity
            </p>
            <p className="text-success fw-bold ">Sign out of all devices</p>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col className="text-start " sm={4}>
            <h4>MY RPOFILE</h4>
          </Col>
          <Col className="d-flex justify-content-between ">
            <div className="d-flex">
              <p className="fw-bold text-dark">
                <img src={avatarIcon} alt="avatar" className="iconSetting" />
                Strive Student
              </p>
            </div>
            <div>
              <p className="text-success fw-bold ">Manage profiles</p>
              <p className="text-success fw-bold ">Add profile email</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
            <p className="text-success fw-bold ">Language</p>
            <p className="text-success fw-bold ">Playback settings</p>
            <p className="text-success fw-bold ">Subtitle appearance</p>
          </Col>
          <Col>
            <p className="text-success fw-bold ">Viewing activity</p>
            <p className="text-success fw-bold ">Ratings</p>
          </Col>
        </Row>
      </Container>
    </Container>
  </Container>
);

export default Setting;
