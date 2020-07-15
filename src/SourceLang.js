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
      const sourceLang = body.resources.global.source_languages;
      const langName = body.language_names;

      function compare(sourceLang, langName) {
        return sourceLang.reduce(function (newObj, key) {
          if (key in langName) newObj[key] = langName[key];
          return newObj;
        }, {});
      }
      const sourceLangNames = compare(sourceLang, langName);

      setItems(
        Object.values(sourceLangNames).map((sourceLangName) => ({
          label: sourceLangName,
          value: sourceLangName,
        }))
      );
    }
    getLang();
  }, []);

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
