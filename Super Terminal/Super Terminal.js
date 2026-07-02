document.addEventListener("DOMContentLoaded", () => {

const terminal = document.getElementById("Terminal");
const PROMPT = "C:\\>";

terminal.value = PROMPT;
terminal.focus();

function cursorFinal(){
  setTimeout(()=>{
    terminal.selectionStart = terminal.selectionEnd = terminal.value.length;
  },0);
}

function ultimaLinha(){
  const linhas = terminal.value.split("\n");
  return linhas[linhas.length - 1];
}

terminal.addEventListener("keydown", function (e) {

  const linha = ultimaLinha();

  if (e.key === "Backspace" && linha === PROMPT) {
    e.preventDefault();
    return;
  }

  if (e.key !== "Enter") return;

  e.preventDefault();

  let comandoRaw = linha.replace(PROMPT, "").trim();
  let comando = comandoRaw.toLowerCase();

  if (comando === "help") {

terminal.value += `

Available commands

help
about
clear
cls
echo
date
time
whoami
ver
dir
tree
uptime
calc
color
matrix
hack
beep
format c:
random
reboot
exit
bin2text

super commands

delete

`;

  }

  else if (comando === "about") {

    const uptime = Math.floor(performance.now()/1000);
    const largura = screen.width;
    const altura = screen.height;

terminal.value += `
        ██████████    ██████████
        ██████████    ██████████
        ██████████    ██████████
        ██████████    ██████████

        ██████████    ██████████
        ██████████    ██████████
        ██████████    ██████████
        ██████████    ██████████

maciel@mandows98
-------------------------
OS: ManDows 98
Kernel: JavaScript 1.0
Uptime: ${uptime}s
Resolution: ${largura}x${altura}
Terminal: ManDows CMD
Developer: Maciel

`;

  }

  else if (comando === "clear" || comando === "cls") {

    terminal.value = "";

  }

  else if (comando.startsWith("echo ")) {

    terminal.value += "\n" + comandoRaw.slice(5) + "\n";

  }

  else if (comando === "date") {

    terminal.value += "\n" + new Date().toLocaleDateString() + "\n";

  }

  else if (comando === "time") {

    terminal.value += "\n" + new Date().toLocaleTimeString() + "\n";

  }

  else if (comando === "whoami") {

    terminal.value += "\nmaciel\n";

  }

  else if (comando === "ver") {

    terminal.value += "\nManDows 98 Web Edition v1.0\n";

  }

  else if (comando === "dir") {

terminal.value += `
 Volume in drive C
 Directory of C:\\

autoexec.bat
config.sys
mandows.exe
neofetch.exe
games
system
readme.txt

`;

  }

  else if (comando === "tree") {

terminal.value += `

C:\\
│
├── system
│   ├── kernel.dll
│   └── drivers
│
├── games
│   ├── doom.exe
│   └── snake.exe
│
├── users
│   └── maciel
│
└── readme.txt

`;

  }

  else if (comando === "uptime") {

    const uptime = Math.floor(performance.now()/1000);
    terminal.value += `\nSystem uptime: ${uptime} seconds\n`;

  }

  else if (comando.startsWith("calc ")) {

    let conta = comandoRaw.slice(5);

    try {

      if (!/^[0-9+\-*/(). ]+$/.test(conta)) throw "error";

      let resultado = Function('"use strict";return (' + conta + ')')();

      terminal.value += "\n" + resultado + "\n";

    } catch {

      terminal.value += "\nCalculation error\n";

    }

  }

  else if (comando.startsWith("color ")) {

    let cor = comandoRaw.slice(6).toLowerCase();

    if (cor === "black") {

      terminal.value += "\nBlack is not allowed.\n";

    } else {

      terminal.style.color = cor;
      terminal.value += "\nColor changed to " + cor + "\n";

    }

  }

  else if (comando === "matrix") {

    terminal.value += "\nStarting Matrix...\n";

    const chars = "01";

    let intervalo = setInterval(() => {

      let linha = "";

      for(let i=0;i<60;i++){
        linha += chars[Math.floor(Math.random()*chars.length)];
      }

      terminal.value += linha + "\n";
      terminal.scrollTop = terminal.scrollHeight;

    },100);

    setTimeout(()=>{

      clearInterval(intervalo);

      terminal.value += "\nMatrix finished\n";
      terminal.value += "\n" + PROMPT;

    },5000);

    return;

  }

  else if (comando === "hack") {

    const etapas = [
      "Connecting to server...",
      "Breaking firewall...",
      "Injecting payload...",
      "Accessing database...",
      "Downloading files...",
      "Access granted."
    ];

    let i = 0;

    let intervalo = setInterval(()=>{

      if(i >= etapas.length){

        clearInterval(intervalo);

        terminal.value += "\nHack complete.\n";
        terminal.value += "\n" + PROMPT;

        return;

      }

      terminal.value += "\n" + etapas[i];
      terminal.scrollTop = terminal.scrollHeight;

      i++;

    },900);

    return;

  }

  else if (comando === "beep") {

    try{
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();

      osc.type = "square";
      osc.frequency.value = 800;

      osc.connect(ctx.destination);
      osc.start();

      setTimeout(()=>osc.stop(),200);
    }catch{}

    terminal.value += "\nBeep!\n";

  }

  else if (comando === "format c:") {

    terminal.value += "\nWARNING: Formatting drive C:\n";

    let progresso = 0;

    let intervalo = setInterval(()=>{

      progresso += Math.floor(Math.random()*10);

      if(progresso >= 100){

        clearInterval(intervalo);

        terminal.value += "Format complete.\n";
        terminal.value += "\n" + PROMPT;

      } else {

        terminal.value += "Formatting " + progresso + "%\n";
        terminal.scrollTop = terminal.scrollHeight;

      }

    },300);

    return;

  }

  else if (comando === "random") {

    let n = Math.floor(Math.random()*1000);
    terminal.value += "\nRandom number: " + n + "\n";

  }
  
  else if (comando === "reboot") {

    terminal.value += "\nRebooting ManDows 98...\n";

    setTimeout(()=>{
      location.reload();
    },1500);

    return;
  }

  else if (comando === "exit") {

    terminal.value += "\nShutting down terminal...\n";

    setTimeout(()=>{
      location.reload();
    },1000);

    return;

  }

  else if (comando.startsWith("bin2text ")) {

  let binarios = comandoRaw.slice(9).trim().split(" ");
  let resultado = "";

  try {

    for (let b of binarios) {

      if (!/^[01]{8}$/.test(b)) {
        throw "error";
      }

      resultado += String.fromCharCode(parseInt(b, 2));

    }

    terminal.value += "\n" + resultado + "\n";

  } catch {

    terminal.value += "\nInvalid binary. Use 8-bit groups.\n";

  }

}

  else if (comando !== "") {

    terminal.value += "\nUnknown command: " + comando + "\n";

  }

  terminal.value += "\n" + PROMPT;

  terminal.scrollTop = terminal.scrollHeight;

  cursorFinal();

});

terminal.addEventListener("selectstart", e => e.preventDefault());

terminal.addEventListener("click", cursorFinal);
terminal.addEventListener("keyup", cursorFinal);
terminal.addEventListener("mouseup", cursorFinal);

});