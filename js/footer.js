fetch("data/news.json")
.then(res => res.json())
.then(list => {
    const box = document.getElementById("news-list");
    box.innerHTML = "";

    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.date}　${item.title}`;
        box.appendChild(li);
    });
})
.catch(() => {
    document.getElementById("news-list").innerHTML =
        "<li>読み込み失敗</li>";
});
