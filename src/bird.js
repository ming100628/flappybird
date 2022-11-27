const CONSTANTS = {
  GRAVITY: 0.3,
  FLAP_SPEED: -6,
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
    if (this.velocity > 12) {
      this.velocity = 12;
    }
    if (this.velocity < -12) {
      this.velocity = -12;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > 600) {
      this.y = 600;
    }
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  getBounds() {
    const topleft = [this.x, this.y];
    const bottomright = [
      this.x + CONSTANTS.BIRD_WIDTH,
      this.y + CONSTANTS.BIRD_HEIGHT,
    ];
    const bounds = [topleft, bottomright];
    return bounds;
  }
}
