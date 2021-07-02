TweenMax.staggerFrom(".btn", 1, { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true }, 0.1);

document.getElementsByClassName("btn")[0].addEventListener("click",() => {
    TweenMax.staggerTo(".btn", 0.5, { opacity: 0, y: -100, ease: Back.easeIn }, 0.1);
    setTimeout(() => (window.location.href = "game.html"), 1000);
});



