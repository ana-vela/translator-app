import React, {useContext, useState, useRef, useEffect, useCallback} from 'react';
import {DictionaryContext} from './DictionaryContext';
import {SearchBarContext} from './SearchBarContext';

const SearchButton = () => {

    const sourceContext = useContext(DictionaryContext);
    
    
    const searchContext = useContext(SearchBarContext);
    


    const [isSending, setIsSending] = useState(false);
    const isMounted = useRef(true);

    //When the component unmounts, we will set `isMounted` to `false`.
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    const sendRequest = useCallback(async (event) => {

        const {dictionaryValue} = sourceContext;
        const {searchTerm} = searchContext;

        //Don't send multiple requests simultaneously.
        if (isSending) return;
        //Update the state.
        setIsSending(true);
        //Send the request
        const request = await fetch(`https://cors-anywhere.herokuapp.com/https://api.collinsdictionary.com/api/v1/dictionaries/${dictionaryValue.dictionaryCode}/search/?q=${searchTerm}`, {
            method: 'GET', 
            headers: {
                'accessKey': process.env.REACT_APP_COLLINS_API_KEY,
            }
        })
        const body = await request.json();
        console.log(body);
        //After the request has been sent, update the state again.
        if (isMounted.current) {
            setIsSending(false);
        }

        event.preventDefault();

    }, [isSending, sourceContext, searchContext]);

    return (
        <button disabled={isSending} onClick={sendRequest}>
            Search
        </button>
    );

};

export default SearchButton;