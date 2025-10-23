
## Explicação do Código JavaScript – Interatividade com Imagens

Este código adiciona interatividade às imagens de uma página HTML usando JavaScript. Ele é executado assim que o conteúdo da página termina de carregar.

## 🔹 Evento DOMContentLoaded

```
document.addEventListener("DOMContentLoaded", function () {
  // código aqui
});
```
Esse evento garante que o JavaScript só será executado depois que o HTML estiver totalmente carregado, evitando erros ao tentar acessar elementos que ainda não existem.

## 🔹 Seleção de Elementos

```
const imagem = document.getElementById("goku");
const imagem1 = document.getElementById("naruto");
const todasfotos = document.querySelectorAll("img");
```
1. imagem: seleciona a imagem com ID goku

2. imagem1: seleciona a imagem com ID naruto

3. todasfotos: seleciona todas as imagens da página

## 🔹 Evento onload para cada imagem

```
todasfotos.forEach(function(foto) {
  foto.onload = function () {
    window.alert("Interaja com as fotos!");
  };
});
```

4. forEach: percorre cada imagem da lista

5. foto.onload: define uma ação para quando cada imagem terminar de carregar

6. alert: exibe uma mensagem ao usuário

## 🔹 Evento onmouseover na imagem do Goku

```
imagem.onmouseover = function () {
  window.alert("Feche essa caixa e clique na foto do naruto!");
};
```

7. Quando o usuário passa o mouse sobre a imagem do Goku, aparece um alerta com instruções.

## 🔹 Evento onclick na imagem do Naruto

```

imagem1.onclick = function () {
  window.alert("Passe o mouse na foto do goku!");
};

```
7. Quando o usuário clica na imagem do Naruto, aparece um alerta pedindo para interagir com o Goku.

## 🎯 Resultado final

+ Ao carregar a página, o usuário vê um alerta: "Interaja com as fotos!"

+ Ao passar o mouse sobre o Goku, aparece: "Feche essa caixa e clique na foto do naruto!"

+ Ao clicar no Naruto, aparece: "Passe o mouse na foto do goku!"







