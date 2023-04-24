import React from 'react'
import App from './App'
import ReactDom from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// var setup

const bookName = [
  "Love you to the Moon", 
  "Lord of the Rings", 
  "Dorian Gray"];
  
  const images = [
  'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UF1000,1000_QL80_.jpg', 
  'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif', 
  'https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780007322503_1574x.jpg?v=1675338321'
  ];
const bookAuthor = [
  "Amelia Hepworth",
  "J.R. R Tolkien",
  "J.R. R Tolkien"
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
          <BookSection image={images[0]} bookName={bookName[0]} bookAuthor={bookAuthor[0]}/>
          <BookSection image={images[1]} bookName={bookName[1]} bookAuthor={bookAuthor[1]}/>
          <BookSection image={images[2]} bookName={bookName[2]} bookAuthor={bookAuthor[2]}/>
        </div>
      </div>
    </>
  );
}
const NavBar = () => (
  <nav className="navbar bg-secondary">
    <div className="container-fluid">
      <span className='navbar-brand mb-0 h1'>
        Book Collection
      </span>
    </div>
  </nav>
);
const BookSection = ({ image, bookName, bookAuthor}) => (
  <div className="col">
    <div className="card" style={{ width: "18rem"}}>
       <img 
       src={image} 
       alt={bookName}
       style={{height: "250px"}} />
      <div className="card-body">
        <h5 className="card-title">{bookName}</h5>
        <p className="card-text" style={{color: '#617d98', letterSpacing: "1px"}}><i>By </i> 
        {bookAuthor}</p>
        <a href="#" className='btn btn-primary'>Add to cart</a>
      </div>
    </div>
  </div>
);
ReactDom.render(<RootComponent />, document.getElementById('root'));