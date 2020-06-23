import React, {useState, useEffect} from 'react';

const LanguageSelector = () => {
    //Set the default items state to an empty array.
    //The setItems function will be used to update the value of items state.
    const [items, setItems] = useState([]);

    /*
     The effect will run after the component first renders due to the empty parameter.
     We use an asynchronous function to call to the API.
     The fetch() function makes the API call.
     The setItems() function then maps the body of the response
      to the data structure specified by the items state.
     */

    useEffect(() => {
        async function getLanguages() {
            const API_KEY = process.env.REACT_APP_MW_API_KEY;

            const request = await fetch("https://www.dictionaryapi.com/api/v3/references/spanish/json/test?key=" + API_KEY)
                .then(response => response.json())
                .then(data => console.log(data));
            //console.log(response);
            //const body = await response.json();
            
            //setItems(body.meta.lang.map(({ lang }) => ({label: lang, value: lang})));
        }
        getLanguages();
    }, []);

    return (
        <select>
            {items.map(({label, value}) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );

};

export default LanguageSelector;