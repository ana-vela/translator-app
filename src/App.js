/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DictionarySelector from "./DictionarySelector";
import { DictionaryProvider } from "./DictionaryContext";
import SearchBar from "./SearchBar";
import { Container, Card, InputGroup, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="navbar navbar-light bg-light">
        <div id="logo">Translate It!</div>
      </header>
      <Container
        className="card-container pt-5 mb-5"
        style={{ backgroundColor: "eggshell" }}
        fluid
      >
        <Card className="card-style" style={{ backgroundColor: "#4F5CBE" }}>
          <DictionaryProvider>
            <div>
              <div>
                <Card.Title style={{fontSize: "30px"}}>New Search</Card.Title>
                <Card.Body className="card-body">
                  <Row className="justify-content-lg-center">
                    <Col md={6} lg={6}>
                      <SearchBar />
                    </Col>
                    <Col md="auto">
                      <InputGroup.Append>
                        <DictionarySelector />
                      </InputGroup.Append>
                    </Col>
                  </Row>
                  <Button id="submit-button" variant="secondary" size="lg">
                    Submit
                  </Button>
                </Card.Body>
              </div>
            </div>
          </DictionaryProvider>
        </Card>

        <Card
          className="card-style pb-5"
          style={{ backgroundColor: "#C0C0C0" }}
        >
          <Card.Body className="card-body">
            <Row className="justify-content-md-center">
              <Col>
                <textarea
                  type="text"
                  readOnly={true}
                  placeholder="translation results"
                  style={{ height: "200px", width: "25rem", maxWidth: "95%" }}
                ></textarea>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
