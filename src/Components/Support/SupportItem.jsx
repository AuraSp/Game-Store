import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function SupportItem(props) {
    let [qOpened, setQ] = useState(false)
    let [q1, setQ1] = useState(false)
    let [q2, setQ2] = useState(false)
    let [q3, setQ3] = useState(false)
    function qShow(){
        console.log(qOpened)
        setQ(!qOpened)
    }
    function openQ(q){
        if(q=="q1"){
            setQ1(!q1)
        }else if (q=="q2"){
            setQ2(!q2)
        }else{
            setQ3(!q3)
        }
    }
  return (
    <div className = "mainSupport"> 
        <div className = "supportBlock oneBlock">
            <p>{props.name}</p>
           <div className = "icon"><FontAwesomeIcon onClick={(e) => {qShow()}} icon={ faAngleDown } /></div> 
    </div>
    {qOpened == true &&
    <div className = "allItem">
                <div className = "supportItem oneItem">
            <p>{props.q1}</p>
            <div className = "icon"><FontAwesomeIcon onClick={(e) => {openQ("q1")}} icon={ faAngleDown } /></div>
            
            {q1 == true &&
            <div>
                <textarea name="" id="supportGamesSoftwere1"  placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                <button className = "sendButton">send</button>
            </div>
            }
        </div>
        <div className = "supportItem twoItem">
            <p>{props.q2}</p>
           <div className = "icon"> <FontAwesomeIcon onClick={(e) => {openQ("q2")}} icon={ faAngleDown } /></div>

            {q2 == true &&
            <div>
                <textarea name="" id="supportGamesSoftwere2"  placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                <button className = "sendButton">send</button>
            </div>
    }
         </div>
        <div className = "supportItem threeItem">
            <p>{props.q3}</p>
           <div className = "icon"><FontAwesomeIcon onClick={(e) => {openQ("q3")}} icon={ faAngleDown } /></div> 
            {q3 == true &&
            <div>
                <textarea name="" id="supportGamesSoftwere2"  placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                <button className = "sendButton">send</button>
            </div>
    }
        </div>
    </div>
    }
</div>
  )
}
