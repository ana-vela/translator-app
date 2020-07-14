import React from "react";
import { encode } from "base-64";

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append(
  "Authorization",
  "Basic " +
    encode(
      process.env.REACT_APP_API_USERNAME +
        ":" +
        process.env.REACT_APP_API_PASSWORD
    )
);

function SourceLang() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function getLang() {
      const response = await fetch("https://dictapi.lexicala.com/languages", {
        method: "GET",
        headers: headers,
      });
      const body = await response.json();
      setItems(
        Object.keys(body.language_names).map((language_names) => ({
          label: language_names,
          value: language_names,
        }))
      );

      //testing filter method
      // let comparing = Object.keys(body.language_names).filter((language) =>
      //   body.resources.global.source_languages.includes(language)
      // );
      // console.log(comparing);

      // testing reduce method
      const sourceLang = body.resources.global.source_languages;
      const langName = body.language_names;
      function compare(sourceLang, langName) {
        return sourceLang.reduce(function (newObj, key) {
          if (key in langName) newObj[key] = langName[key];
          return newObj;
        }, {});
      }
      console.log(compare(sourceLang, langName));
    }
    getLang();
  }, []);

  // fetch('https://dictapi.lexicala.com/languages', {method:'GET',
  //         headers: headers
  //        })
  // .then((response) => response.json())
  // .then((data) => console.log(data.resources.global.source_languages, data))
  // .catch((err) => {
  //   console.log(err);
  // });
  return (
    <select>
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default SourceLang;
