const CONSTANTS = {
  GRAVITY: 0.3,
  FLAP_SPEED: -4,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 50,
  BIRD_HEIGHT: 50,
};

export default class Bird {
  constructor(dimensions, game) {
    this.dimensions = dimensions;
    this.velocity = 0;
    this.x_velocity = -12;
    this.x = dimensions.width / 3;
    this.y = dimensions.height / 2;
    this.game = game;
  }

  move() {
    if (this.game.gameover) {
      this.x += this.x_velocity;
      this.x_velocity += 1;
      if (this.x_velocity >= 0) {
        this.x_velocity = 0;
      }
    }
    if (this.game.started) {
      this.y += this.velocity;
      this.velocity += CONSTANTS.GRAVITY;
    }
    if (this.velocity > 12) {
      this.velocity = 12;
    }
    if (this.velocity < -12) {
      this.velocity = -12;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > this.dimensions.height - CONSTANTS.BIRD_HEIGHT) {
      this.y = this.dimensions.height - CONSTANTS.BIRD_HEIGHT;
    }
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  drawBird(ctx) {
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    ctx.drawImage(
      sprite,
      Math.floor(Math.random() * 3) * 28,
      486,
      26,
      26,
      this.x,
      this.y,
      CONSTANTS.BIRD_WIDTH * 1.25,
      CONSTANTS.BIRD_HEIGHT * 1.25
    );
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
