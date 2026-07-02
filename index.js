console.log("Please leave so you don't cheat. >:(")
document.addEventListener('contextmenu', event => event.preventDefault());
	
window.addEventListener("message", function(event) {
    if(event.data.acao === "hideBoot") {
		const showAfterDown = document.getElementById("showAfterDown");
        if(showAfterDown) showAfterDown.style.display = "none";
        const boot = document.getElementById("started-boot");
        if(boot) boot.style.display = "none";
		showAfter()
    }
});

function showAfter() {
	const audio = new Audio('./songs/started.mp3');
	audio.play();
	setTimeout(() => {
		document.getElementById("showAfter").style.display = "none";
		document.getElementById("showAfterDown").style.display = "none";
	}, 5000);
}

function showAfterDown() {
	const audio = new Audio('./songs/shutdown.mp3');
	audio.play();
    document.getElementById("logar").style.display = "block";
    document.getElementById("janela-login").style.display = "block";
    document.getElementById("start").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("closemenu").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bauser").style.display = "none";
	document.getElementById("lixo").style.display = "none";
	document.getElementById("noteped").style.display = "none";
	document.getElementById("Terminal").style.display = "none";
	document.getElementById("boras").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("notepedj").style.display = "none";
	document.getElementById("TerminalJ").style.display = "none";
	document.getElementById("antivariosj").style.display = "none";
	document.getElementById("explorer").style.display = "none";
	document.getElementById("customizationj").style.display = "none";
	document.getElementById('showAfterDown').style.display = 'block';
	setTimeout(() => {
		document.getElementById('showAfterDown').style.display = 'none';
		document.getElementById("showAfter").style.display = "block";
		document.getElementById('started-boot').style.display = 'block';
	}, 4000);
}

function areaDeTrabalho() {
	document.getElementById("janela-login-update").style.display = "none";
	document.getElementById("logar-update").style.display = "none";
	document.getElementById("others-login-update").style.display = "none";
    document.getElementById("logar").style.display = "none";
    document.getElementById("janela-login").style.display = "none";
	setTimeout(() => {  
		document.getElementById("start").style.display = "block";
		document.getElementById("bar").style.display = "block";
		document.getElementById("closemenu").style.display = "block";
		document.getElementById("info").style.display = "block";
		document.getElementById("bauser").style.display = "block";
		document.getElementById("noteped").style.display = "block";
		document.getElementById("Terminal").style.display = "block";
		document.getElementById("lixo").style.display = "block";
	}, 1000);
}

function closeareaDeTrabalho() {
    document.getElementById("logar").style.display = "block";
    document.getElementById("janela-login").style.display = "block";
    document.getElementById("start").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("closemenu").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bauser").style.display = "none";
	document.getElementById("noteped").style.display = "none";
	document.getElementById("Terminal").style.display = "none";
	document.getElementById("boras").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("notepedj").style.display = "none";
	document.getElementById("TerminalJ").style.display = "none";
	document.getElementById("antivariosj").style.display = "none";
	document.getElementById("explorer").style.display = "none";
	document.getElementById("customizationj").style.display = "none";
	document.getElementById("lixo").style.display = "none";
}

function error33123antivarios() {
    document.getElementById("logar").style.display = "none";
    document.getElementById("janela-login").style.display = "none";
    document.getElementById("start").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("closemenu").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bauser").style.display = "none";
	document.getElementById("noteped").style.display = "none";
	document.getElementById("Terminal").style.display = "none";
	document.getElementById("boras").style.display = "none";
	document.getElementById("antivariosj").style.display = "none";
	document.getElementById("lixo").style.display = "none";
	setTimeout(() => {
		const audio = new Audio('./songs/erro.mp3');
		audio.play();
		document.getElementById("error-j").style.display = "block";

	}, 5000);
	setTimeout(() => {
			document.getElementById('updatetitle33123').style.display = "none";
			document.getElementById('updatetitlefoud').style.display = "block";
			document.getElementById('updatebutton33123antivarios').style.display = "block";
	}, 10000);
}

function openMenu() {
	var menu = document.getElementById("menu");
	menu.style.display = "block";

	var infomenu = document.getElementById("infomenu");
	infomenu.style.display = "block";

	var bausermenu = document.getElementById("bausermenu");
	bausermenu.style.display = "block";
}

function closeMenu() {
	var menu = document.getElementById("menu");
	menu.style.display = "none";
	document.getElementById("menu-update").style.display = "none";
}

function openInfo() {
	var jia = document.getElementById("jia");
	jia.style.display = "block";
	document.getElementById("info-icon-bar").style.display = "block";

	var menu = document.getElementById("menu");
	menu.style.display = "none";
	document.getElementById("menu-update").style.display = "none";
}

