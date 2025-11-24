document.addEventListener("DOMContentLoaded", () => {

    const header = document.createElement("header");
    header.innerHTML = `
        <nav class="global-nav">
            <ul>
                <li><a href="index.html">トップ</a></li>
                <li><a href="challenge.html">私たちの挑戦</a></li>
                <li><a href="machine.html">マシン紹介</a></li>
                <li><a href="support.html">スポンサー・ご支援</a></li>
            </ul>
        </nav>
    `;

    document.body.prepend(header);
});
