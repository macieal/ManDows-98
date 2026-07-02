function about() {
    var about = document.getElementById("about");
    about.style.display = "block";
}
function closeabout() {
    var about = document.getElementById("about");
    about.style.display = "none";
}
function showAfter() {
    window.parent.postMessage({ acao: "hideBoot" }, "*");
}