import React, {useState, useEffect} from 'react';

const TargetLangSelector = () => {
    //Set the default items state to an empty array.
    //The setItems function will be used to update the value of items state.
    const [items, setItems] = useState([]);

    /*
     *TODO* Replace the URL in the fetch function.

     The effect will run after the component first renders due to the empty parameter.
     We use an asynchronous function to call to the API.
     The fetch() function makes the API call.
     The setItems() function then maps the body of the response
      to the data structure specified by the items state.
     */

    useEffect(() => {
        async function getLanguages() {
            const response = await fetch("https://translate.yandex.net/api/v1.5/tr.json/getLangs");
            const body = await response.json();
            setItems(body.langs.map(({ lang }) => ({label: lang, value: lang})));
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

export default TargetLangSelector;