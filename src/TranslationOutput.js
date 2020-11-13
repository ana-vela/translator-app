import React, { useContext } from "react";
import { SearchButtonContext } from "./SearchButtonContext";
import { Card, Container, Row, Col } from "react-bootstrap";

//import parse from 'html-react-parser';

const TranslationOutput = () => {
  const buttonContext = useContext(SearchButtonContext);
  const { translationEntry } = buttonContext;

  return (
    <Container lg={6} style={{ paddingTop: "50px" }} fluid>
      <Card
        style={{ minWidth: "200px", width: "100%" }}
        className="text-center"
      >
        <Row
          lg={6}
          style={{
            textAlign: "left",
            minWidth: "250px",
            width: "100%",
            justifyContent: "center",
          }}
          className="justify-content-md-center"
        >
          <Col
            // sm={12}
            lg={6}
            style={{
              overflow: "auto",
              width: "100%",
              // textAlign: "left",
              // justifyContent: "center",
            }}
          >
            <Card.Body
              style={{
                minWidth: "250px",
                minHeight: "250px",
                maxHeight: "250px",
                width: "100%",
              }}
            >
              {translationEntry}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default TranslationOutput;
