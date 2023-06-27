/*var FILE = '../css/tema.css';
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
});
*/
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