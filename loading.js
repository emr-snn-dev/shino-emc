const screen = document.getElementById("loading-screen");
const percentText = document.getElementById("percent");
const bar = document.getElementById("loader-bar");
const circle = document.getElementById("loader-circle");

// ローダーをランダム選択
const useBar = Math.random() > 0.5;

if (useBar) bar.style.display = "block";
else circle.style.display = "block";

let progress = 0;

// スピード（調整可能）
let speed = Math.random() * 25 + 15;

const timer = setInterval(() => {
    progress++;
    percentText.textContent = progress;

    if (useBar) {
        bar.style.width = progress + "%";
    }

    if (progress >= 100) {
        clearInterval(timer);
        finish();
    }
}, speed);

// ローディング完了
function finish() {
    screen.style.opacity = 0;

    setTimeout(() => {
        screen.remove();
        window.location.href = "home.html";
    }, 500);
}
