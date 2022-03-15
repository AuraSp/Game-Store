import React from "react";
import { Fragment } from "react";
import Topics from "../Footer/Topics";

export default function Account() {
    let data = [
        {
            id: 1,
            question: "ACCOUNT QUESTIONS",
            answer: "ACCOUNT ANSWERS",
        },
        {
            id: 2,
            question: "ACCOUNT QUESTIONS",
            answer: "ACCOUNT ANSWERS",
        },
        {
            id: 3,
            question: "ACCOUNT QUESTIONS",
            answer: "ACCOUNT ANSWERS",
        },
        {
            id: 4,
            question: "ACCOUNT QUESTIONS",
            answer: "ACCOUNT ANSWERS",
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
        <h1>Account</h1>
        {list}
        </Fragment>
}
