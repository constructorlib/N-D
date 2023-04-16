import React from 'react'
import App from './App'
import ReactDom from 'react-dom';
import './index.css';

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
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}
const Title = () => <h1>I Love you to the Moon and Back</h1>

const Author =() => <h4>Dinora Khoshimova</h4>
const Image = () => 
<img src='https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UF1000,1000_QL80_.jpg' 
width='250px' alt='' />
ReactDom.render(<RootComponent />, document.getElementById('root'));