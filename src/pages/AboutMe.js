import '../styles/AboutMe.css'
import OptionContainer from "./SubComponents/OptionContainer";

const guideText = "*please select all options";

const AboutMe = () => {
    return (
        <div className="aboutContainer">
            <OptionContainer id="modelContainer" numOptions={1} title1="Model." title2="Which is best for you?"
                             nextOptionContainer="majorContainer"
                             options={[{primaryLabel: "Human",
                                 primaryLabelSubtext: "19 yr, 5'8",
                                 label1: "Owen Boseley",
                                 label2: "Red Hair",
                                 label3: "Green Eyes"
                             }]}
            />
            <OptionContainer id="majorContainer" numOptions={2} title1="Major." title2="Choose one...or two."
                             nextOptionContainer="skillContainer"
                             options={[{primaryLabel: "Comp Sci",
                                 primaryLabelSubtext: "2nd yr, 4.0",
                                 label1: "Algorithms",
                                 label2: "Web Dev",
                                 label3: "CSCP"
                             }, {primaryLabel: "Math",
                                     primaryLabelSubtext: "2nd yr, 4.0",
                                     label1: "Proofs",
                                     label2: "Linear Alg.",
                                     label3: ""
                             }]}
            />
            <OptionContainer id="skillContainer" numOptions={2} title1="Major." title2="Choose one...or two."
                             nextOptionContainer="skillContainer"
                             options={[{primaryLabel: "Comp Sci",
                                 primaryLabelSubtext: "2nd yr, 4.0",
                                 label1: "Algorithms",
                                 label2: "Web Dev",
                                 label3: "CSCP"
                             }, {primaryLabel: "Math",
                                 primaryLabelSubtext: "2nd yr, 4.0",
                                 label1: "Proofs",
                                 label2: "Linear Alg.",
                                 label3: ""
                             }]}
            />
        </div>
    );
}

export default AboutMe;