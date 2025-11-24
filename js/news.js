const NEWS = [
    "2月：新型車が完成！",
    "1月：今年も大会に出場。",
    "12月：スポンサーの皆さま、ありがとうございます！",
];

window.addEventListener("DOMContentLoaded", () => {
    const ul = document.getElementById("news-list");

    ul.innerHTML = "";

    NEWS.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        ul.appendChild(li);
    });
});
