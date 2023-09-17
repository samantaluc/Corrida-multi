class Form {
  constructor() {
    // Cria um campo de entrada de texto vazio com um atributo de placeholder.
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    // Cria um botão com o texto "Jogar".
    this.playButton = createButton("Jogar");
    // Cria uma imagem com um arquivo de imagem e um atributo alt.
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    // Cria um elemento HTML h2 vazio para a saudação.
    this.greeting = createElement("h2");
  }

  // Define a posição dos elementos na tela.
  setElementsPosition() {
    // Posiciona a imagem do título nas coordenadas (120, 50).
    this.titleImg.position(120, 50);
    // Posiciona o campo de entrada de texto no centro vertical e ligeiramente deslocado para cima.
    this.input.position(width / 2 - 110, height / 2 - 80);
    // Posiciona o botão "Jogar" no centro vertical e ligeiramente deslocado para cima.
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    // Posiciona a saudação no centro vertical e ligeiramente deslocado para cima.
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  // Define os estilos CSS dos elementos.
  setElementsStyle() {
    // Aplica a classe CSS "gameTitle" à imagem do título.
    this.titleImg.class("gameTitle");
    // Aplica a classe CSS "customInput" ao campo de entrada de texto.
    this.input.class("customInput");
    // Aplica a classe CSS "customButton" ao botão "Jogar".
    this.playButton.class("customButton");
    // Aplica a classe CSS "greeting" à saudação.
    this.greeting.class("greeting");
  }

  // Oculta os elementos do formulário.
  hide() {
    // Esconde a saudação.
    this.greeting.hide();
    // Esconde o botão "Jogar".
    this.playButton.hide();
    // Esconde o campo de entrada de texto.
    this.input.hide();
  }

  // Define a ação a ser executada quando o botão "Jogar" é pressionado.  AULA 36
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      // Esconde o campo de entrada de texto. AULA 36
      this.input.hide();
      // Esconde o botão "Jogar". AULA 36
      this.playButton.hide();
      // Cria uma mensagem com o nome inserido no campo de entrada. AULA 36
      var message = `
      Olá, ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      // Define o conteúdo HTML da saudação com a mensagem. AULA 36
      this.greeting.html(message);
    });
  }

  // Função para exibir todos os elementos na tela.
  display() {
    // Configura a posição dos elementos.
    this.setElementsPosition();
    // Configura os estilos dos elementos.
    this.setElementsStyle();
    // Define o comportamento do botão "Jogar" quando pressionado. AULA 36
    this.handleMousePressed();
  }
}
