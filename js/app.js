document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loading");
    const bar = document.getElementById("loading-bar");

    let progress = 0;
    const timer = setInterval(() => {
        progress += Math.random() * 12;

        if(progress >= 100){
            progress = 100;
            bar.style.width = "100%";
            clearInterval(timer);

            setTimeout(() => {
                loader.style.opacity = 0;
                setTimeout(() => loader.remove(), 400);
            }, 300);
        }else{
            bar.style.width = `${progress}%`;
        }
    }, 120);
});
