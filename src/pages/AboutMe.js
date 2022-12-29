import '../styles/AboutMe.css'
import OptionContainer from "./SubComponents/OptionContainer";

const guideText = "*please select all options";

const AboutMe = () => {
    return (
        <div className="page aboutContainer">
            <OptionContainer id="modelContainer" numOptions={1} title1="Model." title2="Which is best for you?"
                             nextOptionContainer="majorContainer"
                             options={[{primaryLabel: "Human",
                                 primaryLabelSubtext: "19 yr, 5'8\"",
                                 label1: "Owen Boseley",
                                 label2: "Red Hair",
                                 label3: "Green Eyes"
                             }]}
            />
            <OptionContainer id="majorContainer" numOptions={2} title1="Major." title2="Choose one...or two."
                             nextOptionContainer="skillContainer"
                             options={[{primaryLabel: "Comp Sci",
                                 primaryLabelSubtext: "2nd yr, 4.0 GPA",
                                 label1: "Algorithms",
                                 label2: "Web Dev",
                                 label3: "CSCP"
                             }, {primaryLabel: "Math",
                                     primaryLabelSubtext: "2nd yr, 4.0 GPA",
                                     label1: "Proofs",
                                     label2: "Linear Alg.",
                                     label3: "Fundamentals"
                             }]}
            />
            <OptionContainer id="skillContainer" numOptions={4} title1="Skills." title2="Help yourself."
                             nextOptionContainer="Container"
                             options={[{primaryLabel: "Front-End",
                                 primaryLabelSubtext: "1 yr, beginner",
                                 label1: "React",
                                 label2: "JS",
                                 label3: "HTML/CSS"
                             }, {primaryLabel: "Algorithms",
                                 primaryLabelSubtext: "1 yr, beginner",
                                 label1: "Competed online",
                                 label2: "Mentored by club",
                                 label3: "Codeforces, AtCoder"
                             }, {primaryLabel: "Game Dev.",
                                 primaryLabelSubtext: "5 yr, intermediate",
                                 label1: "Unity",
                                 label2: "C#/Java",
                                 label3: "Lua, Roblox"
                             }, {
                                 primaryLabel: "Robotics",
                                 primaryLabelSubtext: "5 yr, advanced",
                                 label1: "First Tech Challenge",
                                 label2: "8th grade - 12th",
                                 label3: "Libraries/Optimization"
                             }]}
            />
        </div>
    );
}

export default AboutMe;