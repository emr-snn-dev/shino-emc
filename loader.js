//--------------------------------------------------
//  ローディングDOM生成
//--------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    const loader = document.createElement("div");
    loader.id = "loading-screen";

    // ランダムに選択
    if (Math.random() < 0.5) {
        loader.innerHTML = `<div class="spinner"></div>`;
    } else {
        loader.innerHTML = `<div class="load-bar"></div>`;
    }

    document.body.appendChild(loader);
});

//--------------------------------------------------
//  ページ読み込み完了
//--------------------------------------------------
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");

    // ローディングフェードアウト
    loader.classList.add("fadeout");

    // 本文フェードイン
    setTimeout(() => {
        loader.remove();
        document.body.style.transition = "opacity 0.7s";
        document.body.style.opacity = 1;
    }, 600);
});
