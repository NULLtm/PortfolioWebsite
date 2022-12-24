import '../styles/AboutMe.css'

const guideText = "*please select all options";

const AboutMe = () => {
    return (
        <div className="aboutContainer">
            <div className="selectorContainer" id="modelSelector">
                <div className="selectorText">
                    <span className="selectorTitle1">Model.</span> <span className="selectorTitle2">Which is best for you?</span>
                </div>
                <div className="selectorSubText">{guideText}</div>
                <div className="selectors">
                    <a href={"#majorSelector"} className="selector">
                        <div className="selectorPrimaryLabels">
                            <div className="selectorPrimaryLabel">Human</div>
                            <div className="selectorPrimaryLabelSubtext">19 yr, 5'8"</div>
                        </div>
                        <div className="selectorSecondaryLabels">
                            <div>Owen Boseley</div>
                            <div>Red Hair</div>
                            <div>Green Eyes</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="selectorContainer" id="majorSelector">
                <div className="selectorText">
                    <span className="selectorTitle1">Major.</span> <span className="selectorTitle2">Choose one...or two.</span>
                </div>
                <div className="selectorSubText">{guideText}</div>
                <div className="selectors">
                    <a href="" className="selector">
                        <div className="selectorPrimaryLabels">
                            <div className="selectorPrimaryLabel">Comp Sci</div>
                            <div className="selectorPrimaryLabelSubtext">2nd yr, 4.0</div>
                        </div>
                        <div className="selectorSecondaryLabels">
                            <div>UW Seattle</div>
                            <div>Algorithms</div>
                            <div>Web Dev</div>
                        </div>
                    </a>
                    <a href="" className="selector">
                        <div className="selectorPrimaryLabels">
                            <div className="selectorPrimaryLabel">Math</div>
                            <div className="selectorPrimaryLabelSubtext">2nd yr, 4.0</div>
                        </div>
                        <div className="selectorSecondaryLabels">
                            <div>UW Seattle</div>
                            <div>Proofs</div>
                            <div>Linear Alg.</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="selectorContainer">
                <div className="selectorText">
                    <span className="selectorTitle1">Skills.</span> <span className="selectorTitle2">Help yourself.</span>
                </div>
                <div className="selectorSubText">{guideText}</div>
                <div className="selectors">
                    <a href="" className="selector">
                        <div className="selectorPrimaryLabels">
                            <div className="selectorPrimaryLabel">Comp Sci</div>
                            <div className="selectorPrimaryLabelSubtext">2nd yr, 4.0</div>
                        </div>
                        <div className="selectorSecondaryLabels">
                            <div>UW Seattle</div>
                            <div>Algorithms</div>
                            <div>Web Dev</div>
                        </div>
                    </a>
                    <a href="" className="selector">
                        <div className="selectorPrimaryLabels">
                            <div className="selectorPrimaryLabel">Math</div>
                            <div className="selectorPrimaryLabelSubtext">2nd yr, 4.0</div>
                        </div>
                        <div className="selectorSecondaryLabels">
                            <div>UW Seattle</div>
                            <div>Proofs</div>
                            <div>Linear Alg.</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;