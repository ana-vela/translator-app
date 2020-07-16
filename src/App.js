/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import SourceLang from "./SourceLang";

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
            <div className="dropdown first-lang">
              <SourceLang />
            </div>
          </form>
        </div>
        <div className="item">
          <h2> translate two</h2>
          <br />
          <form>
            <input type="text" placeholder="translation"></input>
            <div className="dropdown target-lang">
              <button>
                <a href="#" type="dropdown" placeholder="select your language">
                  Target Language
                </a>{" "}
              </button>
              <div className="dropdown-content">
                <a href="#">English</a>
                <br />
                <a href="#">French</a>
                <br />
                <a href="#">Japanese</a>
                <br />
                <a href="#">Russian</a>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
