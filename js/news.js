// news.js - 簡易お知らせ（外部JSON化も可能）
// 実運用では data/news.json を fetch して表示するのがおすすめ。

const NEWS_ITEMS = [
  { date: "2025-11-23", title: "ホームページを公開しました" },
  { date: "2025-11-20", title: "新型シャシー開発フェーズ2へ" },
  { date: "2025-11-10", title: "スポンサー募集開始" }
];

document.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('news-list');
  if (!ul) return;

  ul.innerHTML = '';
  NEWS_ITEMS.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.date}　${item.title}`;
    ul.appendChild(li);
  });
});
