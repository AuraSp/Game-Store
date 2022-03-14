import React from "react";
import "./Forum.css";

function Forum(props) {
  return (
    <section className="Forum-list">
      <div className="Forum-bar">
        <img className="Forum-image" src={props.img} alt="" />
        <p className="Forum-text">{props.title}</p>
      </div>
    </section>
  );
}

export default Forum;
