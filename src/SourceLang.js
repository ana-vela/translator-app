import React from "react";
import { encode } from "base-64";

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic ' + encode(process.env.REACT_APP_API_USER + ":" + process.env.REACT_APP_API_PW));

function SourceLang() {
  // const [items, setItems] = React.useState([]);
  //
  // React.useEffect(() => {
  //   // async function getLang() {
  //     const response = await fetch(url, {method: 'GET',
  //   headers: headers});
    // const body = await response.json();
    // setItems(body.results && body.results.map(({ language_names }) => ({ label: language_names, value: language_names })));
//   }
//   getLang();
// }, []);
// }
    fetch('https://dictapi.lexicala.com/languages', {method:'GET',
            headers: headers
           })
    .then((response) => response.json())
    .then((data) => console.log(data.resources.global.source_languages, data))
    .catch((err) => {
      console.log(err);
    });
  return (

    // <div>
    <h1>hi</h1>
    //
    // // <select>
    // // {items.map(({ label, value }) => (
    // //   <option key={value} value={value}>
    // //   {label}
    // //   </option>
    // // ))}
    // // </select>
    // </div>
  );
}

export default SourceLang;
