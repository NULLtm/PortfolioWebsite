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
        console.log(refInfo.current);
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
            <div className="infoParent" ref={refInfo}>
                <svg className="infoBox">
                    <rect x="0" y="0" width="400px" height="400px" fill="none"/>
                </svg>
                <button className="moreInfoClose" onMouseOver={() => {setCloseHovered(true)}} onMouseLeave={() => {setCloseHovered(false)}} onClick={closeClicked}
                    style={{borderColor: !isActive ? "black" : (closeHovered ? "black" : "gray"), borderWidth: !isActive ? "3px" : "1px"}}>-</button>
            </div>

        </>
    );
}

export default InfoComponent;