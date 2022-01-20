const botao = document.getElementById("botao");
const corpo = document.getElementById("corpo");
const h1 = document.getElementsByTagName("h1")[0];

function mudaCor(x) {
  x.classList.toggle("bg-white");
  x.classList.toggle("bg-black");
  x.classList.toggle("color-black");
  x.classList.toggle("color-white");
}

function mudaTexto() {
  if (corpo.classList.contains("bg-white")) {
    h1.innerHTML = "White Mode ON";
  } else {
    h1.innerHTML = "Dark Mode ON";
  }

  if (botao.classList.contains("bg-white")) {
    botao.innerHTML = "White Mode";
  } else {
    botao.innerHTML = "Dark Mode";
  }
}

function mudaModo() {
  mudaCor(corpo);
  mudaCor(botao);
  mudaTexto();
}

botao.addEventListener("click", mudaModo);
