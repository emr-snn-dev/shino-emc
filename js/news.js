// ニュースのサンプルデータ（あとで JSON に変更可）
const newsData = [
    "2025/01/10　今シーズン始動！",
    "2025/01/15　車体改良を開始しました",
    "2025/02/01　スポンサー募集開始"
];

window.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("news-list");
    ul.innerHTML = "";

    newsData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
});
