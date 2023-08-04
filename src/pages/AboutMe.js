import '../styles/AboutMe.css'
import OptionContainer from "./SubComponents/OptionContainer";
import checkmarkImg from "../images/checkmark.png";
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const guideText = "*please select all options";
const AboutMe = () => {
    useEffect(() => {
        document.getElementById("modelContainer").scrollIntoView();
    });
    return (
        <div className="page aboutContainer">
            <OptionContainer id="modelContainer" numOptions={1} title1="Model." title2="Which is best for you?"
                             next="majorContainer"
                             options={[{primaryLabel: "Human",
                                 primaryLabelSubtext: "19 yr, 5'8\"",
                                 label1: "Owen Boseley",
                                 label2: "Red Hair",
                                 label3: "Green Eyes",
                                 text: "Hi there, my name is Owen. I am current Junior here at the University of Washington.\n"
                                 +"I am currently co-leading a project to build auto-grading technology for TAs and looking for internship\n"
                                 +"opporunities for Summer 2024."
                             }]}
                             anchor="modelContainer"
            />
            <OptionContainer id="majorContainer" numOptions={2} title1="Degree." title2="Choose one... or two"
                             next="skillContainer"
                             options={[{primaryLabel: "Comp. Sci",
                                 primaryLabelSubtext: "Major, 3nd yr, 3.99 GPA",
                                 label1: "Algorithms",
                                 label2: "Web Dev",
                                 label3: "Competitive Programming",
                                 text: "I am a student here at the Paul G. Allen School for computer science."
                                 + " I am passionate about algorithms and competitive computer science. Every year"
                                 + " I compete in the annual ICPC tournament with my club mates. I am also a proud"
                                 + " TA here at UW and hope to grow my abilities as a teacher and community member"
                                 + " by contributing to early CS education."
                             }, {primaryLabel: "Math",
                                     primaryLabelSubtext: "Minor",
                                     label1: "Proofs",
                                     label2: "Linear Alg.",
                                     label3: "Fundamentals",
                                     text: "I am a passionate mathematician and have enjoyed my experience"
                                     +" in the math courses here at UW. I have practiced both pure math skills"
                                     +" in proof techniques, but also applied math that can be directed used in"
                                     +" my CS classes. Techniques like graph analysis, and math that can help me in"
                                     +" in my competitive programming competitions are just two."
                             }]}
                             anchor="majorContainer"
            />
            <OptionContainer id="skillContainer" numOptions={4} title1="Skills." title2="Help yourself."
                             next="endingContainer"
                             options={[{primaryLabel: "Front-End",
                                 primaryLabelSubtext: "2 yr",
                                 label1: "React",
                                 label2: "JS",
                                 label3: "HTML/CSS",
                                 text: "I learned react a year ago for a software engineering internship"
                                 +" and have used it ever since for front end, including this website! Although"
                                 +" I don't spend a lot of time doing front end, I always make sure to keep this"
                                 +" skill sharp in case I need to use it."
                             }, {primaryLabel: "Algorithms",
                                 primaryLabelSubtext: "1 yr",
                                 label1: "Competed online",
                                 label2: "Mentored by club",
                                 label3: "Codeforces, AtCoder",
                                 text: "I mainly started to do competitive programming for fun, and since"
                                 +" then I have joined UW's club for it and have found it to be one of the most"
                                 +" intellectually stimulating parts of my tenure in university. I hope to be able"
                                 +" to use my algorithms knowledge in industry some day. The skills I have used and developed include"
                                 +" significant problem solving abilities, algorithmic techniques such as dynamic programming,"
                                 +" and a range of data structures and efficiency-oriented programming techniques."
                             }, {primaryLabel: "Game Dev.",
                                 primaryLabelSubtext: "5 yr",
                                 label1: "Unity",
                                 label2: "C#/Java",
                                 label3: "Lua, Roblox",
                                 text: "My introduction to programming many years ago was through game development,"
                                 +" which included a lot of time building small games in Unity, IOS applications, and"
                                 +" a short stent development Roblox games. Although I am not an active game dev currently,"
                                 +" I still consider it to be foundational to my beginnings in CS."
                             }, {
                                 primaryLabel: "Robotics",
                                 primaryLabelSubtext: "5 yr",
                                 label1: "First Tech Challenge",
                                 label2: "8th grade - 12th",
                                 label3: "Libraries/Optimization",
                                 text: "In high school, I was fortunate enough to compete into FTC with a team"
                                 +" from my school. For almost 5 years I became the software lead of the team and"
                                 +" and contributed most of the code base used today. Additionally, I built an open source"
                                 +" library for other teams to use, aiding in the design and implementation of their own"
                                +" of their robots."
                             }]}
                             anchor="skillContainer"
            
            />
            <div id="endingContainer">
                <div>Complete</div>
                <Link to="/">
                    <img id="checkmark" src={checkmarkImg} alt="CheckMark"></img>
                </Link>
            </div>
        </div>
    );
}

export default AboutMe;