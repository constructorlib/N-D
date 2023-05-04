import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookDisplay } from "./bookDisplay";
import BookSection from "./BookSection";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
// var invoke
const url =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key";
function RootComponent() {
  return (
    <div className="loot">
      <div className="ctn">
        <input
          type="text"
          placeholder="Type the word here... "
          id="word-input"
        />
        <button id="search-btn ">Search</button>
      </div>
      <div className="result">
        <div className="sample">
          <h3>Sample OLD MAN</h3>
          <button>
            <i className="fas fa-volume-up"></i>
          </button>
        </div>
        <div className="details">
          <p>pos</p>
          <p>/sample/</p>
        </div>
      </div>
    </div>
  );
}
// navbar
const NavBar = () => (
  <nav className="navbar bg-secondary">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Book Collection</span>
    </div>
  </nav>
);
// book

ReactDom.render(<RootComponent />, document.getElementById("root"));

/*
<>
      <section>
        <NavBar />
      </section>
      <br />
      <div className="container">
        <div className="row">
          <p></p>
          {BookDisplay.map((book) => {
            return <BookSection params={book} />;
          })}
        </div>
      </div>
    </>

*/
