import React from 'react'
import App from './App'
import ReactDom from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RootComponent(){
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='booklist'>
      <BookSection />
    </article>
  );
}

const BookSection = () => (
  <div className='container'>
    <h5>I love you to the Moon and back</h5>
    <img src='https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UF1000,1000_QL80_.jpg' 
    width='250px' alt='' />
    <br /> <br />
    <p> <i>By</i> Dinora Khoshimova</p>
  </div>
);
ReactDom.render(<RootComponent />, document.getElementById('root'));