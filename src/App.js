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
        className="card-container"
        style={{ backgroundColor: "eggshell" }}
        fluid
      >
        <DictionaryProvider>
          <SearchBarProvider>
            <SearchButtonProvider>
              <Card className="card-style" style={{ backgroundColor: "#4F5CBE" }}> 
                  <div>
                    <div>
                      <h1><Card.Title style={{ fontSize: "30px" }}>Translr</Card.Title></h1>
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

              <Card className="card-style output-box"
                
                style={{ backgroundColor: "#C0C0C0"}}
         
              >
              {/* <Row className="justify-content-lg-center"> */}
                {/* <Col xs="12" md="10" lg="8"> */}
                <TranslationOutput style={{minWidth: '200px'}}  />
                {/* </Col> */}
                {/* </Row> */}
     
              </Card>
            </SearchButtonProvider>
          </SearchBarProvider>
        </DictionaryProvider>
        <footer id="footer" className="bg-light">
          An app created by <a style={{color: 'blue'}}href="https://github.com/ana-vela">Ana</a> and <a style={{color: 'blue'}} href="https://github.com/huntercallaway">Hunter</a>.
        </footer>
      </Container>
    </div>
  );
}

export default App;
