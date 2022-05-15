import bao from '../images/icon-paper.svg';
import keo from '../images/icon-scissors.svg';
import bua from '../images/icon-rock.svg';
export default function MainGame({pick}){
    return(
        <main>
            <div className="choice-container">
                <div className="upper-bl">
                    <div className="choice bao" onClick={()=>{pick(2)}}>
                        <div className="choice-bg">
                            <img src={bao} alt="paper"/>
                        </div>
                    </div>
                    <div className="choice keo" onClick={()=>pick(0)}>
                        <div className="choice-bg">
                            <img src={keo} alt="scissiors"/>
                        </div>
                    </div>
                </div>
                <div className="lower-bl">
                    <div className="choice bua" onClick={()=>pick(1)}>
                        <div className="choice-bg">
                            <img src={bua} alt="rock"/>
                        </div>
                    </div>
                </div>    
               
            </div>
        </main>
    );
}