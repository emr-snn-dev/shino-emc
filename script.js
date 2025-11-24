// 今日の時間
const now = Date.now();

// お知らせ読み込み
function loadNews() {

  let list = document.getElementById("news-list");
  if(!list) return;

  let news = JSON.parse(localStorage.getItem("news") || "[]");

  // 7日過ぎたら削除
  news = news.filter(n => now - n.date < 7*24*60*60*1000);
  localStorage.setItem("news", JSON.stringify(news));

  if(news.length === 0){
    list.innerHTML = "お知らせはありません";
    return;
  }

  list.innerHTML = "";

  news.forEach(n=>{
    const div = document.createElement("div");
    div.className = "item";

    const isNew = (now - n.date < 2*24*60*60*1000);

    div.innerHTML = `
      ${isNew ? '<span class="new-tag">NEW!</span>' : ''}
      ${n.text}
    `;

    list.appendChild(div);
  });
}

// ページロード時
window.addEventListener("load", ()=>{
  loadNews();  
});
