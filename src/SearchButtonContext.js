import React, {useContext, useEffect, useState, useRef, createContext} from 'react';
import {DictionaryContext} from './DictionaryContext';
import {SearchBarContext} from './SearchBarContext';
import parse from 'html-react-parser';

export const SearchButtonContext = createContext();

export const SearchButtonProvider = (props) => {

    //The following states are imported from DictionaryContext and SearchBarContext.
    const sourceContext = useContext(DictionaryContext);
    const {dictionaryValue} = sourceContext;
    const searchContext = useContext(SearchBarContext);
    const {searchTerm} = searchContext;

    //This state and the state update function make the `useEffect` dependent on the `search` state
    //rather than the `searchTerm`, which is tied to an event listener that listens for every keystroke.
    const [search, setSearch] = useState('');

    //This state and the state update function make the `useEffect` dependent on the `dictionaryChoice` state
    //rather than the `dictionaryValue`.
    const [dictionaryChoice, setDictionaryChoice] = useState();

    //This variable will set the ref object's `.current` property to `false` initially.
    const isMounted = useRef(false);

    //This state and the update function will hold the parsed `entryContent` HTML string.
    const [translationEntry, setTranslationEntry] = useState();

    /*
      This use effect will run when the button is clicked.
      Due to the conditional block, the effect will not run when the component is initially mounted.
        The `else` block will update the value of the `.current` property to `true`
        and allow the effect to run after the component has been mounted and the button has been clicked.
      The `fetch` statement makes a call to the Collins API and passes in the selected `dictionaryValue`
       and the `search` term entered in the search bar.
      The API will then return an HTML string with the `entryContent`.
      Finally, the third-party `html-react-parser` library will convert the HTML string into a React element.
    */

    useEffect(() => {

        if (isMounted.current) {
            const getTranslation = async () => {
                const firstRequest = await fetch(`https://cors-anywhere.herokuapp.com/https://api.collinsdictionary.com/api/v1/dictionaries/${dictionaryChoice}/search/first/?q=${search}`, {
                    method: 'GET', 
                    headers: {
                        'accessKey': process.env.REACT_APP_COLLINS_API_KEY,
                    }
                })
                const body = await firstRequest.json();
                console.log(body);

                setTranslationEntry(parse(`${body}`));
            }

            getTranslation();
            
        } else {
           isMounted.current = true;
        }
       
    }, [dictionaryChoice, search]);

    /*
      This function prevents the page from refreshing when the button is clicked
        and runs the search state update function.
      The `searchTerm` from the SearchBarContext is passed into the `setSearch` function
        to prevent API calls on every keystroke.
      The `dictionaryValue` from the DictionaryContext is passed into the `setDictionaryChoice` function
        to prevent API calls when the dictionary is changed but the button has not been clicked.
      It will be called in the `onClick` event in the `return` statement.
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searchTerm);
        setDictionaryChoice(dictionaryValue);
    };

    return (
        <SearchButtonContext.Provider value={{
            handleSubmit,
            translationEntry
        }}>
            {props.children}
        </SearchButtonContext.Provider>
    )

};