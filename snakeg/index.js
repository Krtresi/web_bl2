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
