import Option from "./Option";
import "../../styles/OptionContainer.css";
import {forwardRef, useEffect, useRef, useState} from "react";
import InfoComponent from "./InfoComponent";


const OptionContainer = (props) => {

    const [numSelected, setNumSelected] = useState(0);

    const onSelect = (e, hasClicked, setHasClicked) => {
        if(!hasClicked) {
            setHasClicked(true);
            setNumSelected((prev) => prev+1);
        }
    }

    useEffect(()=>{
        if(numSelected >= props.numOptions) {
           document.getElementById(props.next).scrollIntoView();
        }
    });

    return (
        <div className="selectorContainer" id={props.id}>
            <div className="selectorText">
                <span className="selectorTitle1">{props.title1}</span> <span className="selectorTitle2">{props.title2}</span>
            </div>
            <div className="selectorSubText">*please select all options</div>
            <div className="selectors">
                {[...Array(props.numOptions)].map((x,i) =>
                    <Option key={i} onClick={onSelect} primaryLabel={props.options[i].primaryLabel}
                            primaryLabelSubtext={props.options[i].primaryLabelSubtext}
                            label1={props.options[i].label1}
                            label2={props.options[i].label2}
                            label3={props.options[i].label3}
                            text={props.options[i].text}
                            anchor={props.anchor}
                    />
                )}
            </div>
        </div>
    );
}

export default OptionContainer;