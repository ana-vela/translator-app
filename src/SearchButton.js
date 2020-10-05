import React, {useContext, useEffect, useState, useRef} from 'react';
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
    const [search, setSearch] = useState('');

    const [entryId, setEntryId] = useState();

    //This variable will set the ref object's `.current` property to false initially.
    const isMounted = useRef(false);

    /*
      This use effect will run when the button is clicked.
      Due to the conditional block, the effect will not run when the component is initially mounted.
        The `else` block will update the value of the `.current` property to `true`
        and allow the effect to run after the component has been mounted and the button has been clicked.
      It first makes a call to the API to obtain the `entryId` for the search value.
    */
    useEffect(() => {

        if (isMounted.current) {
            async function getEntryId() {
                const firstRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://api.collinsdictionary.com/api/v1/dictionaries/${dictionaryValue}/search/?q=${search}`, {
                    method: 'GET', 
                    headers: {
                        'accessKey': process.env.REACT_APP_COLLINS_API_KEY,
                    }
                })
                const body = await firstRequest.json();
                console.log(body);

                if (body.length > 0 ) {
                    setEntryId(body.find(item => item[0]));
                }
                
                const secondRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://api.collinsdictionary.com/api/v1/dictionaries/${dictionaryValue}/entries/${entryId}`, {
                    method: 'GET', 
                    headers: {
                        'accessKey': process.env.REACT_APP_COLLINS_API_KEY,
                    }
                })
                const translationObject = await secondRequest.json();
                console.log(translationObject);
            }
            getEntryId();
        } else {
            isMounted.current = true;
        }
        

        //async function getTranslation() {

        //}
       
    }, [dictionaryValue, search, entryId]);

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