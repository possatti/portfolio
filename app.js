portfolioData = [
  {
    title: "Sincap",
    tags: ["Java", "Spring.io", "Hibernate"],
    image: "http://placehold.it/350x150",
    description: "Sistema Web para auxiliar o processo de doação de córneas no estado do Espírito Santo.",
    link: "http://www.possatti.com.br/sincap/",
  },
  {
    title: "pokemonsay",
    tags: ["Shell Script"],
    image: "http://placehold.it/350x150",
    description: "Variante do 'cowsay', mas para Pokémons.",
    link: "https://github.com/possatti/pokemonsay/",
  },
  {
    title: "Curso de Git",
    tags: ["Git"],
    image: "http://placehold.it/350x150",
    description: "Curso de Git para iniciantes que gravei durante a faculdade.",
    link: "http://www.possatti.com.br/curso-de-git/",
  }
]


var app = new Vue({
  el: '#app',
  data: {
    googleLink: "google.com",
    portfolio: portfolioData,
  },
  computed: {
    randomFlipping: function () {
      return Math.random() >= 0.5 ? 'horizontal' : 'vertical';
    }
  }
})
