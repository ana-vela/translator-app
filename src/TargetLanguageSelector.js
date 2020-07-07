import React, {useState, useEffect} from 'react';
import { encode } from "base-64";

let headers = new Headers();

headers.append('Authorization', 'Basic ' + encode(process.env.REACT_APP_API_USERNAME + ":" + process.env.REACT_APP_API_PASSWORD));

const TargetLanguageSelector = () => {

    //We initialize the `loading` state to `true` while we wait for the useEffect() hook to run.
    //In the JSX the `select` element will be disabled while `loading` is `true`.
    const [loading, setLoading] = useState(true);

    //The dropdown menu will display the 'Loading...' label until the component re-renders.
    //The setItems function will be used to update the value of items state.
    const [items, setItems] = useState([
        { label: "Loading...", value: "" }
    ]);

    //This piece of state is bound to the value prop in the `select` statement.
    //There is an `onChange` event listener that will update the state.
    const [value, setValue] = useState();

    /*
     The effect will run after the component first renders due to the empty array in the second parameter.
     We use an asynchronous fetch() function to call to the API.
     The setItems() function then maps the body of the response
      to the data structure specified by the items state.
     The setItems() function will cause the component to re-render and display the dropdown menu items.
     Once the response has been fetched and setItems() updates the `items` state,
      the `loading` state will be set to `false`.
     */

    useEffect(() => {

        //The `unmounted` variable is initialized to `false`.
        let unmounted = false;

        async function getLanguages() {
            
            const request = await fetch("https://dictapi.lexicala.com/languages", {
                        method: 'GET', headers: headers
                    });
            const body = await request.json();
            console.log(body);
            
            //Verify the value of `unmounted` is still `false` before we set the state.
            if (!unmounted) {
                setItems(body.resources.global.source_languages.map(source_languages => 
                    ({label: source_languages, value: source_languages}))
                    );
                setLoading(false);
            }
        }
        getLanguages();

        //Executes when the component is unmounted.
        return () => {
            unmounted = true;
        }
    }, []);

    return (
        <select 
            disabled={loading}
            value={value}
            onChange={e => setValue(e.currentTarget.value)}>
            {items.map(item => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );

};

export default TargetLanguageSelector;