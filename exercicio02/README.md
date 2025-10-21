
# 🧠 JavaScript - Aula 02

Este exercício mostra como acessar informações da página HTML usando JavaScript e exibir essas informações com `alert()`.

## 🔍 Código JavaScript utilizado

```
javascript
<script>
  var otitulo = window.document.title;
  alert(otitulo);
</script>

```

##  💬 Explicação passo a passo 

 	1. var otitulo = window.document.title;
		* window: representa a janela do navegador. É o objeto global que contém tudo relacionado à página.
		* document: é uma propriedade de window que representa o conteúdo da página HTML carregada.
		* title: acessa o conteúdo da tag <title> definida no <head> da página.
		* var otitulo: cria uma variável chamada otitulo e armazena nela o título da página.

Neste caso, o título definido é "Aula 02", então otitulo vai conter essa string.

 	2. alert(otitulo);
		* A função alert() exibe uma caixa de alerta no navegador.
		* O conteúdo exibido será o valor da variável otitulo, ou seja: "Aula 02".

## ✅ Resultado

Assim que a página é carregada, o navegador mostra um alerta com o texto:
s


`Aula 02`

Esse exemplo mostra como o JavaScript pode interagir com o conteúdo da página e exibir informações dinamicamente.
