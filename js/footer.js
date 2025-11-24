document.addEventListener("DOMContentLoaded", () => {
    
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <ul>
            <li><a href="index.html">トップ</a></li>
            <li><a href="challenge.html">私たちの挑戦</a></li>
            <li><a href="machine.html">マシン紹介</a></li>
            <li><a href="support.html">スポンサー・ご支援</a></li>
        </ul>
        <p>© 2025 篠ノ井技術クラブ All Rights Reserved.</p>
    `;

    document.body.appendChild(footer);
});
