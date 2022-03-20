import React from 'react'
import './Support.css';
import SupportItem from './SupportItem';


const Support = () => {

    return (

        <main className="main">
            <div className="name">
                <h2>SUPPORT</h2>
            </div>

            <div className="questions">
                <div className='leftSection'>
                    <SupportItem name={"Games, Software"} q1={"Game not working?"} q2={"Haven't received a game?"} q3={"Sound not working?"} />
                    <SupportItem name={"Purchases"} q1={"Did not receive the goods?"} q2={"Issues with paying?"} q3={"Bad quality?"} />
                    <SupportItem name={"MyAccount"} q1={"Can't log in?"} q2={"Forgot password?"} q3={"Didn't get the Guard?"} />
                </div>
                <div className='rightSection'>
                    <SupportItem name={"Client"} q1={"Can't contact login servers?"} q2={"You to find error?"} q3={"No money came?"} />
                    <SupportItem name={"Community"} q1={"Steam account was stolen and need help to recover it?"} q2={"Not receiving a Steam Guard code?"} q3={"Deleted or lost my Steam Guard mobile authenticator?"} />
                    <SupportItem name={"Giftcards"} q1={"Can't receive your cards?"} q2={"Cards doesn't work?"} q3={"Can't buy cards?"} />
                </div>
            </div>
        </main>


    )
}

export default Support
