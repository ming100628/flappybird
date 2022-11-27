export default class Level {
  constructor(dimensions) {
    this.score = 0;
    this.dimensions = dimensions;
    this.pipes = [
      {
        x: 480,
        y: Math.random() * 490,
        c: false,
      },
      {
        x: 480 + 220,
        y: Math.random() * 490,
        c: false,
      },
      {
        x: 480 + 220 + 220,
        y: Math.random() * 490,
        c: false,
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
      if (pipe.x < -30) {
        this.pipes.push({ x: 660, y: Math.random() * 490, c: false });
      } else {
        if (pipe.x - 1 < 160 && pipe.c == false) {
          this.score += 1;
          pipe.c = true;
        }
        this.pipes.push({
          x: pipe.x - 1,
          y: pipe.y,
          c: pipe.c,
        });
      }
    }
  }

  drawPipes(ctx) {
    const pipes = this.pipes;
    ctx.fillStyle = "green";
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      ctx.fillRect(pipe.x, 0, 30, pipe.y);
      ctx.fillRect(pipe.x, pipe.y + 150, 30, 640 - pipe.y - 150);
    }
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    ctx.fillStyle = "black";

    ctx.font = "48px serif";
    ctx.fillText(this.score, 10, 50);
  }
}
