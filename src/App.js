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
        style={{ backgroundColor: "eggshell", width: "100%" }}
        fluid
      >
        <Card
          className="card-style"
          style={{ minWidth: "400px", backgroundColor: "#4F5CBE" }}
        >
          <DictionaryProvider>
            <div>
              <div>
                <Card.Title>New Search</Card.Title>
                <Card.Body className="card-body">
                  <Row>
                    <Col>
                      <SearchBar />
                    </Col>
                    <InputGroup.Append>
                      <DictionarySelector />
                    </InputGroup.Append>
                  </Row>
                  <Button variant="secondary" size="lg">
                    Submit
                  </Button>
                </Card.Body>
              </div>
            </div>
          </DictionaryProvider>
        </Card>

        <Card
          className="card-style pb-5"
          style={{ minWidth: "400px", backgroundColor: "#C0C0C0" }}
        >
          <Card.Body className="card-body">
            <input
              type="text"
              placeholder="translation results"
              style={{ height: "50px" }}
            ></input>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
