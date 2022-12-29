import "../styles/Projects.css";
import axios from "axios";
import {useState} from "react";
import Project from "./SubComponents/Project";

const Projects = () => {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);
    const URL_API = "https://api.github.com/users/NULLtm/repos";
    // API call to get projects to display
    if(!loaded) {
        axios.get(URL_API).then(res => {
            setLoaded(true);
            setData(res.data);
        });
    }

    return (
        <div className="page projectsPage">
            {loaded ? (
                [...Array(data.length)].map((e, i) =>
                  <Project title={data[i].name}
                  status={data[i].private ? "Private" : "Public"}
                           desc={data[i].description}
                           lang={data[i].language}
                           stars={data[i].stargazers_count}
                           forks={data[i].forks_count}
                  />
                )) : "Loading..."}
        </div>
    );
}

export default Projects;