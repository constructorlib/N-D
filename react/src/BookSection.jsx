import React from "react";

const BookSection = ({ params }) => {
  const { image, bookName, bookAuthor, children } = params;
  const clickHandler = () => {
    alert("Hello World");
  };
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
          <a href="#" className="btn btn-primary" onClick={clickHandler}>
            Add to cart
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default BookSection;
