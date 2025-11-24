// app.js
// ローディング：ランダムで「回転」か「横バー」を表示。ページ読み込み完了でフェードアウト。

(function () {
  function createSpinner() {
    const s = document.createElement('div');
    s.className = 'loader-circle';
    return s;
  }

  function createBar() {
    const wrap = document.createElement('div');
    wrap.className = 'loader-bar-wrap';
    const bar = document.createElement('div');
    bar.className = 'loader-bar';
    wrap.appendChild(bar);
    return wrap;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const animRoot = document.querySelector('.loading-animation');
    if (!animRoot) return;

    // ランダム選択（50/50）
    const useSpinner = Math.random() > 0.5;
    const widget = useSpinner ? createSpinner() : createBar();
    animRoot.appendChild(widget);
  });

  // 完全読み込み後にフェードアウト
  window.addEventListener('load', () => {
    const loading = document.getElementById('loading-screen');
    if (!loading) return;

    // 余裕を持たせてクールにフェード
    setTimeout(() => {
      loading.classList.add('fade-out');
      setTimeout(() => {
        if (loading && loading.parentNode) loading.parentNode.removeChild(loading);
      }, 480);
    }, 500);
  });
})();
