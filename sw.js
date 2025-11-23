// ==========================
//  Service Worker
//  全ページに自動でローディングCSSとJSを注入
// ==========================
self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request)
            .then(async response => {

                const ct = response.headers.get("content-type") || "";
                // HTMLページにだけ注入
                if (ct.includes("text/html")) {
                    let html = await response.text();

                    // すでに読み込み済みなら重複しないように
                    if (!html.includes("loader.js")) {
                        html = html.replace(
                            "<head>",
                            `<head>
<link rel="stylesheet" href="/css/loader.css">
<script src="/js/loader.js" defer></script>`
                        );
                    }

                    return new Response(html, {
                        headers: response.headers
                    });
                }

                return response;
            })
    );
});
