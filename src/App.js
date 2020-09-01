/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import DictionarySelector from './DictionarySelector';
import {DictionaryProvider} from './DictionaryContext';

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">Logo</div>
      </header>
      <DictionaryProvider>
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
                    <DictionarySelector />
                  </div>
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
      </DictionaryProvider>
    </div>
  );
}

export default App;
