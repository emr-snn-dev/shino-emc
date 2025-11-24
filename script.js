// ------------------------------------
// お知らせ読み込み＆表示
// ------------------------------------
async function loadNews() {
    const newsArea = document.getElementById("newsArea");
    if (!newsArea) return; // そのページにない場合

    try {
        const res = await fetch("news.json");
        const news = await res.json();

        let html = "";

        news.forEach(item => {
            const today = new Date();
            const postDate = new Date(item.date);
            const diff = (today - postDate) / 86400000; // 日数差

            // NEW! 7日以内
            const isNew = diff <= 7;

            html += `
            <div class="news-card">
                ${item.image ? `<img src="${item.image}" class="news-img">` : ""}
                <div class="news-title">
                    ${item.title}
                    ${isNew ? `<span class="newtag">NEW!</span>` : ""}
                </div>
                <div class="news-date">${item.date}</div>
                <div class="news-content">${item.content}</div>
            </div>
            `;
        });

        newsArea.innerHTML = html;

    } catch (e) {
        newsArea.innerHTML = "<p>ニュースを読み込めませんでした。</p>";
    }
}

// ------------------------------------
// ローディングアニメーション
// ------------------------------------
let loadProgress = 0;
function startLoading() {
    const overlay = document.getElementById("loadingOverlay");
    const text = document.getElementById("loadingText");
    const bar = document.getElementById("loadingBar");

    if (!overlay) return;

    let timer = setInterval(() => {
        loadProgress++;
        text.innerText = loadProgress + "%";
        bar.style.width = loadProgress + "%";

        if (loadProgress >= 100) {
            clearInterval(timer);

            setTimeout(() => {
                overlay.style.opacity = 0;
                setTimeout(() => {
                    overlay.style.display = "none";
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    loadNews();
                }, 500);
            }, 300);
        }
    }, 20);
}

document.addEventListener("DOMContentLoaded", startLoading);



// ------------------------------------
// 管理画面：ログイン保存
// ------------------------------------
function adminLogin() {
    const pass = document.getElementById("adminPass").value;
    if (pass === "shinoclub") {
        localStorage.setItem("adminLogin", "ok");
        window.location.href = "admin.html";
    } else {
        alert("パスワードが違います");
    }
}


// ------------------------------------
// ニュース追加保存
// ------------------------------------
async function addNews() {
    const title = document.getElementById("newTitle").value;
    const date = document.getElementById("newDate").value;
    const image = document.getElementById("newImage").value;
    const content = document.getElementById("newContent").value;

    const res = await fetch("news.json");
    const news = await res.json();

    news.unshift({
        title,
        date,
        image,
        content
    });

    // ローカルで保存（GitHub Pagesは書き込み不可 → 手動で書き戻し）
    const blob = new Blob([JSON.stringify(news, null, 2)], {
        type: "application/json"
    });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "news.json";
    a.click();

    alert("news.json を上書きアップロードしてください");
}

