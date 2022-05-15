import img from '../images/image-rules.svg';
import close from '../images/icon-close.svg';
export default function Rule({closeRule}){
    return (
        <div className = "rule-container">
            <div className="rule-header">
                <p>rule</p>
            </div>
            <img src ={img} alt="instruction"/>
            <img onClick={()=>closeRule(false)} src ={close} alt="icon cllose"/>
        </div>
    );
}