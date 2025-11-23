// Loading + Background
window.addEventListener("load", () => {

    // ----- 2種類のローディングをランダム表示 -----
    const loaders = [
        `<div class="loader-circle"></div>`,
        `<div class="loader-bar"><div class="loader-bar-fill"></div></div>`
    ];

    const randomLoader = loaders[Math.floor(Math.random() * loaders.length)];

    const loadingScreen = document.createElement("div");
    loadingScreen.className = "loading-screen";
    loadingScreen.innerHTML = randomLoader;
    document.body.appendChild(loadingScreen);

    // ----- バーの場合は進む速度を乱数に -----
    let progress = 0;
    const speed = 20 + Math.random() * 40;

    const timer = setInterval(() => {
        progress++;

        const bar = document.querySelector(".loader-bar-fill");
        if (bar) bar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(timer);

            loadingScreen.style.opacity = 0;
            setTimeout(() => loadingScreen.remove(), 600);
        }
    }, speed);

    // ----- 動く背景 -----
    const bg = document.createElement("div");
    bg.className = "bg-motion";
    document.body.appendChild(bg);
});


// ------------------------------
// News Loading
// ------------------------------
window.addEventListener("DOMContentLoaded", () => {

    const list = document.querySelector("#news-list");

    if (!list || !window.NEWS_DATA) return;

    list.innerHTML = "";

    NEWS_DATA.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>[${item.category}]</strong>
            ${item.text}
            <span style="display:block;font-size:12px;opacity:0.7;">
                ${item.date}
            </span>
        `;
        list.append(li);
    });

});
