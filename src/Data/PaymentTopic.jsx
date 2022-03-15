import React from "react";
import { Fragment } from "react";
import Topics from "../Footer/Topics";

export default function Payment() {
    let data = [
        {
            id: 1,
            question: "account",
            answer: "d",
        },
        {
            id: 2,
            question: "acc",
            answer: "d",
        },
        {
            id: 3,
            question: "acc",
            answer: "d",
        },
        {
            id: 4,
            question: "acc",
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
        <h1>Payment</h1>
        {list}
    </Fragment>
}