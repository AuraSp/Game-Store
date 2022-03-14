import React from "react";
import { Fragment } from "react";
import Topics from "../Footer/Topics";

export default function Basic() {
    let data = [
        {
            id: 1,
            question: "p",
            answer: "d",
        },
        {
            id: 2,
            question: "p",
            answer: "d",
        },
        {
            id: 3,
            question: "p",
            answer: "d",
        },
        {
            id: 4,
            question: "p",
            answer: "d",
        },
    ];

    let list = data.map((post) => {
        return (
            <Topics
                key={post.id}
                question={post.question}
                answer={post.answer}
            />
        );
    });

    return <Fragment>
        <h1>Basic</h1>
        {list}
        </Fragment>
}