function closeJia() {
	document.getElementById("info-icon-bar").style.display = "none";
	var jia = document.getElementById("jia");
	jia.style.display = "none";
}

function bauser() {
	document.getElementById("bauser-icon-bar").style.display = "block";
	var jint = document.getElementById("jint");
	jint.style.display = "block";

	var menu = document.getElementById("menu");
	menu.style.display = "none";

	var menu = document.getElementById("menu-update");
	menu.style.display = "none";
}

function closeJint() {
	document.getElementById("browser").contentWindow.location.reload();
	document.getElementById("bauser-icon-bar").style.display = "none";
	document.getElementById("jint").style.display = "none";
}

window.addEventListener('message', function(event) {
	if (event.data.action === 'showElement') {
		var element = document.getElementById(event.data.elementId);
		if (element) {
			element.style.display = 'block';
		}
	}
});

window.addEventListener('message', function(event) {
	if (event.data.action === 'filecodeerror404') {
		var element = document.getElementById(event.data.elementId);
		if (element) {
			element.style.display = 'block';
		}
	}
});

window.addEventListener("message", function(event){
	if(event.data === "abrir-notepad"){
		document.getElementById("notepedj-txt").style.display = "block"
	}
})

function openCustomization() {
	var customization = document.getElementById("customizationj");
	customization.style.display = "block";
}

function closeCustomization() {
	var customization = document.getElementById("customizationj");
	customization.style.display = "none";
}

function win98wallpaper1() {
	document.body.style.backgroundImage = "url('./1353257.png')";
	document.body.style.backgroundSize = "cover";
}

function win98wallpaper2() {
	document.body.style.backgroundImage = "url('./1353275.png')";
	document.body.style.backgroundSize = "cover";
}

function win98wallpaper3() {
	document.body.style.backgroundImage = "url('./Ny9VbGloWUsucG5n.png')";
	document.body.style.backgroundSize = "cover";
}

function win98wallpaper4() {
	document.body.style.backgroundImage = "url('./OTUuanBn.png')";
	document.body.style.backgroundSize = "cover";
}

function windefaultwallpaper() {
	document.body.style.backgroundImage = "none";
	document.body.style.backgroundColor = "rgb(0, 129, 128)";
}

function openExplorer() {
	var explorer = document.getElementById("explorer");
	explorer.style.display = "block";
}

function closeExplorer() {
	var explorer = document.getElementById("explorer");
	explorer.style.display = "none";
}

function antivariosjabrir() {
	var antivariosj = document.getElementById("antivariosj");
	antivariosj.style.display = "block";
	document.getElementById("boras-icon-bar").style.display = "block";
}

function closeVariosj() {
	var antivariosj = document.getElementById("antivariosj");
	antivariosj.style.display = "none";
	document.getElementById("boras-icon-bar").style.display = "none";
	document.getElementById("javboras").style.display = "none";
}

function varioscontinuar() {
    var input = document.getElementById('antivarios-password');
    var senha = input.value;

    if (senha === 'antivarios123execute') {
        error33123antivarios();
    } else {
        input.value = '';
    }
}

function openNotepedJ() {
	var notepedj = document.getElementById("notepedj");
	notepedj.style.display = "block";
	document.getElementById("noteped-icon-bar").style.display = "block";
}

function closeNotepedJ() {
	var notepedj = document.getElementById("notepedj");
	notepedj.style.display = "none";
	document.getElementById("notepedj-txt").style.display = "none";
	document.getElementById("noteped-icon-bar").style.display = "none";
}

function openTerminalJ() {
	var TerminalJ = document.getElementById("TerminalJ");
	TerminalJ.style.display = "block";
	document.getElementById("Terminal-icon-bar").style.display = "block";
}

function closeTerminalJ() {
	var TerminalJ = document.getElementById("TerminalJ");
	TerminalJ.style.display = "none";
	document.getElementById("Terminal-icon-bar").style.display = "none";
	document.getElementById("Terminal-Iframe").contentWindow.location.reload();
}

function updatemandows() {
	document.getElementById("showAfter").style.display = "block";
	const audio = new Audio('./songs/shutdown.mp3');
	audio.play();
	setTimeout(() => {
		document.getElementById("showAfter").style.display = "none";
		document.getElementById("error-j").style.display = "none";
		document.getElementById("black-update").style.display = "block"
	}, 5000);
	setTimeout(() => {
		document.getElementById("black-update").style.display = "none"
		document.getElementById("showAfter").style.display = "block";
		const audio = new Audio('./songs/started.mp3');
		audio.play();
	}, 7500);
	setTimeout(() => {
		updatemandows98login()
	}, 12500);
}

