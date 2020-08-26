/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import SourceLang from "./SourceLang";
import TargetLang from "./TargetLang";
import InputField from "./InputField";
import TranslateButton from "./TranslateButton";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <div id="logo">Logo</div>
        </header>
        <div className="container">
          <div className="item">
            <h2>translate one</h2>
            <form>
              <InputField />
              <div className="dropdown first-lang">
                <SourceLang />
                <TranslateButton />
              </div>
            </form>
          </div>
          <div className="item">
            <h2> translate two</h2>
            <br />
            <form>
              <input type="text" placeholder="translation"></input>
              <div className="dropdown target-lang">
                <TargetLang />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
