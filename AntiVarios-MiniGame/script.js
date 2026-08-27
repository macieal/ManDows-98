const player = document.getElementById('player');

let posX = (window.innerWidth / 2) - 40; 
let posY = (window.innerHeight / 2) - 40;
const velocidade = 25;

player.style.left = posX + "px";
player.style.top = posY + "px";

window.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase();

    if (tecla === 'w') posY -= velocidade;
    if (tecla === 's') posY += velocidade;
    if (tecla === 'a') posX -= velocidade;
    if (tecla === 'd') posX += velocidade;
    
    player.style.left = posX + "px";
    player.style.top = posY + "px";
});

window.addEventListener("message", (event) => {
    if (event.data?.elementId === "antivariosiniciargame") {
        text1();
    }
});

function text1() {
    document.getElementById("1").style.display = "block";
    document.getElementById("1").style.animation = "textenter normal 3s";
    setTimeout(() => {
        document.getElementById("1").style.animation = "textexit normal 3s";
        setTimeout(() => {
            document.getElementById("1").style.display = "none";
            text2();
        }, 3000);
    }, 3000);
}

function text2() {
    document.getElementById("2").style.display = "block";
    document.getElementById("2").style.animation = "textenter normal 3s";
    setTimeout(() => {
        document.getElementById("2").style.animation = "textexit normal 3s";
        setTimeout(() => {
            document.getElementById("2").style.display = "none";
            text3();
        }, 3000);
    }, 3000);
}

function text3() {
    document.getElementById("3").style.display = "block";
    document.getElementById("3").style.animation = "textenter normal 3s";
    setTimeout(() => {
        document.getElementById("3").style.animation = "textexit normal 3s";
        setTimeout(() => {
            document.getElementById("3").style.display = "none";
            jumpscari();
        }, 3000);
    }, 3000);
}

function jumpscari() {
    document.getElementById("player").style.display = "none";
    document.getElementById("antivarios").style.display = "block";
    setTimeout(() => {
        document.getElementById("antivarios").style.display = "none";
        window.top.postMessage({action: 'message', elementId: 'sixsept'}, '*');
    }, 250);
}