function updatemandows98login() {
    document.getElementById("logar").style.display = "none";
    document.getElementById("janela-login").style.display = "none";
	document.getElementById("update-info").style.display = "block";
	document.getElementById("showAfter").style.display = "none";
	document.getElementById("janela-login-update").style.display = "block";
	document.getElementById("logar-update").style.display = "block";
	document.getElementById("others-login-update").style.display = "block";
	document.getElementById("start").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("closemenu").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bauser").style.display = "none";
	document.getElementById("noteped").style.display = "none";
	document.getElementById("Terminal").style.display = "none";
	document.getElementById("lixo").style.display = "none";
	document.getElementById("boras").style.display = "none";
	document.getElementById("menu").style.display = "none";
	document.getElementById("notepedj").style.display = "none";
	document.getElementById("TerminalJ").style.display = "none";
	document.getElementById("antivariosj").style.display = "none";
	document.getElementById("explorer").style.display = "none";
	document.getElementById("customizationj").style.display = "none";
	document.getElementById("nameuser").style.display = "block";
	document.getElementById("user").style.display = "block";
}

function closeuic() {
	document.getElementById("update-info").style.display = "none";
}

function areaDeTrabalhoUpdate()  {
	document.getElementById("janela-login-update").style.display = "none";
	document.getElementById("logar-update").style.display = "none";
	document.getElementById("others-login-update").style.display = "none";
	setTimeout(() => {
		document.getElementById("lixo").style.display = "block";
		document.getElementById("boras-icon-bar").style.display = "none";
		document.getElementById("Terminal-update").style.display = "block";
		document.getElementById("noteped-update").style.display = "block";
		document.getElementById("boras-update").style.display = "block";
		document.getElementById("info-update").style.display = "block";
		document.getElementById("bauser-update").style.display = "block";
		document.getElementById("bar").style.display = "block";
		document.getElementById("start-update").style.display = "block";
		document.getElementById("closemenu").style.display = "block";
		document.getElementById("currentTime-back").style.display = "grid";
	}, 1000);

}

function antivariosjabrirerror() {
	const audio = new Audio('./songs/erro.mp3');
	audio.play();
	document.getElementById("javboras").style.display = "block";
	document.getElementById("boras-icon-bar").style.display = "block";
}

function closejavboras() {
	document.getElementById("javboras").style.display = "none";
	document.getElementById("boras-icon-bar").style.display = "none";
}

function openMenuUpdate() {
	document.getElementById("menu-update").style.display = "block";
}

function closeareaDeTrabalhoUpdate() {
	document.getElementById("logar").style.display = "none";
    document.getElementById("janela-login").style.display = "none";
    document.getElementById("start").style.display = "none";
	document.getElementById("janela-login-update").style.display = "block";
	document.getElementById("logar-update").style.display = "block";
	document.getElementById("others-login-update").style.display = "block";
	document.getElementById("bar").style.display = "none";
	document.getElementById("start-update").style.display = "none";
	document.getElementById("closemenu").style.display = "none";
	document.getElementById("info-update").style.display = "none";
	document.getElementById("bauser-update").style.display = "none";
	document.getElementById("lixo").style.display = "none";
	document.getElementById("noteped-update").style.display = "none";
	document.getElementById("Terminal-update").style.display = "none";
	document.getElementById("boras-update").style.display = "none";
	document.getElementById("menu-update").style.display = "none";
	document.getElementById("notepedj").style.display = "none";
	document.getElementById("TerminalJ").style.display = "none";
	document.getElementById("antivariosj").style.display = "none";
	document.getElementById("explorer").style.display = "none";
	document.getElementById("customizationj").style.display = "none";
	document.getElementById("currentTime-back").style.display = "none";
	document.getElementById("AppUnlocker").style.display = "none";
}

function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toLocaleTimeString('en-GB');
}

showTime();
setInterval(function () {
    showTime();
}, 1000);

function bauserUpdate() {
	document.getElementById("jint").style.display = "block";
	document.getElementById("browser").src = "./Browser-Update/browser.html";
	document.getElementById("bauser-icon-bar").style.display = "block";
	document.getElementById("menu-update").style.display = "none";
}

window.addEventListener("message", (event) => {
    if (event.data?.elementId === "appunlocker") {
        document.getElementById("AppUnlocker").style.display = "block";
    }
});

function AppUnlockerexecute() {
	document.getElementById("auJ").style.display = "block";
	document.getElementById("AppUnlocker-icon-bar").style.display = "block";
}

