import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MyFooter = () => (
  <>
    <Container fluid className="bg-primary text-info">
      <Row className="justify-content-center pt-5" sm={1}>
        <Col sm={6}>
          <Row>
            <Col className="mb-2 text-start">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row className="align-items-center ">
            <Col sm={12} md={4} lg={3}>
              <div className="mt-1 text-start">
                <p className="mb-0">Audio and Subtitles</p>
                <p className="mb-0">Media Center</p>
                <p className="mb-0">Privacy</p>
                <p className="mb-0">Contact us</p>
              </div>
            </Col>
            <Col className="text-start" sm={12} md={4} lg={3}>
              <p className="mb-0 ">Audio Description</p>
              <p className="mb-0">Investor Relations</p>
              <p className="mb-0 ">Legal Notices</p>
            </Col>
            <Col className="text-start" sm={12} md={4} lg={3}>
              <p className="mb-0 ">Help Center</p>
              <p className="mb-0">Jobs</p>
              <p className="mb-0 ">Cookie Preferences</p>
            </Col>
            <Col className="text-start" sm={12} md={4} lg={3}>
              <p className="mb-0">Gift Cards</p>
              <p className="mb-0">Terms of Use</p>
              <p className="mb-0"> Corporate Information</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3 text-info border  border-info"
              >
                Service Code
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="copyright text-info text-start my-2">
              © 1997-2023 Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
);

export default MyFooter;
