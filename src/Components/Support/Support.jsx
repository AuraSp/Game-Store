import React from 'react'
import './Support.css';
import SupportItem from './SupportItem';


const Support = () => {

    return (
        
            <main class = "main">
                <div class = "name">
                    <h2>SUPPORT</h2>
                </div>
                
                <div class = "questions">
                  
                        <SupportItem name = {"Games, Software"} q1 = {"game not working?"} q2 = {"haven't got a game?"} q3 = {"sound not working?"}/>
                        <SupportItem name = {"Purchases"} q1 = {"did not receive the goods?"} q2 = {"don't can pay?"} q3 = {"bad quality?"}/>
                        <SupportItem name = {"MyAccount"} q1 = {"can't come in?"} q2 = {"forgot password?"} q3 = {"dont get Guard?"}/>
                        <SupportItem name = {"Client"} q1 = {"Can't Contact Login Servers?"} q2 = {"you to find error?"} q3 = {"no money came?"}/>
                        <SupportItem name = {"Community"} q1 = {"Steam Account was stolen and I need help recovering it?"} q2 = {"not receiving a Steam Guard code?"} q3 = {"deleted or lost my Steam Guard Mobile Authenticator?"}/>
                        <SupportItem name = {"Giftcards"} q1 = {"dont get cards?"} q2 = {"dont work cards?"} q3 = {"dont can buy cards?"}/>
                </div>
            </main>
       
        
    )
}

export default Support
