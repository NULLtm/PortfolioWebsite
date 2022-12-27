import './styles/App.css';
import Menu from './pages/Menu';
import Logo from './pages/Logo';
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Links from "./pages/Links";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path="/" element={<Menu/>}>
                  <Route index element={<Logo/>} />
                  <Route path="about_me" element={<AboutMe/>} />
                  <Route path="projects" element={<Projects/>} />
                  <Route path="links" element={<Links/>} />
                  <Route path="*" element={<NoPage/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
