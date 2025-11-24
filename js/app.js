fetch("news.json")
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById("news-list");
        list.innerHTML = "";

        const today = new Date();

        data.forEach(news => {
            const li = document.createElement("li");

            // NEW の表示判定
            let showNew = false;
            if (news.days) {
                const newsDate = new Date(news.date);
                const diff = (today - newsDate) / (1000 * 60 * 60 * 24);
                showNew = diff <= news.days;
            }

            li.classList.add("news-card");

            li.innerHTML = `
                <div class="news-item">
                    ${news.img ? `<img src="${news.img}" class="news-img">` : ""}
                    <div class="news-body">
                        <span class="news-date">${news.date}</span>
                        ${showNew ? `<span class="news-new">NEW!</span>` : ""}
                        <p class="news-text">${news.text}</p>
                    </div>
                </div>
            `;

            list.appendChild(li);
        });
    })
    .catch(() => {
        document.getElementById("news-list").innerHTML =
            `<li>読み込みに失敗しました</li>`;
    });
