/* ===============================
   LOADING
================================*/
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
    }, 600);
});

/* =================================
   LOCAL STORAGE NEWS
================================= */
const STORAGE_KEY = "SHINO_NEWS";
const DAYS_NEW = 7;

/* Get data */
function loadNews(){
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

/* Save data */
function saveNews(list){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

/* Render */
function renderNews(){
    const box = document.getElementById("newsArea");
    if(!box) return;

    const list = loadNews();
    const now = new Date();

    box.innerHTML = "";

    list.forEach(item=>{
        const diff = (now - new Date(item.date)) / 86400000;
        const isNew = diff <= DAYS_NEW;

        box.innerHTML += `
            <div class="news-card">
                <h3>
                    ${item.title}
                    ${isNew ? `<span class="badge-new">NEW!</span>` : ""}
                </h3>
                <small>${item.date}</small>
            </div>
        `;
    });
}

/* =================================
   ADMIN SUBMIT
================================= */
function postNews(){
    const title = document.getElementById("news-title").value;

    if(!title){
        alert("タイトルを入力してください");
        return;
    }

    const list = loadNews();
    list.unshift({
        title,
        date: new Date().toISOString().slice(0,10)
    });
    saveNews(list);
    location.reload();
}

renderNews();

