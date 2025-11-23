// ⭐ ページ読み込みアニメーション
window.addEventListener("load", () => {
    const bar = document.getElementById("loading-bar");
    bar.style.transition = "1.2s ease";
    bar.style.width = "100%";

    setTimeout(() => {
        bar.style.opacity = 0;
    }, 1400);
});

// ⭐ 今日の日付表示
const todayText = document.querySelector(".today");
if (todayText) {
    const date = new Date();
    const w = ["日", "月", "火", "水", "木", "金", "土"];
    todayText.textContent =
        `今日の日付： ${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${w[date.getDay()]}曜日`;
}
