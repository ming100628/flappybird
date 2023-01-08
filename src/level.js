export default class Level {
  constructor(dimensions, game) {
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
    this.stars = [
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
      {
        x: Math.random() * 480,
        y: Math.random() * 640,
      },
    ];
    this.game = game;
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.drawStars(ctx);
    this.moveStars();
    this.drawPipes(ctx);
    this.movePipes();
  }

  drawStars(ctx) {
    for (let i = 0; i < this.stars.length; i++) {
      this.drawStar(ctx, this.stars[i].x, this.stars[i].y, 6, 1.0, 0.5);
    }
  }

  movePipes() {
    if (this.game.gameover) return;
    const pipes = this.pipes;
    this.pipes = [];
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      if (pipe.x < -30) {
        this.pipes.push({ x: 660, y: Math.random() * 490, c: false });
      } else {
        if (pipe.x - 1 < 130 && pipe.c == false) {
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

  collidesWith(bounds) {
    const birdTopLeft = bounds[0];
    const birdBottomRight = bounds[1];
    const pipes = this.pipes;
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      const pipeOneTopLeft = [pipe.x, 0];
      const pipeOneBottomRight = [pipe.x + 30, pipe.y];

      const pipeTwoTopLeft = [pipe.x, pipe.y + 150];
      const pipeTwoBottomRight = [pipe.x + 30, 640];

      if (
        (birdBottomRight[0] > pipeOneTopLeft[0] &&
          birdTopLeft[0] < pipeOneBottomRight[0] &&
          pipeOneBottomRight[1] >= birdTopLeft[1] &&
          pipeOneTopLeft[1] < birdBottomRight[1]) ||
        (birdBottomRight[0] > pipeTwoTopLeft[0] &&
          birdTopLeft[0] < pipeTwoBottomRight[0] &&
          pipeTwoBottomRight[1] >= birdTopLeft[1] &&
          pipeTwoTopLeft[1] < birdBottomRight[1])
      ) {
        return true;
      }
    }
    return false;
  }

  drawPipes(ctx) {
    const pipes = this.pipes;
    ctx.fillStyle = "green";
    for (let i = 0; i < pipes.length; i++) {
      const pipe = pipes[i];
      ctx.fillRect(pipe.x, 0, 30, pipe.y);
      ctx.fillRect(pipe.x, pipe.y + 150, 30, 640 - pipe.y - 150);
      ctx.drawImage(sprite, 56, 330, 28, 160, pipe.x, pipe.y - 145, 30, 150);
      ctx.drawImage(sprite, 84, 320, 28, 160, pipe.x, pipe.y + 150, 30, 150);
    }
  }

  drawBackground(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    if (this.game.started) {
      ctx.fillStyle = "white";
      ctx.font = "48px serif";
      ctx.fillText(
        this.score,
        this.dimensions.width / 2,
        this.dimensions.height / 3
      );
    }
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    var rot = (Math.PI / 2) * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
  }

  moveStars() {
    if (this.game.gameover) return;

    const stars = this.stars;
    this.stars = [];
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      if (star.x < -3) {
        this.stars.push({ x: 480, y: Math.random() * 490 });
      } else {
        this.stars.push({
          x: star.x - 0.2,
          y: star.y,
        });
      }
    }
  }
}
