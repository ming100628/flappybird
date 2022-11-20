export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [
      {
        x: 480,
        y: 50,
      },
      {
        x: 480 + 220,
        y: 100,
      },
      {
        x: 480 + 220 + 220,
        y: 80,
      },
    ];
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.drawPipes(ctx);
    this.movePipes();
  }

  movePipes() {
    const pipes = this.pipes;
    this.pipes = [];
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      this.pipes.push({
        x: pipe.x - 1,
        y: pipe.y,
      });
    }
  }

  drawPipes(ctx) {
    const pipes = this.pipes;
    ctx.fillStyle = "green";
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      ctx.fillRect(pipe.x, pipe.y, 30, 100);
    }
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}
