const listaPosts = [
  {
    titulo: "Max - Jack Russel Terrier",
    descricao: "Cachorrinho macho que só quer se aparecer então fica fazendo essas poses. É fofo, dócil, amigável e brincalhão, apesar de querer ser o centro das atenções.",
    imgURL: "./img/aparecdio.jpeg",
    botao: "",
  },

  {
    titulo: "Cleo - Kokoni",
    descricao: "Uma fêmea brincalhona que adora grama, lama, correr e brincar de pegar bolinha. Tem 4 anos, já é castrada e tem todas as vacinas em dia. Nos contate e adote já essa linda mocinha.",
    imgURL: "./img/bagual.jpg",
    botao: "",
  },

  {
    titulo: "Capitão - Chihuahua",
    descricao:"Esse chihuahua macho sem um olho é pequeno, energético e cheio de charme. Sua falta de visão não o impede de ser afetuoso e brincalhão, trazendo alegria aos seus donos.",
    imgURL: "./img/cego.jpg",
    botao: "",
  },

  {
    titulo: "Aleijadinha - Não sei a raça",
    descricao:"A Aleijadinha, uma vira-lata fêmea sem uma perna é corajosa e cheia de determinação. Sua força de vontade é inspiradora, sendo uma companheira leal e amorosa para seus donos.",
    imgURL: "./img/perneta.jpeg",
    botao: "",
  },

  {
    titulo: "Slinky - Salsicha",
    descricao:"Stinky, o salsicha macho, é um cãozinho engraçado, afetuoso e cheio de energia. Com seu corpo alongado e patas curtas, ele é um companheiro divertido e adorável, capaz de trazer muitas risadas e momentos especiais para sua família.",
    imgURL: "./img/sicha.jpeg",
    botao: "",
  },

  {
    titulo: "Bob - Vira lata",
    descricao:"Bob, o vira-lata macho, é um cãozinho amigável, leal e cheio de personalidade. Ele é um companheiro fiel e amoroso, pronto para trazer alegria e diversão para sua família. Com sua natureza descontraída e espírito brincalhão, Bob é um verdadeiro amigo de quatro patas.",
    imgURL: "./img/viralata.jpeg",
    botao: "",
  },
];

let container = document.querySelector(".container");

const criacaoPosts = () => {
  listaPosts.forEach((post) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${post.imgURL} /> 
                <h2 class="card-titulo"> ${post.titulo} </h2>
                <p class="card-descricao"> ${post.descricao} </p>
                <button class="card-botao type="button""><a href ="wa.me/5541987654321">Entre em contato</a> ${post.botao}</button>
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

    card.addEventListener("mouseout", ()=> {
    });
  });
};

inputTeste = document.getElementById("inputTeste");

inputTeste.addEventListener("keydown", (tecla) => {
  alert("Tecla pressionada: " + tecla.key);
});