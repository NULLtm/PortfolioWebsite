// Floating menu seen on home page
import '../styles/Menu.css'
import {Link, Outlet} from 'react-router-dom';

const Menu = () => {


    const buttonClicked = (event) => {
    }

    return (
        <>
            <div className="menu">
                <div className="titleText menuItem">
                    <span>Owen Boseley</span>
                    <span className="typeBar">_</span>
                </div>
                <div className="menuItem">
                    <Link className="menuButton" to="/about_me">About Me</Link>
                </div>
                <div className="menuItem">
                    <Link className="menuButton" to="/projects">Projects</Link>
                </div>
                <div className="menuItem">
                    <Link className="menuButton" to="/links">Links</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Menu;