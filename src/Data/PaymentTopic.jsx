import React from "react";
import { Fragment } from "react";
import Topics from "../Footer/Topics";

export default function Payment() {
    let data = [
        {
            id: 1,
            question: "PAYMENT QUESTIONS",
            answer: "PAYMENT ANSWERS",
        },
        {
            id: 2,
            question: "PAYMENT QUESTIONS",
            answer: "PAYMENT ANSWERS",
        },
        {
            id: 3,
            question: "PAYMENT QUESTIONS",
            answer: "PAYMENT ANSWERS",
        },
        {
            id: 4,
            question: "PAYMENT QUESTIONS",
            answer: "PAYMENT ANSWERS",
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
        <h1>Payment</h1>
        {list}
    </Fragment>
}