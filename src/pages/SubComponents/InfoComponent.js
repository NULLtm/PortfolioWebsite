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
        refInfo.current.style.display = "block";
        refInfo.current.scrollIntoView({behavior:"smooth",block:"center",inline: "end"});
    }

    const closeClicked = (e) => {
        setIsActive(false);
        refClose.current.scrollIntoView({behavior:"smooth",block:"center",inline:"end"});
        setTimeout(()=>{refInfo.current.style.display = "none";},500);

    }

    return (
        <>
            <button ref={refClose} className="moreInfoButton" onMouseOver={() => {setOpenHovered(true)}} onMouseLeave={() => {setOpenHovered(false)}} onClick={openClicked}
                    style={{borderColor: isActive ? "black" : (openHovered ? "black" : "gray"), borderWidth: isActive ? "3px" : "1px"}}>+</button>
            <svg ref={refInfo} className="infoBox">
                <rect x="98" y="150" width="380px" height="350px" fill="none"/>
                <line x1="0" y1="150" x2="100" y2="150"/>
            </svg>
            <button className="moreInfoClose" onMouseOver={() => {setCloseHovered(true)}} onMouseLeave={() => {setCloseHovered(false)}} onClick={closeClicked}
                    style={{borderColor: !isActive ? "black" : (closeHovered ? "black" : "gray"), borderWidth: !isActive ? "3px" : "1px"}}>-</button>

        </>
    );
}

export default InfoComponent;