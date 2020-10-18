import React, {useContext} from 'react';
import {SearchButtonContext} from './SearchButtonContext';
import {Card} from 'react-bootstrap';
import parse from 'html-react-parser';

const TranslationOutput = () => {

    const buttonContext = useContext(SearchButtonContext);
    const {translationEntry} = buttonContext;

    return(
        <Card style={{ width: '18rem' }}>
        
            <Card.Body>
                <Card.Text>
                    {parse(`${translationEntry}`)}
                </Card.Text>
            </Card.Body>
           
        </Card>
    );

};

export default TranslationOutput;