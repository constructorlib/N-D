import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// var setup

// const bookName = [
//   "Love you to the Moon and back",
//   "Fellowship of the Ring",
//   "The Two Towers",
// ];

// const images = [
//   "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UF1000,1000_QL80_.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
//   "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780007322503_1574x.jpg?v=1675338321",
// ];
// const bookAuthor = ["Amelia Hepworth", "J.R. R Tolkien", "J.R. R Tolkien"];

const BookDisplay = [
  {
    img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UF1000,1000_QL80_.jpg",
    bookName: "Love you to the Moon and Back",
    bookAuthor: "Amelia Hepworth",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
    bookName: "Fellowship of the Ring",
    bookAuthor: "J. R. R Tolkien",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780007322503_1574x.jpg?v=1675338321",
    bookName: "The Two Towers",
    bookAuthor: "J. R. R. Tolkien",
  },
];
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
          {BookDisplay.map((book) => {
            return "hello";
          })}
        </div>
      </div>
    </>
  );
}
const NavBar = () => (
  <nav className="navbar bg-secondary">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Book Collection</span>
    </div>
  </nav>
);
const BookSection = (props) => {
  const { image, bookName, bookAuthor, children } = props;
  return (
    <div className="col">
      <div className="card" style={{ width: "22rem" }}>
        <img src={image} alt={bookName} style={{ height: "250px" }} />
        <div className="card-body">
          <h5 className="card-title">{bookName}</h5>
          <p
            className="card-text"
            style={{ color: "#617d98", letterSpacing: "1px" }}
          >
            <i>By </i>
            {bookAuthor}
          </p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};
ReactDom.render(<RootComponent />, document.getElementById("root"));
