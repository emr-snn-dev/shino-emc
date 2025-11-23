window.onload = () => {
    // ローダーバーを左→右へ伸ばす
    const loader = document.getElementById("loader");
    loader.style.transition = "width 1.2s ease-out";
    loader.style.width = "100%";

    // 1.5秒後に消す（任意）
    setTimeout(() => {
        loader.style.opacity = 0;
    }, 1500);
};
