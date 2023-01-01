import "../styles/Links.css";
import Sketch from "react-p5";


let icon1;

const gravity = 0.9;
const mass = 2.0;

function Spring2D(p5, xpos, ypos, m, g) {
    this.x = xpos;// The x- and y-coordinates
    this.y = ypos;
    this.vx = 0; // The x- and y-axis velocities
    this.vy = 0;
    this.mass = m;
    this.gravity = g;
    this.radius = 30;
    this.stiffness = 0.2;
    this.damping = 0.7;

    this.update = function(targetX, targetY) {
        let forceX = (targetX - this.x) * this.stiffness;
        let ax = forceX / this.mass;
        this.vx = this.damping * (this.vx + ax);
        this.x += this.vx;
        let forceY = (targetY - this.y) * this.stiffness;
        forceY += this.gravity;
        let ay = forceY / this.mass;
        this.vy = this.damping * (this.vy + ay);
        this.y += this.vy;
    }

    this.display = function(nx, ny) {
        p5.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        p5.stroke(255);
        p5.line(this.x, this.y, nx, ny);
    }
}

const Links = () => {

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef);

        icon1 = new Spring2D(p5, 0, 250, mass, gravity);
    }

    const draw = (p5) => {
        p5.background(0);
        icon1.update(p5.mouseX,p5.mouseY);
        icon1.display(p5.mouseX, p5.mouseY);
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
    }


    return (
        <div className="page linksContainer">
            <Sketch className="linksContainer-linkCanvas" setup={setup} draw={draw}/>
        </div>
    );
}

export default Links;