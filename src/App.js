/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DictionarySelector from "./DictionarySelector";
import { DictionaryProvider } from "./DictionaryContext";
import SearchBar from "./SearchBar";
import { SearchBarProvider } from "./SearchBarContext";
import SearchButton from "./SearchButton";
import { SearchButtonProvider } from "./SearchButtonContext";
import { Container, Card, Row, Col } from "react-bootstrap";
import TranslationOutput from "./TranslationOutput";


function App() {
  return (
    <div>
      <Container
        className="card-container pt-5 mb-5"
        style={{ backgroundColor: "eggshell" }}
        fluid
      >
        <DictionaryProvider>
          <SearchBarProvider>
            <SearchButtonProvider>
              <Card className="card-style" style={{ backgroundColor: "#4F5CBE" }}> 
                  <div>
                    <div>
                      <Card.Title style={{ fontSize: "30px" }}>Translr</Card.Title>
                      <Card.Body className="card-body">
                        <Row className="justify-content-lg-center">
                          <Col md={6} lg={6}>
            
                              <SearchBar />
                            
                          </Col>
                          <Col md="auto">      
                              <DictionarySelector />
                          </Col>
                          
                          </Row>
  
                          <Row className="justify-content-lg-center">
                          <Col md={4} lg={2}>
                          <SearchButton />
                          </Col>

                        </Row>
                      </Card.Body>
                    </div>
                  </div>  
              </Card>

              <Card className="output-box"
                
                style={{ backgroundColor: "#C0C0C0", minWidth: '20rem' }}
         
              >
        <Row>
               <Col>
                <TranslationOutput />
                </Col>
                </Row>
              </Card>
            </SearchButtonProvider>
          </SearchBarProvider>
        </DictionaryProvider>
      </Container>
    </div>
  );
}

export default App;
