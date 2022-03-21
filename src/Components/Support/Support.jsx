import React, { useState, useEffect } from 'react'
import './Support.css';
import SupportItem from './SupportItem';
import SupportData from '../../Data/Support.json';


const Support = (props) => {
    let [successText, setSuccessText] = useState('')

    useEffect(() => {
        setTimeout(() => {setSuccessText("")}, 3000);
      }, [successText])
      

    return (

        <main className="main">
            <div className="name">
                <h2>SUPPORT</h2>
            </div>

            {successText}

            <div className="questions">
                <div className='leftSection'>
                {
                    SupportData.map((item, index)=>(
                        index <= 2 &&<SupportItem dbTopic={item.dbTopic} name={item.name} q = {item.q} db={props.db} completeSubmit={setSuccessText}/>
                    ))
                }
                </div>
                <div className='rightSection'>
                {
                    SupportData.map((item, index)=>(
                        index >= 3 &&<SupportItem dbTopic={item.dbTopic} name={item.name} q = {item.q} db={props.db} completeSubmit={setSuccessText}/>
                    ))
                }
                </div>
            </div>
        </main>


    )
}

export default Support
