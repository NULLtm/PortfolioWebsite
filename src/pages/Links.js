import "../styles/Links.css";
import Sketch from "react-p5";
import {useRef} from "react";

let myParticles = [];
let mySprings = [];
let nPoints = 7;
const restDis = 15;

const width = 500;
const height = 500;

// The index in the particle array, of the one the user has clicked.
let whichParticleIsGrabbed = -1;

//-------------------------
function createParticles(p5){

    for (var i=0; i<nPoints; i++) {
        var rx = 250 + restDis*i;
        var ry = 0;
        var aParticle = new Particle(p5);
        aParticle.set(rx,ry);
        aParticle.bPeriodicBoundaries = false;
        aParticle.bHardBoundaries = true;
        if(i===0) aParticle.bFixed = true;
        myParticles.push(aParticle);
    }

}

//-------------------------
function createSpringMeshConnectingParticles(p5){
    // Stitch the particles together into a mesh,
    // by connecting them to their neighbors with springs.

    // The spring constant.
    var K = 0.01;

    // stitch the particles together into a blob.
    for (var i=0; i<(nPoints-1); i++) {
        var p = myParticles[i];
        var q = myParticles[i+1];
        var aSpring = new Spring(p5);
        aSpring.set (p, q, K);
        mySprings.push(aSpring);
    }
}

function mousePressed(p5) {
    // If the mouse is pressed,
    // find the closest particle, and store its index.
    whichParticleIsGrabbed = -1;
    var maxDist = 10;
    var dx = p5.mouseX - myParticles[nPoints-1].px;
    var dy = p5.mouseY - myParticles[nPoints-1].py;
    var dh = Math.sqrt(dx*dx + dy*dy);
    if (dh < maxDist) {
        whichParticleIsGrabbed = nPoints-1;
    }
}


//==========================================================
var Particle = function Particle(p5) {
    this.px = 0;
    this.py = 0;
    this.vx = 0;
    this.vy = 0;
    this.mass = 1.0;
    this.damping = 0.96;

    this.bFixed = false;
    this.bLimitVelocities = true;
    this.bPeriodicBoundaries = false;
    this.bHardBoundaries = false;


    // Initializer for the Particle
    this.set = function(x, y) {
        this.px = x;
        this.py = y;
        this.vx = 0;
        this.vy = 0;
        this.damping = 0.96;
        this.mass = 0.1;
    };

    // Add a force in. One step of Euler integration.
    this.addForce = function(fx, fy) {
        var ax = fx / this.mass;
        var ay = fy / this.mass;
        this.vx += ax;
        this.vy += ay;
    };

    // Update the position. Another step of Euler integration.
    this.update = function() {
        if (this.bFixed == false){
            this.vx *= this.damping;
            this.vy *= this.damping;

            this.limitVelocities();
            this.handleBoundaries();
            this.px += this.vx;
            this.py += this.vy;

            this.addForce(0, this.mass);
        }
    };

    this.limitVelocities = function() {
        if (this.bLimitVelocities) {
            var speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            var maxSpeed = 10;
            if (speed > maxSpeed) {
                this.vx *= maxSpeed / speed;
                this.vy *= maxSpeed / speed;
            }
        }
    };

    this.handleBoundaries = function() {
        if (this.bPeriodicBoundaries) {
            if (this.px > width) this.px -= width;
            if (this.px < 0) this.px += width;
            if (this.py > height) this.py -= height;
            if (this.py < 0) this.py += height;
        } else if (this.bHardBoundaries) {
            if (this.px >= width){
                this.vx = Math.abs(this.vx)*-1;
            }
            if (this.px <= 0){
                this.vx = Math.abs(this.vx);
            }
            if (this.py >= height){
                this.vy = Math.abs(this.vy)*-1;
            }
            if (this.py <= 0){
                this.vy = Math.abs(this.vy);
            }
        }
    };

    this.render = function() {
        p5.fill(255);
        p5.ellipse(this.px, this.py, 9, 9);
    };
}


//==========================================================
var Spring = function Spring(p5) {
    var p;
    var q;
    var restLength;
    var springConstant;

    this.set = function(p1, p2, k) {
        p = p1;
        q = p2;
        var dx = p.px - q.px;
        var dy = p.py - q.py;
        restLength = Math.sqrt(dx * dx + dy * dy);
        springConstant = k;
    };

    this.update = function() {
        var dx = p.px - q.px;
        var dy = p.py - q.py;
        var dh = Math.sqrt(dx * dx + dy * dy);

        if (dh > 1) {
            var distention = dh - restLength;
            var restorativeForce = springConstant * distention; // F = -kx
            var fx = (dx / dh) * restorativeForce;
            var fy = (dy / dh) * restorativeForce;
            p.addForce(-fx, -fy);
            q.addForce( fx,  fy);
        }
    };

    this.render = function() {
        p5.stroke(0);
        p5.strokeWeight(5);
        p5.line(p.px, p.py, q.px, q.py);
    };
}

const Links = () => {

    const icon1 = useRef(null);

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        let cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
        cnv.mousePressed((event)=>{mousePressed(p5)});
        createParticles(p5);
        createSpringMeshConnectingParticles(p5);
    }

    const draw = (p5) => {
        p5.background (225, 225, 225);

        for (var i=0; i<myParticles.length; i++) {
            myParticles[i].update(); // update all locations
        }
        if (p5.mouseIsPressed && (whichParticleIsGrabbed > -1)) {
            // If the user is grabbing a particle, peg it to the mouse.
            myParticles[whichParticleIsGrabbed].px = p5.mouseX;
            myParticles[whichParticleIsGrabbed].py = p5.mouseY;
        }

        for (var i=0; i<mySprings.length; i++) {
            mySprings[i].update(); // draw all springs
        }

        for (var i=0; i<mySprings.length; i++) {
            mySprings[i].render(); // draw all springs
        }
    }


    return (
        <div className="page linksContainer">
            <Sketch className="linksContainer-linkCanvas" setup={setup} draw={draw}>
            </Sketch>
            <a className="linksContainer-icon1" ref={icon1}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                     fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
            </a>
        </div>
    );
}

export default Links;