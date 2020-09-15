import React, {useContext} from 'react';
import DictionaryContext from './DictionaryContext';

const SearchButton = () => {

    const sourceContext = useContext(DictionaryContext);
    const { dictionaryValue } = sourceContext;

    return (
        <button>
            
        </button>
    );

};

export default SearchButton;