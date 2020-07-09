/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import "./SourceLanguageSelector";
import SourceLanguageSelector from "./SourceLanguageSelector";

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">Logo</div>
      </header>
      <div className="container">
        <div className="item">
          <h2>translate one</h2>
          <form>
            <input
              type="text"
              placeholder="type in a word or phrase here"
              id="lang-one"
            ></input>
           <SourceLanguageSelector /> 
          </form>
        </div>
        <div className="item">
          <h2> translate two</h2>
          <br />
          <form>
            <input type="text" placeholder="translation"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
