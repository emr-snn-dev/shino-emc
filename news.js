// ─────────────────────────────
//  お知らせデータ
// ─────────────────────────────
const newsList = [
    {
        date: "2025-11-23",
        title: "ホームページ公開しました！"
    },
    {
        date: "2025-11-22",
        title: "マシン整備を開始しました"
    },
    {
        date: "2025-11-20",
        title: "スポンサー募集開始"
    }
];

// ─────────────────────────────
//  ページ表示
// ─────────────────────────────
function displayNews() {
    const area = document.getElementById("news-area");
    if (!area) return;

    area.innerHTML = newsList.map(news => `
        <div class="news-item">
            <span class="news-date">${news.date}</span>
            <span class="news-title">${news.title}</span>
        </div>
    `).join("");
}

// 読み込み時に出力
document.addEventListener("DOMContentLoaded", displayNews);
