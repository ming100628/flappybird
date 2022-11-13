const CONSTANTS = {
  GRAVITY: 0.4,
  FLAP_SPEED: -12,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30,
};

export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.velocity = 0;
    this.x = dimensions.width / 3;
    this.y = dimensions.height / 2;
  }

  move() {
    this.y += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, 30, 40);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }
}
