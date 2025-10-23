
document.addEventListener("DOMContentLoaded", function () {
  const imagem = document.getElementById("goku");
  const imagem1 = document.getElementById("naruto");
  const todasfotos = document.querySelectorAll("img");

  todasfotos.forEach(function(foto) {
    foto.onload = function () {
      window.alert("Interaja com as fotos!");
    };
  });

  imagem.onmouseover = function () {
    window.alert("Feche essa caixa e clique na foto do naruto!");
  };

  imagem1.onclick = function () {
    window.alert("Passe o mouse na foto do goku!");
  };
});
