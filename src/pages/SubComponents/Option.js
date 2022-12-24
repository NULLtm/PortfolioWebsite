import "../../styles/Option.css";

const Option = (props) => {
    return (
        <a onClick={props.onClick} className="selector">
            <div className="selectorPrimaryLabels">
                <div className="selectorPrimaryLabel">{props.primaryLabel}</div>
                <div className="selectorPrimaryLabelSubtext">{props.primaryLabelSubtext}</div>
            </div>
            <div className="selectorSecondaryLabels">
                <div>{props.label1}</div>
                <div>{props.label2}</div>
                <div>{props.label3}</div>
            </div>
        </a>
    );
}

export default Option;