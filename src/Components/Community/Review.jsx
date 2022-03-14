import React from "react";
import "./Review.css";

function Review(props) {
  return (
    <section className="Review-conatiner">
      <div className="Review-bar">
        <img className="Review-image" src={props.img} alt="" />
        <h4 className="Review-name">{props.review}</h4>
        <p className="Review-text">{props.about}</p>
      </div>
    </section>
  );
}

export default Review;
