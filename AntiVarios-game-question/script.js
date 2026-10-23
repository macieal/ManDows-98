function q1() {
  document.getElementById("questions1").style.display = "grid";
  document.getElementById("home").style.display = "none";
}

function q2() {
  document.getElementById("questions1").style.display = "none";
  document.getElementById("questions2").style.display = "grid";
}

function q3() {
  document.getElementById("questions2").style.display = "none";
  document.getElementById("questions3").style.display = "grid";
}

function q4() {
  document.getElementById("questions3").style.display = "none";
  document.getElementById("questions4").style.display = "grid";
}

function q5() {
  document.getElementById("questions4").style.display = "none";
  document.getElementById("questions5").style.display = "grid";
}

function endgame() {
  window.top.postMessage({ action: "message", elementId: "gamenew" }, "*");
}