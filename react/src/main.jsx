import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BookDisplay } from "./bookDisplay";
import BookSection from "./BookSection";
// var invoke
function RootComponent() {
  return (
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
