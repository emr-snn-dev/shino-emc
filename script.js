// ─────────────────────────────
//  お知らせデータ
// ─────────────────────────────
const newsData = [
    { date: "2025-11-23", title: "ホームページ公開しました" },
    { date: "2025-11-22", title: "マシン整備を開始しました" },
    { date: "2025-11-20", title: "スポンサー募集開始" }
];

// ─────────────────────────────
//  表示処理
// ─────────────────────────────
function loadNews() {

    const target = document.getElementById("news-list");

    // HTMLにIDが無いと停止（デバッグ用）
    if (!target) {
        console.error("news-list がHTML内にありません");
        return;
    }

    target.innerHTML = newsData
        .map(item => `
            <li>
                <span style="font-weight:bold; color:#0070ff">${item.date}</span>
                <span style="margin-left:8px">${item.title}</span>
            </li>
        `)
        .join("");
}

// 画面読み込み時に実行
document.addEventListener("DOMContentLoaded", loadNews);
