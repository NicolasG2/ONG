const listaPosts = [
  {
    id: 1,
    titulo: "Max - Jack Russel Terrier",
    descricao: "Cachorrinho macho que só quer se aparecer então fica fazendo essas poses. É fofo, dócil, amigável e brincalhão, apesar de querer ser o centro das atenções.",
    imgURL: "./img/aparecdio.jpeg",
    botao: "",
  },

  {
    id: 2,
    titulo: "Cleo - Kokoni",
    descricao: "Uma fêmea brincalhona que adora grama, lama, correr e brincar de pegar bolinha. Tem 4 anos, já é castrada e tem todas as vacinas em dia. Nos contate e adote já essa linda mocinha.",
    imgURL: "./img/bagual.jpg",
    botao: "",
  },

  {
    id: 3,
    titulo: "Capitão - Chihuahua",
    descricao: "Esse chihuahua macho sem um olho é pequeno, energético e cheio de charme. Sua falta de visão não o impede de ser afetuoso e brincalhão, trazendo alegria aos seus donos.",
    imgURL: "./img/cego.jpg",
    botao: "",
  },

  {
    id: 4,
    titulo: "Aleijadinha - Não sei a raça",
    descricao: "A Aleijadinha, uma vira-lata fêmea sem uma perna é corajosa e cheia de determinação. Sua força de vontade é inspiradora, sendo uma companheira leal e amorosa para seus donos.",
    imgURL: "./img/perneta.jpeg",
    botao: "",
  },

  {
    id: 5,
    titulo: "Slinky - Salsicha",
    descricao: "Stinky, o salsicha macho, é um cãozinho engraçado, afetuoso e cheio de energia. Com seu corpo alongado e patas curtas, ele é um companheiro divertido e adorável, capaz de trazer muitas risadas e momentos especiais para sua família.",
    imgURL: "./img/sicha.jpeg",
    botao: "",
  },

  {
    id: 6,
    titulo: "Bob - Vira lata",
    descricao: "Bob, o vira-lata macho, é um cãozinho amigável, leal e cheio de personalidade. Ele é um companheiro fiel e amoroso, pronto para trazer alegria e diversão para sua família. Com sua natureza descontraída e espírito brincalhão, Bob é um verdadeiro amigo de quatro patas.",
    imgURL: "./img/viralata.jpeg",
    botao: "",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaPosts.forEach((animal) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${animal.imgURL} /> 
                <h2 class="card-titulo"> ${animal.titulo} </h2>
                <p class="card-descricao"> ${animal.descricao} </p>
                <a class="card-botao" idAnimal="${animal.id}">ADOTAR </a>
            </div>
        `;
    container.innerHTML += card;
  });
};

window.onload = () => {
  criacaoPosts();

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    console.log(card);
    card.addEventListener("mousemove", () => {

    });

    card.addEventListener("mouseout", () => {
    });

    card.lastElementChild.addEventListener("click", (event) => {
      event.preventDefault();
      sectionStorage.setItem("idAnimal", card.lastElementChild.getAttribute("idAnimal"));
      window.location.href = "../form.html";
    });
  });
};

inputTeste = document.getElementById("inputTeste");

inputTeste.addEventListener("keydown", (tecla) => {
  alert("Tecla pressionada: " + tecla.key);
});