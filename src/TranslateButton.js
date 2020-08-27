import React, { useState } from "react";
import { encode } from "base-64";
import Button from "react-bootstrap/Button";
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

function TranslateFunction() {
  const [query, setQuery] = useState("");

  const [word, setWord] = useState([]);
  const FetchSource = async () => {
    const res = await fetch(
      `https://dictapi.lexicala.com/search?source=global&language=es&text=${query}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const data = await res.json();
    console.log(data);
    console.log(data.results);
    setWord(data.results);
    // return data;
    return TranslateFunction;
    // console.log(TargetLang());
  };
  function handleClick(e) {
    e.preventDefault();
    console.log("test");

    return FetchSource();
  }
  return (
    <div>
      <input
        type="text"
        name="query"
        placeholder="type in a word or phrase here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="lang-one"
      ></input>
      <Button variant="primary" onClick={handleClick}>
        Translate
      </Button>
    </div>
  );
}

export default TranslateFunction;
