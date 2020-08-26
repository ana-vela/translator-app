import React from "react";
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
  const FetchSource = async () => {
    const res = await fetch(
      "https://dictapi.lexicala.com/search?source=global&language=es&text=azul",
      {
        method: "GET",
        headers: headers,
      }
    );

    const data = await res.json();
    console.log(data);
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
      <Button variant="primary" onClick={handleClick}>
        Translate
      </Button>
    </div>
  );
}

export default TranslateFunction;
