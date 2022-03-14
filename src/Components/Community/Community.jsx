import React from "react";
import Forum from "./Forum";
import Review from "./Review";
import "./Community.css";
import data from "../../Data/forumdata.json";
import data1 from "../../Data/reviewdata.json";

function Community() {
  const list = data.map((item) => {
    return <Forum key={item.id} img={item.coverImg} title={item.title} />;
  });
  const cards = data1.map((item) => {
    return (
      <Review
        key={item.id}
        img={item.coverImg}
        review={item.review}
        about={item.about}
      />
    );
  });
  return (
    <div className="Community-container">
      <h1>FORUM</h1>
      <section className="Forum-list">{list}</section>
      <h1>GAME REVIEW</h1>
      <section className="Review-list">{cards}</section>
    </div>
  );
}

export default Community;
