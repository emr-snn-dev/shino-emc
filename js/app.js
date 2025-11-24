// ------------------------------------------------
// ローディングバー進捗制御
// ------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.getElementById("loading-screen");
    const fill = document.querySelector(".loading-fill");
    
    let progress = 0;

    let timer = setInterval(() => {

        // ランダムに進み方が変化
        progress += Math.random() * 8;

        if (progress > 100) progress = 100;

        // バー幅反映
        fill.style.width = progress + "%";

        // 100% 到達 → フェードアウト
        if (progress >= 100) {
            clearInterval(timer);

            setTimeout(() => {
                loadingScreen.style.opacity = 0;
                setTimeout(() => loadingScreen.remove(), 500);
            }, 250);
        }

    }, 120);
});
