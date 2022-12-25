import "../../styles/InfoComponent.css";
import {useRef, useState} from "react";

const InfoComponent = (props) => {

    const [openHovered, setOpenHovered] = useState(false);
    const [closeHovered, setCloseHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const refInfo = useRef(null);
    const refClose = useRef(null);

    const openClicked = (e) => {
        setIsActive(true);
        refInfo.current.style.display = "inline-block";
        refInfo.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
    }

    const closeClicked = (e) => {
        setIsActive(false);
        refInfo.current.style.display = "none";
        refClose.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
    }

    return (
        <>
            <button ref={refClose} className="moreInfoButton" onMouseOver={() => {setOpenHovered(true)}} onMouseLeave={() => {setOpenHovered(false)}} onClick={openClicked}
                    style={{borderColor: isActive ? "black" : (openHovered ? "black" : "gray"), borderWidth: isActive ? "3px" : "1px"}}>+</button>
            <svg ref={refInfo} className="infoBox">
                <rect x="98" y="150" width="380px" height="290px" fill="none" strokeWidth="3px"/>
                <line x1="10" y1="148" x2="90" y2="148" stroke="black" strokeWidth="3px"/>
                <button className="moreInfoClose" onMouseOver={() => {setCloseHovered(true)}} onMouseLeave={() => {setCloseHovered(false)}} onClick={closeClicked}
                        style={{borderColor: !isActive ? "black" : (closeHovered ? "black" : "gray"), borderWidth: !isActive ? "3px" : "1px"}}>-</button>
            </svg>

        </>
    );
}

export default InfoComponent;