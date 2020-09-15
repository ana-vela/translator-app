import React, {useContext} from 'react';
import {SearchBarContext} from './SearchBarContext';

const SearchBar = () => {

    const searchContext = useContext(SearchBarContext);
    const { searchTerm, handleInputChange } = searchContext;

    return (
        <input
            value={searchTerm}
            placeholder={'Type your search here.'}
            onChange = {handleInputChange}
        />
    );
};

export default SearchBar;