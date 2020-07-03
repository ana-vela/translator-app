import React, {useState, useEffect} from 'react';
import { encode } from "base-64";

let headers = new Headers();

headers.append('Authorization', 'Basic ' + encode(process.env.REACT_APP_API_USERNAME + ":" + process.env.REACT_APP_API_PASSWORD));

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
            
            const request = await fetch("https://dictapi.lexicala.com/languages", {
                        method: 'GET', headers: headers
                    });
            const body = await request.json();
            console.log(body);
            
            setItems(body.resources.global.source_languages.map(source_languages => ({label: source_languages, value: source_languages})));
        }
        getLanguages();
    }, []);

    return (
        <select>
            {items.map(item => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );

};

export default LanguageSelector;