import '../styles/AboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutContainer">
            <div className="selectorContainer">
                <div className="selectorText">
                    <span className="selectorTitle1">Model.</span> <span className="selectorTitle2">Which is best for you?</span>
                </div>
                <div className="selector">
                    <div className="selectorPrimaryLabel">Human</div>
                    <div className="selectorPrimaryLabelSubtext">19 yr, 5'8"</div>
                    <div className="selectorSecondaryLabels">
                        <div>Owen Boseley</div>
                        <div>Red Hair</div>
                        <div>Green Eyes</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;