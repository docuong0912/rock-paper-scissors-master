import { useEffect,useState,useRef } from "react";
export default function PlayTurn({setResult,choice,all,changeState}){
    const [result,check] = useState();
    const choiceOfBot = useRef();
    const initial =  all[Math.floor(Math.random()*3)];
    const [speed,setSpeed] = useState(100);
    const [comChoice,setchoice] = useState(initial);
    const [showRes,setShow] =useState(false)
    useEffect(()=>{
        if(speed<1000){
            var pick= setTimeout(()=>{
                setchoice(all[Math.floor(Math.random()*3)]);
                setSpeed(speed=>speed/0.9);
            },speed);
           

            
        }
        else {

            checkResult();
            setShow(true);
            
           
        }
        return()=> clearTimeout(pick);
    },[speed]);
    useEffect(()=>{
        console.log(result);
        setResult(result);
    },[result]);
    const checkResult=()=>{
        if(choice.class===choiceOfBot.current.id) check("draw");
        else if(choice.class=="keo"){
            switch(choiceOfBot.current.id){
                case "bua":
                    check("lose");
                    break;
                case "bao":
                    check("win");
                    break;
            }
        }
        else if(choice.class=="bua"){
            switch(choiceOfBot.current.id){
                case "keo":
                    check("win");
                    break;
                case "bao":
                    check("lose");
                    break;
            }
        }
        else if(choice.class=="bao"){
            switch(choiceOfBot.current.id){
                case "bua":
                    check("win");
                    break;
                case "keo":
                    check("lose");
                    break;
            }
        }
        
    }
    return(
        <section>
            <div className={`pick-container ${showRes?"display-res":""}`}>
               
                <div  className={`choice ${choice.class} `}>
                    {result=="win"?<div className="winner"></div>:""}
                        <div className="choice-bg">
                            <img src={choice.img} alt="player's choice"/>
                        </div>
                </div>
                <div id={comChoice==undefined?"":comChoice.class} ref={choiceOfBot} className={`choice  ${comChoice==undefined?"":comChoice.class} `}>
                    {result=="lose"?<div className="winner"></div>:""}
                        <div className="choice-bg">
                            <img src={comChoice.img} alt="player's choice"/>
                        </div>
                </div>
            </div>
             <div className={`description ${showRes?"display-res":""}`}>
                 <p>you picked</p>
                 <p>the house picked</p>
             </div>
             <div className={`result ${showRes?"show-res":""}`}>
                <p>you {result}</p>
                <button onClick={()=>changeState(false)} type="button">play again</button>
             </div>
        </section>
    );
}