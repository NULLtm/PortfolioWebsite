import './styles/App.css';
import Menu from './pages/Menu';
import Logo from './pages/Logo';
import {BrowserRouter, Route} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
          <Route path="/" element={<Menu />}>
              <Route index element={<Logo />} />
              <Route path="about_me" element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={<NoPage />} />
          </Route>
      </BrowserRouter>
  );
}

export default App;
