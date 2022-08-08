let docl = document.documentElement;
function flexible() {
    let rem = docl.clientWidth / 10;
    docl.style.fontSize = rem + "px";
}
flexible();
window.addEventListener("resize", flexible);
