document.addEventListener("DOMContentLoaded", () => {

    // -----------------------
    // ローディング画面生成
    // -----------------------
    const loader = document.createElement("div");
    loader.id = "loading-screen";
    loader.innerHTML = `
        <div class="loading-box">
            <div class="bar"></div>
            <p>Loading...</p>
        </div>
    `;
    document.body.appendChild(loader);

    // 進捗バーフェイク（0→100）
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 8;
        loader.querySelector(".bar").style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            loader.style.opacity = 0;
            setTimeout(() => loader.remove(), 500);
        }
    }, 100);

});
