import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { ref, set, push } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

export default function SupportItem(props) {
    var database = props.database;
    console.log(database)
    let [qOpened, setQ] = useState(false)
    let [q1, setQ1] = useState(false)
    let [q2, setQ2] = useState(false)
    let [q3, setQ3] = useState(false)
    function qShow() {
        console.log(qOpened)
        setQ(!qOpened)
    }
    function openQ(q) {
        if (q == "q1") {
            setQ1(!q1)
        } else if (q == "q2") {
            setQ2(!q2)
        } else {
            setQ3(!q3)
        }
    }

    const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');

    function questionInput(e, qType) {
        e.preventDefault()
        if (qType == "gameSoftware") {
            const refs = ref(database, 'Game, Software Questions/');
            const newPostRef = push(refs);
            set((newPostRef), {
                User_email: email,
                User_question: question,
            });
        }
    }
    return (
        <div className="mainSupport">
            <div className="supportBlock oneBlock">
                <p>{props.name}</p>
                <div className="icon"><FontAwesomeIcon onClick={(e) => { qShow() }} icon={faAngleDown} /></div>
            </div>
            {qOpened == true &&
                <div className="allItem">
                    <div className="supportItem oneItem">
                        <p>{props.q1}</p>
                        <div className="icon"><FontAwesomeIcon onClick={(e) => { openQ("q1") }} icon={faAngleDown} /></div>

                        {q1 == true &&
                            <form onSubmit={(e) => questionInput(e, 'gameSoftware')}>
                                <textarea  onChange={e => setQuestion(e.target.value)} id="supportGamesSoftwere1" placeholder='describe what is not so and we will reply as soon as possible'></textarea>
                                <input onChange={e => setEmail(e.target.value)}  type='email' placeholder='Your email'></input>
                                <button type='button' className="sendButton">send</button>
                            </form>
                        }
                    </div>
                    <div className="supportItem twoItem">
                        <p>{props.q2}</p>
                        <div className="icon"> <FontAwesomeIcon onClick={(e) => { openQ("q2") }} icon={faAngleDown} /></div>

                        {q2 == true &&
                            <div>
                                <textarea name="" id="supportGamesSoftwere2" placeholder='describe what is not so and we will reply as soon as possible'></textarea>
                                <button className="sendButton">send</button>
                            </div>
                        }
                    </div>
                    <div className="supportItem threeItem">
                        <p>{props.q3}</p>
                        <div className="icon"><FontAwesomeIcon onClick={(e) => { openQ("q3") }} icon={faAngleDown} /></div>
                        {q3 == true &&
                            <div>
                                <textarea name="" id="supportGamesSoftwere2" placeholder='describe what is not so and we will reply as soon as possible'></textarea>
                                <button className="sendButton">send</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
