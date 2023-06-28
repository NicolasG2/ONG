let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let nav_link = document.querySelectorAll(".nav-link");
  let nav_link_active = document.querySelector(".nav-link.active");
  let cards = document.querySelectorAll(".card");
  let cards_descricao = document.querySelectorAll(".card-descricao");
  let cards_botao = document.querySelectorAll(".card-botao");
  let form = document.querySelector("form");

  if (botaoTema.checked) {
    body.classList.add("body-dark");
    header.classList.add("header-dark");

    nav_link.forEach((nav) => {
      nav.classList.add("nav-link-dark")
    });

    nav_link_active.classList.add("nav-link-dark.active");

    cards.forEach((card) => {
      card.classList.add("card-dark");
    });

    cards_descricao.forEach((descricao) => {
      descricao.classList.add("card-dark-descricao");
    });

    cards_botao.forEach((botao) => {
      botao.classList.add("card-dark-botao");
    });

    form.classList.add("form-dark");

  } else {
    body.classList.remove("body-dark");
    header.classList.remove("header-dark");

    nav_link.forEach((nav) => {
      nav.classList.remove("nav-link-dark")
    });

    nav_link_active.classList.remove("nav-link-dark.active");

    cards.forEach((card) => {
      card.classList.remove("card-dark");
    });

    cards_descricao.forEach((descricao) => {
      descricao.classList.remove("card-dark-descricao");
    });

    cards_botao.forEach((botao) => {
      botao.classList.remove("card-dark-botao");
    });

    form.classList.remove("form-dark");
  }
});

/*var linkElement = document.getElementById('dinamico');

let botaoTema = document.querySelector("#botaoTema");

botaoTema.addEventListener("click", () => {
  if (botaoTema.checked) {
    linkElement.setAttribute('href', '../css/tema.css');
  } else {
    linkElement.setAttribute('href', '../css/style.css');
  }
});


var darkThemeFile = '../css/tema.css';
var lightThemeFile = '../css/style.css';
var linkElement = document.getElementById('dinamico');

// Define o arquivo CSS inicial
linkElement.setAttribute('href', lightThemeFile);

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (botaoTema.checked) {
    linkElement.setAttribute('href', darkThemeFile); // Atualiza para o arquivo CSS do tema escuro
  } else {
    linkElement.setAttribute('href', lightThemeFile); // Atualiza para o arquivo CSS do tema claro
  }
});


var FILE = '../css/tema.css';
var linkElement = document.getElementById('dinamico');
linkElement.setAttribute('href', FILE);

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (botaoTema.checked) {
    body.classList.add("tema");
  } else {
    body.classList.remove("tema");
  }
});


var FILE = '../css/tema.css';
var linkElement = document.getElementById('dinamico');
linkElement.setAttribute('href', FILE);

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (botaoTema.checked) {
    body.classList.add("tema"); // Adicione a classe específica para o tema
  } else {
    body.classList.remove("tema"); // Remova a classe específica para o tema
  }
});

var FILE = '../css/tema.css';
document.getElementById('dinamico').setAttribute('href', FILE);

let botaoTema = document.querySelector("#botaoTema");
console.log(botaoTema);

botaoTema.addEventListener("click", () => {
  let body = document.querySelector("body");

  if (botaoTema.checked) {
    body.classList.add(FILE);
  } else {
    body.classList.remove(FILE);
  }
});*/