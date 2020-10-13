import React, {useContext} from 'react';
import {SearchButtonContext} from './SearchButtonContext';

const SearchButton = () => {

    const buttonContext = useContext(SearchButtonContext);
    const {handleSubmit} = buttonContext;

    return (
        <button 
            onClick={handleSubmit}
            id="submit-button"
            variant="secondary"
            size="lg"
            >
            Search
        </button>
    );

};

export default SearchButton;