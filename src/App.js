/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DictionarySelector from "./DictionarySelector";
import { DictionaryProvider } from "./DictionaryContext";
import SearchBar from "./SearchBar";
import { SearchBarProvider } from "./SearchBarContext";
import SearchButton from "./SearchButton";
import { Container, Card, InputGroup, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container
        className="card-container pt-5 mb-5"
        style={{ backgroundColor: "eggshell" }}
        fluid
      >
        <Card className="card-style" style={{ backgroundColor: "#4F5CBE" }}>
          <DictionaryProvider>
            <div>
              <div>
                <Card.Title style={{ fontSize: "30px" }}>New Search</Card.Title>
                <Card.Body className="card-body">
                  <Row className="justify-content-lg-center">
                    <Col md={6} lg={6}>
                      <SearchBarProvider>
                        <SearchBar />

                        <SearchButton />
                      </SearchBarProvider>
                    </Col>
                    <Col md="auto">
                      <InputGroup.Append>
                        <DictionarySelector />
                      </InputGroup.Append>
                    </Col>
                  </Row>
                </Card.Body>
              </div>
            </div>
          </DictionaryProvider>
        </Card>

        <Card
          className="card-style pb-5"
          style={{ backgroundColor: "#C0C0C0", alignItems: "center" }}
        >
          <Card.Body className="card-body">
            <Row className="justify-content-md-center" style={{alignItems: "center"}}>
              <Col >
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
