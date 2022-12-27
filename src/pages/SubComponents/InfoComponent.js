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
        refInfo.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});
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
        </>
    );
}

export default InfoComponent;