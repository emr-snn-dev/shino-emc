// ----------------------------------
// ローディング（回転 or バーをランダム）
// ----------------------------------
window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".loading-animation");

    // 50%の確率でアニメを変える
    const random = Math.random() > 0.5;

    if (random) {
        container.innerHTML = `<div class="loader-circle"></div>`;
    } else {
        container.innerHTML = `
            <div class="loader-bar-wrap">
                <div class="loader-bar"></div>
            </div>`;
    }
});

// ----------------------------------
// ページ読み込み完了
// ----------------------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("fade-out");
    }, 600);
});
