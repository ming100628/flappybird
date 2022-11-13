export default class Bird {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.velocity = 0;
    this.x = dimensions.width / 3;
    this.y = dimensions.height / 2;
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, 30, 40);
  }

  animate(ctx) {
    this.drawBird(ctx);
  }
}
