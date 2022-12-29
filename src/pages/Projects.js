import "../styles/Projects.css";
import axios from "axios";
import {useState} from "react";
import Project from "./SubComponents/Project";

const Projects = () => {

    const [loaded, setLoaded] = useState(false);
    const URL_API = "https://api.github.com/users/NULLtm/repos";

    // API call to get projects to display
    if(!loaded) {
        axios.get(URL_API).then(res => {
            setLoaded(true);

            // res is the data we got

        });
    }

    return (
        <div className="page">
            {loaded ? (
                <Project title="TestProject" status="Public"
                desc="This is a test project."
                stars={100}/>
            ) : "Loading..."}
        </div>
    );
}

export default Projects;