// ↓ ページ読込直後に実行
document.addEventListener("DOMContentLoaded", () => {

    const loadingScreen = document.createElement("div");
    loadingScreen.id = "loading-screen";

    // ランダムで
    const mode = Math.random() < 0.5 ? "bar" : "spinner";

    if (mode === "bar") {
        loadingScreen.innerHTML = `
            <div style="font-size:20px">読み込み中...</div>
            <div class="loading-bar">
                <div class="loading-bar-inner" id="bar"></div>
            </div>
            <div id="percent" style="margin-top:10px;font-size:14px;">0%</div>
        `;
    } else {
        loadingScreen.innerHTML = `
            <div style="font-size:20px">読み込み中...</div>
            <div class="spinner"></div>
        `;
    }

    document.body.appendChild(loadingScreen);


    //===============================
    // 進捗フェイクシミュレーション
    //===============================
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 8;
        if (progress > 100) progress = 100;

        const bar = document.getElementById("bar");
        const percent = document.getElementById("percent");

        if (bar) bar.style.width = progress + "%";
        if (percent) percent.textContent = Math.floor(progress) + "%";

        if (progress >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                loadingScreen.style.opacity = 0;
                setTimeout(() => {
                    loadingScreen.remove();
                    document.querySelector(".page-content").style.display = "block";
                }, 500);
            }, 300);
        }
    }, 120);
});
