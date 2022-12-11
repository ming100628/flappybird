import Level from "./level";
import Bird from "./bird";

const restartButton = document.getElementById("restart-button");

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    this.registerEventListener();
    this.gameover = false;
  }

  registerEventListener() {
    restartButton.addEventListener("click", () => {
      this.restart();
      console.log("restarting");
    });
    addEventListener("click", () => {
      if (this.gameover == false) {
        this.bird.flap();
      }
      console.log("flapping!");
    });
  }

  click() {
    if (this.running) {
      this.animate();
    }
    this.bird.flap();
  }

  play() {
    this.restart();
    this.running = true;
    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if (this.level.collidesWith(this.bird.getBounds())) {
      this.gameover = true;
    }
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart() {
    this.level = new Level(this.dimensions, this);
    this.bird = new Bird(this.dimensions, this);
    this.running = true;
    this.gameover = false;
  }
}
