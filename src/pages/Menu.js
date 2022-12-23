// Floating menu seen on home page
import '../styles/Menu.css'

const Menu = () => {


    const buttonClicked = (event) => {
    }

    return (
        <div className="menu">
            <div className="titleText menuItem">
                <span>Owen Boseley</span>
                <span className="typeBar">_</span>
            </div>
            <div className="menuItem">
                <button onClick={buttonClicked} className="menuButton">About Me</button>
            </div>
            <div className="menuItem">
                <button onClick={buttonClicked} className="menuButton">Projects</button>
            </div>
            <div className="menuItem">
                <button onClick={buttonClicked} className="menuButton">Link</button>
            </div>
        </div>
    );
}

export default Menu;