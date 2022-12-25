import Option from "./Option";
import "../../styles/OptionContainer.css";
import {useState} from "react";


const OptionContainer = (props) => {

    const [numSelected, setNumSelected] = useState(1);

    const onSelect = (e, hasClicked, setHasClicked) => {
        if(!hasClicked) {
            setHasClicked(true);
            setNumSelected((prev) => prev+1);
            if(numSelected >= props.numOptions) {
                document.getElementById(props.nextOptionContainer).scrollIntoView();
            }
        }
    }

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
                    />
                )}
            </div>
        </div>
    );
}

export default OptionContainer;