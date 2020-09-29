import React, {useContext, useEffect, useState} from 'react';
import {DictionaryContext} from './DictionaryContext';
import {SearchBarContext} from './SearchBarContext';

const SearchButton = () => {

    //The following states are imported from DictionaryContext and SearchBarContext.
    const sourceContext = useContext(DictionaryContext);
    const {dictionaryValue} = sourceContext;
    const searchContext = useContext(SearchBarContext);
    const {searchTerm} = searchContext;

    //This state and the state update function make the useEffect dependent on the search state
    //rather than the searchTerm, which is tied to an event listener that listens for every keystroke.
    const [search, setSearch] = useState();

    //const [entryId, setEntryId] = useState();

    /*This use effect will run when the button is clicked.
      It first makes a call to the API to obtain the `entryId` for the search value.
    */
    useEffect(() => {

        async function getEntryId() {
            const request = await fetch(`https://cors-anywhere.herokuapp.com/https://api.collinsdictionary.com/api/v1/dictionaries/${dictionaryValue}/search/?q=${search}`, {
                method: 'GET', 
                headers: {
                    'accessKey': process.env.REACT_APP_COLLINS_API_KEY,
                }
            })
            const body = await request.json();
            console.log(body);
        }
        getEntryId();

        //async function getTranslation() {

        //}
       
    }, [dictionaryValue, search]);

    //This function prevents the page from refreshing when the button is clicked
    //and runs the search state update function.
    //It will be called in the `onClick` event in the `return` statement.
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searchTerm);
    };
    

    return (
        <button onClick={handleSubmit}>
            Search
        </button>
    );

};

export default SearchButton;