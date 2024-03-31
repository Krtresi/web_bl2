(function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // canvas size
    const canvasSize = 680;
    const w = (canvas.width = canvasSize);
    const h = (canvas.height = canvasSize);
    const canvasFillColor = "#000d36";
    const canvasStrokeColor = "rgba(211, 211, 211, 0.19)";

    const scoreEl = document.getElementById("score");
    const resetEl = document.getElementById("reset");
    const showGridEl = document.getElementById("show-grid");
    const highScoreEl = document.getElementById("high-score");
    const pauseEl = document.getElementById("pause");
    const playEl = document.getElementById("play");

    let score = 0;

    const setScore = () => {
        scoreEl.innerHTML = `Score 👉 ${score}`;
        if (score >= localStorage.getItem("highScore"))
            localStorage.setItem("highScore", score);
        highScoreEl.innerHTML = `HI SCORE 🚀 ${localStorage.getItem("highScore")}`;
    };
})();

// frame rate
const frameRate = 9.5;

// grid padding
const pGrid = 4;
// grid width
const grid_line_len = canvasSize - 2 * pGrid;
//  cell count
const cellCount = 44;
// cell size
const cellSize = grid_line_len / cellCount;

let gameActive;

// this will generate random color for head
const randomColor = () => {
    let color;
    let colorArr = ["#426ff5", "#42f5e3"];
    color = colorArr[Math.floor(Math.random() * 2)];
    return color;
};

const head = {
    x: 2,
    y: 1,
    color: randomColor(),
    vX: 0,
    vY: 0,
    draw: () => {
        ctx.fillStyle = head.color;
        ctx.shadowColor = head.color;
        ctx.shadowBlur = 2.5;
        ctx.fillRect(
            head.x * cellSize + pGrid,
            head.y * cellSize + pGrid,
            cellSize,
            cellSize
        );
    },
};

let tailLength = 4;
let snakeParts = [];
class Tail {
    color = "#42f57e";
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 2.5;
        ctx.fillRect(
            this.x * cellSize + pGrid,
            this.y * cellSize + pGrid,
            cellSize,
            cellSize
        );
    }
};

const food = {
    x: 5,
    y: 5,
    color: "#FF3131",
    draw: () => {
        ctx.fillStyle = food.color;
        ctx.shadowColor = food.color;
        ctx.shadowBlur = 5;
        ctx.fillRect(
            food.x * cellSize + pGrid,
            food.y * cellSize + pGrid,
            cellSize,
            cellSize
        );
    },
};


// this will set canvas style
const setCanvas = () => {
    // canvas fill
    ctx.fillStyle = canvasFillColor;
    ctx.fillRect(0, 0, w, h);

    // canvas stroke
    ctx.strokeStyle = canvasStrokeColor;
    ctx.strokeRect(0, 0, w, h);
};

//   this will draw the grid
const drawGrid = () => {
    ctx.beginPath();
    for (let i = 0; i <= grid_line_len; i += cellSize) {
        ctx.moveTo(i + pGrid, pGrid);
        ctx.lineTo(i + pGrid, grid_line_len + pGrid);
    }
    for (let i = 0; i <= grid_line_len; i += cellSize) {
        ctx.moveTo(pGrid, i + pGrid);
        ctx.lineTo(grid_line_len + pGrid, i + pGrid);
    }
    ctx.closePath();
    ctx.strokeStyle = canvasStrokeColor;
    ctx.stroke();
};
