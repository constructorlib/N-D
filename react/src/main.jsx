import React from 'react'
import App from './App'
import ReactDom from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RootComponent() {
  return (
    <>
      <section> 
        <NavBar />
      </section>
      <br />
      <div className="container">
        <div className='row'>
          <BookSection />
          <BookSection />
          <BookSection />
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
const BookSection = () => (
  <div className="col">
    <div className="card" style={{width: "18rem"}}>
      <img src='https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UF1000,1000_QL80_.jpg' 
      width='250px' alt='' />
      <div className="card-body">
        <h5 className="card-title">I love you to the moon and Back</h5>
        <p className="card-text">By Dinora Khoshimova</p>
        <a href="#" className='btn btn-primary'>Add to cart</a>
      </div>
    </div>
  </div>
);
ReactDom.render(<RootComponent />, document.getElementById('root'));