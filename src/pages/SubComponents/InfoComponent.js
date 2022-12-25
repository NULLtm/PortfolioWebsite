import "../../styles/InfoComponent.css";
import {useState} from "react";

const InfoComponent = (props) => {

    const [hovered, setHovered] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const clicked = (e) => {
        setHasClicked(true);

        document.getElementsByClassName("infoBox")[0].scrollIntoView({behavior:"smooth",block:"start",inline:"end"});
    }

    return (
        <>
            <button className="moreInfoButton" onMouseOver={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} onClick={clicked}
                    style={{borderColor: hasClicked ? "black" : (hovered ? "black" : "gray"), borderWidth: hasClicked ? "3px" : "1px"}}>+</button>
            <svg className="infoBox">
                <rect x="98" y="150" width="380px" height="290px" fill="none" strokeWidth="3px"/>
                <line x1="10" y1="148" x2="90" y2="148" stroke="black" strokeWidth="3px"/>
            </svg>
        </>
    );
}

export default InfoComponent;