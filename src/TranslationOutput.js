import React, {useContext} from 'react';
import {SearchButtonContext} from './SearchButtonContext';
import {Card, Container, Row, Col} from 'react-bootstrap';
//import parse from 'html-react-parser';

const TranslationOutput = () => {

    const buttonContext = useContext(SearchButtonContext);
    const {translationEntry} = buttonContext;

    return(
        <Container>
            <Card>
                <Row>
                    <Col lg={2}>
                        <Card.Body style={{minWidth: '20rem'}}>
                            {translationEntry}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );

};

export default TranslationOutput;