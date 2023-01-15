import Level from "./level";
import Bird from "./bird";
import Menu from "./menu";
const restartButton = document.getElementById("restart-button");
const birdGame = document.getElementById("bird-game");
export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    this.registerEventListener();
    this.gameover = false;
    this.started = false;
  }

  registerEventListener() {
    restartButton.addEventListener("click", () => {
      this.restart();
    });
    birdGame.addEventListener("click", () => {
      this.started = true;

      if (this.gameover == false) {
        this.bird.flap();
      }
    });
    birdGame.addEventListener("click", (event) => {
      if (
        this.gameover &&
        168 < event.x &&
        event.x < 328 &&
        349 < event.y &&
        event.y < 387
      ) {
        this.restart();
      }
    });
  }

  click() {
    this.animate();
    this.bird.flap();
  }

  play() {
    this.restart();
    this.animate();
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if (this.gameover) {
      this.menu.animate(this.ctx);
    }
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
    this.menu = new Menu(this.dimensions, this);
    this.running = true;
    this.gameover = false;
  }
}
