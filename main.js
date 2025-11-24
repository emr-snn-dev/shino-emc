// 🔵 ローディング表示
document.getElementById("loading").style.display = "block";


fetch("news.json")
    .then(res => res.json())
    .then(data => {

        setTimeout(()=> {
            document.getElementById("loading").style.display = "none";
        }, 800);


        const now = new Date();
        const newsArea = document.getElementById("newsArea");

        data.forEach(item => {

            const date = new Date(item.date);
            const diff = (now - date) / (1000 * 60 * 60 * 24);
            const showNew = diff <= 7;

            const card = document.createElement("div");
            card.className = "news-card";
            
            card.innerHTML = `
                <div class="news-title">
                    ${item.title}
                    ${showNew ? `<span class="news-new">NEW!</span>` : ""}
                </div>
                <div class="news-date">${item.date}</div>
                ${item.image ? `<img class="news-img" src="${item.image}">` : ""}
                <div class="news-body">${item.text}</div>
            `;

            newsArea.appendChild(card);
        });
    });
