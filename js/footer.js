document.addEventListener("DOMContentLoaded", () => {

    const footer = document.createElement("footer");

    footer.innerHTML = `
        <div class="footer-nav">
            <a href="index.html">トップ</a>
            <a href="challenge.html">私たちの挑戦</a>
            <a href="machine.html">マシン紹介</a>
            <a href="support.html">スポンサー・ご支援</a>
        </div>

        <!-- 広告（忍者AdMax） -->
        <div class="ad-box">
            <script src="https://adm.shinobi.jp/s/2ecfa2b9f787a0094565767bec84c8fb"></script>
        </div>

        <p>© 2025 篠ノ井技術クラブ</p>
    `;

    document.body.appendChild(footer);
});
