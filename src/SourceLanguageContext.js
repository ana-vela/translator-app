import React, {useState, createContext, useEffect} from 'react';
import { encode } from "base-64";

export const SourceLanguageContext = createContext();

let headers = new Headers();

headers.append('Authorization', 'Basic ' + encode(process.env.REACT_APP_API_USERNAME + ":" + process.env.REACT_APP_API_PASSWORD));

export const SourceLanguageProvider = (props) => {

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
    const [sourceValue, setSourceValue] = useState();

    /*
     The effect will only run when the component first renders (i.e. when it is mounted)
      due to the empty array in the second parameter.
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

            //Make a call to the API and parse the response as JSON.
            const request = await fetch("https://dictapi.lexicala.com/languages", {
                        method: 'GET', headers: headers
                    });
            const body = await request.json();

            /*
            Create variables for the `source_languages` array and the `language_names` object.
            The `compare` function goes through each item in the `source_lang` array,
            and if the key from the `targetLang` array is in the `langName` object,
            set the keys equal to each other and return the `obj`.
            */
            const sourceLang = body.resources.global.source_languages;
            const langName = body.language_names;

            const compare = (sourceLanguage, languageName) => {
                return sourceLanguage.reduce((obj, key) => {
                    if (key in languageName) {
                        obj[key] = languageName[key];
                    }
                    return obj;
                }, {});
            }

            const sourceLanguageNames = compare(sourceLang, langName);
            
            //Verify the value of `unmounted` is still `false` before we set the state.
            if (!unmounted) {
                setItems(
                    Object.values(sourceLanguageNames).map((sourceLanguageName) => ({
                        label: sourceLanguageName,
                        value: sourceLanguageName
                    }))
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

    return(
       <SourceLanguageContext.Provider value={{
           loading,
           items,
           sourceValue,
           setSourceValue
       }}>
            {props.children}
       </SourceLanguageContext.Provider> 
    );

}