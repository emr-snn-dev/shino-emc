document.addEventListener("DOMContentLoaded", () => {
    fetch("js/news.json")
        .then(res => res.json())
        .then(data => {
            const ul = document.getElementById("news-list");
            ul.innerHTML = "";
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.date}　${item.title}`;
                ul.appendChild(li);
            });
        });
});
