function carregar() {
  let mensagem = document.getElementById("container-msg");
  let imagem = document.getElementById("conteiner-img");

  let data = new Date();
  let hora = 19;

  mensagem.innerHTML = `Agora são ${hora} horas`;

  if (hora > 0 && hora <= 12) {
    imagem.src = "./assets/manha.jpeg";
    document.body.style.background = "#D3C6A4";
  } else if (hora > 12 && hora <= 18) {
    imagem.src = "./assets/tarde.jpeg";
    document.body.style.background = "#FD8504";
  } else if (hora > 18) {
    imagem.src = "./assets/noite.jpeg";
    document.body.style.background = "#0067A4";
  }
}