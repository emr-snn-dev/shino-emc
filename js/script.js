// ページロード完了後にローディング画面を消す
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1600);   // ローディング棒と合わせる
});
