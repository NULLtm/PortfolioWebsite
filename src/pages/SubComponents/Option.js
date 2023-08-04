import "../../styles/Option.css";
import {forwardRef, useState} from "react";
import InfoComponent from "./InfoComponent";

const Option = (props) => {

    const [hasClicked, setHasClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <button onMouseOver={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}
                    style={{borderColor: hasClicked ? "black" : (hovered ? "black" : "gray"), borderWidth: hasClicked ? "3px" : "1px"}}
                    onClick={(e)=>{props.onClick(e,hasClicked,setHasClicked)}} className="selector">
                <div className="selectorPrimaryLabels">
                    <div className="selectorPrimaryLabel">{props.primaryLabel}</div>
                    <div className="selectorPrimaryLabelSubtext">{props.primaryLabelSubtext}</div>
                </div>
                <div className="selectorSecondaryLabels">
                    <div>{props.label1}</div>
                    <div>{props.label2}</div>
                    <div>{props.label3}</div>
                </div>
            </button>
            <InfoComponent text={props.text} anchor={props.anchor}/>
        </>
    );
}

export default Option;