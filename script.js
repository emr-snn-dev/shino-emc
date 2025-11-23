// -------------------
// ランダムで選択
// -------------------
const type = Math.random() < 0.5 ? "bar" : "spinner";

const body = document.body;
const screen = document.getElementById("loading-screen");

// 棒の要素
const barContainer = document.getElementById("loading-bar-container");
const bar = document.getElementById("loading-bar");
const percentText = document.getElementById("loading-percent");

// ぐるぐる
const spinner = document.getElementById("loading-spinner");


// -------------------
// タイプごとの動作
// -------------------
if (type === "bar") {
    barContainer.style.display = "flex";

    let percent = 0;
    const timer = setInterval(() => {
        percent++;
        bar.style.width = percent + "%";
        percentText.textContent = percent + "%";

        if (percent >= 100) {
            clearInterval(timer);
            finishLoading();
        }
    }, 20);

} else {
    spinner.style.display = "block";

    // ぐるぐるは1秒くらいで解除
    setTimeout(() => {
        finishLoading();
    }, 1000);
}


// -------------------
// ローディング解除
// -------------------
function finishLoading() {
    screen.style.opacity = 0;

    setTimeout(() => {
        screen.remove();
        body.style.display = "block";
    }, 300);
}
