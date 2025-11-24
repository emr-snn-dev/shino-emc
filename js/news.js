document.addEventListener("DOMContentLoaded", () => {

    const ul = document.getElementById("news-list");
    if (!ul) return;

    fetch("./js/news.json")
        .then(res => res.json())
        .then(data => {

            ul.innerHTML = "";

            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.date}　${item.title}`;
                ul.appendChild(li);
            });

        })
        .catch(() => {
            ul.innerHTML = "<li>お知らせを読み込めませんでした。</li>";
        });

});
