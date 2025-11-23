const screen = document.getElementById("loading-screen");
const percentText = document.getElementById("percent");
const bar = document.getElementById("loader-bar");
const circle = document.getElementById("loader-circle");

// どっちのローディングを使うかランダム選択
const useBar = Math.random() > 0.5;

// 表示切替
if (useBar) {
    bar.style.display = "block";
} else {
    circle.style.display = "block";
}

let progress = 0;

// ローディング進行の速度（ここを調整）
const speed = Math.random() * 25 + 15; // 15〜40ms

const timer = setInterval(() => {
    progress++;
    percentText.textContent = progress;

    // 棒アニメの場合
    if (useBar) {
        bar.style.width = progress + "%";
    }

    // 100％になったら
    if (progress >= 100) {
        clearInterval(timer);
        finish();
    }

}, speed);

// ローディング完了処理
function finish() {
    screen.style.opacity = 0;

    setTimeout(() => {
        screen.remove();
        window.location.href = "home.html";  // ここで遷移
    }, 500);
}
