function openAntiVariosd() {
    document.getElementById("antivariosjdown").style.display = "block";

setTimeout(() => {
    document.getElementById("antivariosjdown").style.display = "none";
    document.getElementById("bolasquadradas").style.display = "none";
    document.getElementById("antivariosj").style.display = "grid";
    window.top.postMessage({action: 'showElement', elementId: 'boras'}, '*');
}, 5000);
setTimeout(() => { 
    document.getElementById("antivariosj").style.display = "none";
}, 10000);
}