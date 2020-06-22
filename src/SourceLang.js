import React from "react";

function SourceLang() {
  // const [items, setItems] =React.useState([]);
  fetch(
    "https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=xxx"
  )
    .then((response) => response.json())
    .then((data) => console.log(data[0].meta.src))
    .catch((err) => {
      console.log(err);
    });
  return <div>New Component</div>;
}

export default SourceLang;
