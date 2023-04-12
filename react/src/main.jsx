import React from 'react'
import App from './App'
import ReactDom from 'react-dom';


function RootComponent(){
  return (
    <section>
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
const Title = () => {
  return <h1>I Love you to the Moon and Back</h1>
}
const Author =()=> <h4>Dinora Khoshimova</h4>
const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg' 
alt='' />
ReactDom.render(<RootComponent />, document.getElementById('root'));