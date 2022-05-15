//import component
import Header from './component/Header';
import MainGame from './component/MainGame';
import PlayTurn from './component/PlayTurn';
import Rule from './component/Rule';
//import css
import './App.css';
import './css/header.css';
import './css/maingame.css';
import './css/playturn.css';
import './css/rule.css';
//import hooks
import {useState,useEffect} from 'react';
//import images
import bao from './images/icon-paper.svg';
import keo from './images/icon-scissors.svg';
import bua from './images/icon-rock.svg';
function App() {
  const [result,setResult] = useState();
  const [rule,openRule] = useState(false);
  const choices =[
    {
        img:keo,
        class:"keo"
    },
    {
        img:bua,
        class:"bua"
    },
    {
        img:bao,
        class:"bao"
    }
];
  useEffect(()=>{
    
  })
  const [started,hasStarted] = useState(false);
  const [playerChoice,setChoice] = useState();
  const playerPicked = (choice)=>{
     hasStarted(true);
     setChoice(choice);
  }

  
  return (
    <div className="container">
      <Header result={result}/>
      {started ? <PlayTurn setResult={setResult} all={choices} choice={choices[playerChoice]} changeState = {hasStarted}/> :  <MainGame pick={playerPicked}/>}
      <footer>
        <div onClick={()=>openRule(true)}>
          <p>RULES</p>
        </div>
        {rule?<Rule closeRule={openRule}/>:""}
      </footer>
    </div>
  );
}

export default App;
