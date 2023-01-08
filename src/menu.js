export default class Menu {
  constructor(dimensions, game) {
    this.dimensions = dimensions;
    this.game = game;
  }

  animate(ctx) {
    this.restartButton(ctx);
    this.highScoreButton(ctx);
  }

  restartButton(ctx) {
    ctx.fillStyle = "red";

    ctx.fillRect(160, 270, 160, 40);

    ctx.fillStyle = "black";
    ctx.font = "36px serif";
    ctx.textAlign = "centre";
    ctx.fillText("Restart", 160, 310, 160);
  }

  highScoreButton(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(160, 330, 160, 40);

    ctx.fillStyle = "black";
    ctx.font = "36px serif";
    ctx.textAlign = "centre";

    ctx.fillText("High Score", 160, 370, 160);
  }
}
