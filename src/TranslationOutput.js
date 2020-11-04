import React, {useContext} from 'react';
import {SearchButtonContext} from './SearchButtonContext';
import {Card, Container, Row, Col} from 'react-bootstrap';

//import parse from 'html-react-parser';

const TranslationOutput = () => {

    const buttonContext = useContext(SearchButtonContext);
    const {translationEntry} = buttonContext;

    return(
        <Container style={{width: '50%', paddingTop: '50px'}}  >
            <Card style={{minWidth: '200px'}} className="text-center" >
                <Row style={{textAlign: 'left', minWidth: '250px', maxWidth: '100%' }} className="justify-content-md-center">
                    <Col style={{overflow: 'auto'}}>
                        <Card.Body style={{minWidth: '250px' , minHeight: '250px', maxHeight: '250px'}}>
                            {translationEntry}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );

};

export default TranslationOutput;