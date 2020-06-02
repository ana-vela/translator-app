import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">Logo</div>
      </header>
      <div className="container">
        <div className="item">
          translate one
          <form>
            <input
              type="text"
              placeholder="type in a word or phrase here"
              id="lang-one"
            ></input>
            <input type="dropdown" placeholder="select your language"></input>
          </form>
        </div>
        <div className="item">
          translate two
          <form>
            <input type="text" placeholder="translation"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
