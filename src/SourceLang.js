import React, { useState } from "react";
import { encode } from "base-64";
import { useQuery } from "react-query";
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
  const [items, setItems] = useState([]);

  const FetchSource = async () => {
    const res = await fetch("https://dictapi.lexicala.com/languages", {
      method: "GET",
      headers: headers,
    });

    const data = await res.json();
    const sourceLang = data.resources.global.source_languages;
    const langName = data.language_names;

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
    return data;
  };

  function GetLang() {
    const { status, data, error } = useQuery("sourceLanguages", FetchSource);

    if (status === "loading") return <div>Loading...</div>;
    if (status === "error") return <div>Error! {error}</div>;
    if (status === "success") return <div>Success</div>;

    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}; </pre>
      </div>
    );
  }
  GetLang();
  return (
    <div>
      {" "}
      <select>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SourceLang;
