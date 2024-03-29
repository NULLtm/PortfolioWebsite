import "../styles/Links.css";
import Sketch from "react-p5";


const ropes = [];

const restDis = 15;
const width = 500;
const height = 500;

//==========================================================
function Rope(xPos, nPoints, link, message) {
    this.particles = [];
    this.button = null;
    this.xPos = xPos;
    this.nPoints = nPoints;
    this.springs = [];
    this.link = link;
    this.message = message;

    this.update = function(p5) {
        for (var i=0; i < this.particles.length; i++) {
            this.particles[i].update(); // update all locations
        }

        this.button.position(this.particles[this.nPoints-1].px + 410,this.particles[this.nPoints-1].py + 190);

        
        for (var i=0; i< this.springs.length; i++) {
            this.springs[i].update(); // draw all springs
        }

        for (var i=0; i< this.springs.length; i++) {
            this.springs[i].render(); // draw all springs
        }


    }

    this.gotoLink = function(){
        window.open(link, '_blank');
    }

    this.createParticles = function(p5) {

        this.button = p5.createButton(this.message);
        this.button.mousePressed(this.gotoLink);
        this.button.size(80,50);

        for (var i=0; i< this.nPoints; i++) {
            var rx = this.xPos + restDis*i;
            var ry = 0;
            var aParticle = new Particle(p5);
            aParticle.set(rx,ry);
            aParticle.bPeriodicBoundaries = false;
            aParticle.bHardBoundaries = true;
            if(i===0) aParticle.bFixed = true;
            this.particles.push(aParticle);
        }
    }

    this.createSpringMeshConnectingParticles = function(p5){
        // Stitch the particles together into a mesh,
        // by connecting them to their neighbors with springs.
    
        // The spring constant.
        var K = 0.01;
    
        // stitch the particles together into a blob.
        for (var i=0; i<(this.nPoints-1); i++) {
            var p = this.particles[i];
            var q = this.particles[i+1];
            var aSpring = new Spring(p5);
            aSpring.set (p, q, K);
            this.springs.push(aSpring);
        }
    }




}


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

    const preload = (p5) => {
    }

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        let cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
        

        var linkedin = new Rope(200, 7, "https://www.linkedin.com/in/nullthemoment/", "LinkedIn");
        ropes.push(linkedin);

        var github = new Rope(400, 6, "https://github.com/NULLtm", "Github");
        ropes.push(github);

        for(var i = 0; i < 2; i++) {
            ropes[i].createParticles(p5);
            ropes[i].createSpringMeshConnectingParticles(p5);
        }
    }

    const draw = (p5) => {
        p5.background (225, 225, 225);

        for(var i = 0; i < 2; i++) {
            ropes[i].update(p5);
        }
    }


    return (
        <div className="page linksContainer">
            <div>I am no artist... haha</div>
            <Sketch className="linksContainer-linkCanvas" preload={preload} setup={setup} draw={draw}>
            </Sketch>
        </div>
    );
}

export default Links;