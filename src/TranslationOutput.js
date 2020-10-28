import React, {useContext} from 'react';
import {SearchButtonContext} from './SearchButtonContext';
import {Card, Container, Row, Col} from 'react-bootstrap';
// import { Link, animateScroll as scroll } from "react-scroll";


//import parse from 'html-react-parser';

const TranslationOutput = () => {

    const buttonContext = useContext(SearchButtonContext);
    const {translationEntry} = buttonContext;

    // var Scroll = require('react-scroll');
    // var scroll = Scroll.animateScroll;

    // scroll.scrollTo(100, options);


    return(
        <Container>
            <Card>
                <Row>
                    <Col lg={2}>
             
                        <Card.Body style={{minWidth: '200px' , minHeight: '250px', maxHeight: '250px'}}>
                            {translationEntry}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );

};

export default TranslationOutput;