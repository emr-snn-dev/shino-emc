// ======================================
// ローディングアニメーション
// ======================================
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loading");
    const progress = document.querySelector(".loading-progress");
    const text = document.getElementById("loading-text");

    let percent = 0;

    const timer = setInterval(() => {
        percent++;
        progress.style.width = percent + "%";
        text.textContent = percent + "%";

        if (percent >= 100) {
            clearInterval(timer);

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        }
    }, 15); // 読み込み速度（ms）調整
});

// ======================================
// 背景モーション（青が動く演出例）
// ======================================
document.body.style.background = `
radial-gradient(circle at 30% 20%, #e7f2ff, #d0e7ff),
radial-gradient(circle at 80% 70%, #f0f8ff, #d6e8ff)
`;

let bgPos = 0;
setInterval(() => {
    bgPos += 0.1;
    document.body.style.backgroundPosition = `${bgPos}px ${bgPos}px`;
}, 50);

