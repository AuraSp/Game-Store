import React from "react";
import { Fragment } from "react";
import Topics from "../Footer/Topics";

export default function Basic() {
    let data = [
        {
            id: 1,
            question: "BASIC QUESTIONS",
            answer: "BASIC ANSWERS",
        },
        {
            id: 2,
            question: "BASIC QUESTIONS",
            answer: "BASIC ANSWERS",
        },
        {
            id: 3,
            question: "BASIC QUESTIONS",
            answer: "BASIC ANSWERS",
        },
        {
            id: 4,
            question: "BASIC QUESTIONS",
            answer: "BASIC ANSWERS",
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
