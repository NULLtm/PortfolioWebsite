// Floating menu seen on home page
import './Menu.css'

const Menu = () => {


    const buttonClicked = (event) => {
    }

    return (
        <div className="menu">
            <div className="titleText menuItem">
                <span>Owen Boseley</span>
                <span className="typeBar">_</span>
            </div>
            <div onClick={buttonClicked} className="menuItem menuButton">About Me</div>
            <div onClick={buttonClicked} className="menuItem menuButton">Projects</div>
            <div onClick={buttonClicked} className="menuItem menuButton">Links</div>
        </div>
    );
}

export default Menu;