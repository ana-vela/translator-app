import React, {useContext} from 'react';
import {SearchButtonContext} from './SearchButtonContext';
import { Button } from "react-bootstrap";


const SearchButton = () => {

    const buttonContext = useContext(SearchButtonContext);
    const {handleSubmit} = buttonContext;

    return (
        <Button 
            onClick={handleSubmit}
            id="submit-button"
            variant="secondary"
            size="lg"
            block
            >
            Search
        </Button>
    );

};

export default SearchButton;