function openlixeiraJ() {
	document.getElementById("trashJ").style.display = "block";
	document.getElementById("lixo-icon-bar").style.display = "block";
}

function exitlixeiraJ() {
	document.getElementById("trashJ").style.display = "none";
	document.getElementById("lixo-icon-bar").style.display = "none";
}

function antivariosjabrirunlocker() {
	document.getElementById("loading-antivarios-unlocked").style.display = "block";
	setTimeout(() => {
		document.getElementById("loadingantivarios-success").style.display = "block";
		document.getElementById("loadingantivarios-bar").style.display = "none";
		document.getElementById("boras-update-unlocker").style.display = "block";
		document.getElementById("boras-update").style.display = "none";
		document.getElementById("buttonunlockedantivarios").disabled = "true";
		setTimeout(() => {
			document.getElementById("loading-antivarios-unlocked").style.display = "none";
		}, 2000);
	}, 2500);
}

function closeauJ() {
    document.getElementById("auJ").style.display = "none";
    document.getElementById("AppUnlocker-icon-bar").style.display = "none";
}

function antivariosjabrirboras() {
    const iframeJogo = document.getElementById("minigame-antivarios123");
    
    if (iframeJogo) {
        iframeJogo.style.display = "block";
        setTimeout(() => {
            iframeJogo.contentWindow.postMessage({action: "message", elementId: "antivariosiniciargame"}, '*');
        }, 100);
    }
}

function executorantivarios() {
	document.getElementById("jint").style.display = "block";
	document.getElementById("browser").src = "Browser/antivariosgame.html";
    const eb = document.getElementById("exitbutton");
    document.getElementById("antivarios-assistent").style.display = "block";
    eb.disabled = true;
    document.getElementById("minigame-antivarios123").style.display = "none";
	blockedsystemusedupdate()
	setTimeout(() => {
		document.getElementById("dialoguebar-antivarios").style.display = "grid";
		document.getElementById("dialoguebar-antivarios").innerText = "Antivarios:Hello dune...";
	}, 2000);
	setTimeout(() => {
		document.getElementById("dialoguebar-antivarios").innerText = "Antivarios:I'm checking your computer while you play my game.";
		setTimeout(() => {
			document.getElementById("dialoguebar-antivarios").innerText = "Scanning Applications.";
			setTimeout(() => {
				document.getElementById("dialoguebar-antivarios").innerText = "Scanning Applications..";
				setTimeout(() => {
					document.getElementById("dialoguebar-antivarios").innerText = "Scanning Applications...";
				}, 3000);
			}, 3000);
		}, 3000);
	}, 3000);
}

window.addEventListener("message", (event) => {
    if (event.data?.elementId === "sixsept") {
		executorantivarios()
    }
});

const picker = document.getElementById('picker');
picker.addEventListener('input', (e) => {
  const cor = e.target.value;
  document.body.style.background = cor;
});

function showdebugbutton() {
	document.getElementById("opendebug").style.display = "block";
}

function hidedebugbutton() {
	document.getElementById("opendebug").style.display = "none";
}

function debugshow() {
	document.getElementById("debug").style.display = "block";
	hidedebugbutton()
}

function debughide() {
	document.getElementById("debug").style.display = "none";
	showdebugbutton()
}

function blockedsystemusedupdate() {
	document.getElementById("lixo").style.pointerEvents = "none";
	document.getElementById("Terminal-update").style.pointerEvents = "none";
	document.getElementById("boras-update-unlocker").style.pointerEvents = "none";
	document.getElementById("info-update").style.pointerEvents = "none";
	document.getElementById("bauser-update").style.pointerEvents = "none";
	document.getElementById("AppUnlocker").style.pointerEvents = "none";
	document.getElementById("noteped-update").style.pointerEvents = "none";
	document.getElementById("start-update").style.pointerEvents = "none";
	document.getElementById("BakExplorerCloseButton").style.pointerEvents = "none";
}

function unblockedsystemusedupdate() {
	document.getElementById("lixo").style.pointerEvents = "none";
	document.getElementById("Terminal-update").style.pointerEvents = "auto";
	document.getElementById("boras-update-unlocker").style.pointerEvents = "auto";
	document.getElementById("info-update").style.pointerEvents = "auto";
	document.getElementById("bauser-update").style.pointerEvents = "auto";
	document.getElementById("AppUnlocker").style.pointerEvents = "auto";
	document.getElementById("noteped-update").style.pointerEvents = "auto";
	document.getElementById("start-update").style.pointerEvents = "auto";
	document.getElementById("BakExplorerCloseButton").style.pointerEvents = "auto";
}