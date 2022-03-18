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
    <div class = "mainSupport"> 
        <div class = "supportBlock oneBlock">
            <p>{props.name}</p>
           <div class = "icon"><FontAwesomeIcon onClick={(e) => {qShow()}} icon={ faAngleDown } /></div> 
    </div>
    {qOpened == true &&
    <div class = "allItem">
                <div class = "supportItem oneItem">
            <p>{props.q1}</p>
            <div class = "icon"><FontAwesomeIcon onClick={(e) => {openQ("q1")}} icon={ faAngleDown } /></div>
            
            {q1 == true &&
            <div>
                <textarea name="" id="supportGamesSoftwere1"  placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                <button class = "sendButton">send</button>
            </div>
            }
        </div>
        <div class = "supportItem twoItem">
            <p>{props.q2}</p>
           <div class = "icon"> <FontAwesomeIcon onClick={(e) => {openQ("q2")}} icon={ faAngleDown } /></div>

            {q2 == true &&
            <div>
                <textarea name="" id="supportGamesSoftwere2"  placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                <button class = "sendButton">send</button>
            </div>
    }
         </div>
        <div class = "supportItem threeItem">
            <p>{props.q3}</p>
           <div class = "icon"><FontAwesomeIcon onClick={(e) => {openQ("q3")}} icon={ faAngleDown } /></div> 
            {q3 == true &&
            <div>
                <textarea name="" id="supportGamesSoftwere2"  placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                <button class = "sendButton">send</button>
            </div>
    }
        </div>
    </div>
    }
</div>
  )
}
