import React, {useState, createContext, useEffect} from 'react';

export const DictionaryContext = createContext();

//let myheader = new Headers();

//myheader.append('Authorization', 'Basic ' + process.env.REACT_APP_COLLINS_API_KEY);

export const DictionaryProvider = (props) => {

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
    const [dictionaryValue, setDictionaryValue] = useState();

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
            const request = await fetch("https://cors-anywhere.herokuapp.com/https://api.collinsdictionary.com/api/v1/dictionaries", {
                        method: 'GET', 
                        headers: {
                            'accessKey': process.env.REACT_APP_COLLINS_API_KEY,
                        }
                    })
                    //.then( response => response.json())
                    //.then( data => console.log(data) );
            const body = await request.json();
            console.log(body);

            /*
            Create variables for the `source_languages` array and the `language_names` object.
            The `compare` function goes through each item in the `source_lang` array,
            and if the key from the `targetLang` array is in the `langName` object,
            set the keys equal to each other and return the `obj`.
            */
            
            //const dictionaries = body.dictionaryName;
            //console.log(dictionaries);
            
            //Verify the value of `unmounted` is still `false` before we set the state.
            if (!unmounted) {
                setItems(body.filter((item) => item['dictionaryCode'] !== 'english')
                    .map(({dictionaryName, dictionaryCode}) => 
                        ({
                            label: dictionaryName,
                            value: dictionaryCode
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
       <DictionaryContext.Provider value={{
           loading,
           items,
           dictionaryValue,
           setDictionaryValue
       }}>
            {props.children}
       </DictionaryContext.Provider> 
    );

}