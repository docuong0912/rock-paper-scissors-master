import { useState,useEffect } from "react";
export default function Header({result}){
    const [score,setScore] = useState(0);
    useEffect(()=>{
        
        if(result=="win") setScore(score=>score+1);
        else if(result == "lose") 
        if(score<0) setScore(0);
        else
        setScore(score=>score-1);
        
        
    },[result]);
    return(
        <header>
            <div className="title">
                <h1>rock paper scissors</h1>
            </div>
            <div className="point-container">
                <b>scores</b>
                <p>{score}</p>
            </div>
        </header>
    );
}