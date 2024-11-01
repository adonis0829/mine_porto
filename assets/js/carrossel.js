function carrosselInit() {
  const botaoAnterior = "[data-botao-anterior]";
  const botaoProximo = "[data-botao-proximo]";
  const listaProjetos = "[data-carrossel]";
  const navegacao = "[data-navegacao]";
  const titulo = "[data-projeto='titulo']";
  const link = "[data-projeto='link']";
  const detalhes = "[data-projeto='detalhes']";
  const techs = "[data-projeto='techs']";
  const botaoVisitar = "[data-botao='visitar']";
  const botaoRepositorio = "[data-botao='repositorio']";

  const dados = {
    projetos: [
      {
        titulo: "AI image Generator",
        link: "https://getimg.ai/",
        repositorio: "https://getimg.ai/",
        detalhes:
          "getimg.ai is an AI-powered platform that enables users to create and edit images using text prompts. It offers a suite of tools",
        techs: ["React", ,"Node", "Figma", "Trello"],
      },
      {
        titulo: "ArtxPro",
        link: "https://artxpro.com/",
        repositorio: "https://artxpro.com/",
        detalhes:
          "ArtxPro.com is a web design and development company based in Pakistan. It specializes in creating responsive, visually appealing, and functional websites tailored to client needs, offering services like CMS development, e-commerce solutions, and website maintenance. With over 12 years of experience and a 98.9% client retention rate, ArtxPro is focused on providing customized solutions and seamless user experiences​",
        techs: ["Next", "React", "Figma", "Angular"],
      },
      {
        titulo: "Galaxy Toyota",
        link: "https://www.galaxytoyota.in/",
        repositorio: "https://www.galaxytoyota.in/",
        detalhes:
          "Galaxy Toyota is a car dealership known for providing excellent customer service and a smooth buying experience. They receive positive feedback for transparency, helpful sales staff, and overall customer satisfaction. The dealership handles both new and pre-owned vehicles, building trust and a strong customer base over time",
        techs: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
      },
      {
        titulo: "Face App",
        link: "https://www.faceapp.com/",
        repositorio: "https://www.faceapp.com/",
        detalhes:
          "FaceApp is an advanced photo-editing application that uses AI to transform portrait photos with over 60 filters. It can apply features like age changes, retouching, facial hair, and background adjustments. Popular for its ease of use, FaceApp gained significant attention with its realistic aging filter, making it a top app in 2019. Available for download on both iOS and Android platforms, it boasts millions of active users worldwide.",
        techs: ["HTML5", "Sass", "TypeScript", "React", "Figma"],
      },
      {
        titulo: "Construction Management",
        link: "https://www.braveheartventures.ca/",
        repositorio: "https://www.braveheartventures.ca/",
        detalhes:
          "Braveheart Ventures is a construction management company based in North Vancouver, British Columbia. They offer high-quality design and build services for both commercial and residential properties across the Vancouver Lower Mainland. Their services include commercial tenant improvements, retail store renovations, hospitality construction, and residential renovations, including condo projects. The company emphasizes flexibility, expertise, integrity, and efficiency in its operations.",
        techs: ["HTML5", "CSS3", "JavaScript", "React", "Figma"],
      },
      {
        titulo: "Shang Hai Center",
        link: "https://porelas.ong.br/",
        repositorio: "https://github.com/gc-barros/por-elas",
        detalhes:
          "ShangHai center building design (pixel perfect).",
        techs: ["Figma", "Trello"],
      },
      {
        titulo: "Flamngo",
        link: "https://flamingotoursbd.com/",
        repositorio: "https://flamingotoursbd.com/",
        detalhes:
          "Flamingo Tours & Travel Ltd. is a Bangladeshi travel agency with over a decade of experience, offering comprehensive tourism and travel-related services. Their offerings include international and domestic flight bookings, visa and passport assistance, tour packages, hotel reservations, vehicle services, and Hajj and Umrah arrangements. They have offices in Chittagong and Cox's Bazar, providing 24/7 customer support. Flamingo Tours & Travel has been nominated multiple times for Bangladesh's Leading Travel Agency by the World Travel Awards.",
        techs: ["HTML5", "CSS3", "JavaScript", "Figma"],
      },
      {
        titulo: "Sky Scanner",
        link: "https://www.skyscanner.com/",
        repositorio: "https://www.skyscanner.com/",
        detalhes:
          'Skyscanner is a global travel search engine that allows users to compare and book flights, hotels, and car rentals. It aggregates data from various airlines and travel providers, enabling travelers to find the best deals and plan their trips efficiently. The platform offers features like flexible date searches and price alerts to help users secure optimal travel options. Skyscanner is accessible via its website and mobile app, catering to a wide audience worldwide.',
        techs: ["HTML5", "CSS3", "JavaScript", "Figma"],
      },
    ],
  };

  let carrossel = new Carousel(
    botaoAnterior,
    botaoProximo,
    listaProjetos,
    navegacao,
    titulo,
    link,
    detalhes,
    techs,
    dados,
    botaoVisitar,
    botaoRepositorio
  );

  carrossel.preparaSlides();
}

export default carrosselInit;

class Carousel {
  constructor(
    anterior,
    proximo,
    listaProdutos,
    navegacao,
    titulo,
    link,
    detalhes,
    techs,
    dados,
    botaoVisitar,
    botaoRepositorio
  ) {
    this.anterior = document.querySelector(anterior);
    this.proximo = document.querySelector(proximo);
    this.listaProdutos = document.querySelector(listaProdutos);
    this.navegacao = document.querySelector(navegacao);

    this.titulo = document.querySelector(titulo);
    this.link = document.querySelector(link);
    this.detalhes = document.querySelector(detalhes);
    this.techs = document.querySelector(techs);
    this.dados = dados;

    this.botaoVisitar = document.querySelector(botaoVisitar);
    this.botaoRepositorio = document.querySelector(botaoRepositorio);

    this.slides = this.getListaSlides();
    this.indicadores = this.getListaIndicadores();

    setTimeout(() => {      
      this.tamanhoSlide = this.getTamanhoSlide();
  
      this.indiceDoSlideAtual = 0;
  
      this.proximo.addEventListener("click", this.proximoSlide.bind(this));
      this.anterior.addEventListener("click", this.slideAnterior.bind(this));
  
      this.navegacao.addEventListener("click", this.pularParaSlide.bind(this));
  
      this.preparaSlides();
      this.renderizarDescricao();
    }, 1000)
  }

  getListaSlides() {
    return Array.from(this.listaProdutos.children);
  }

  getListaIndicadores() {
    return Array.from(this.navegacao.children);
  }

  getTamanhoSlide() {
    return this.slides[0].offsetWidth !== 0
      ? this.slides[0].offsetWidth
      : this.slides[0].getBoundingClientRect().width;
  }

  getSlideAtual() {
    return this.slides[this.indiceDoSlideAtual];
  }

  proximoSlide() {
    let proximaPosicao = this.indiceDoSlideAtual + 1;
    if (proximaPosicao > this.slides.length - 1) {
      proximaPosicao = 0;
    }

    this.vaParaSlide(proximaPosicao);
  }

  slideAnterior() {
    let posicaoAnterior = this.indiceDoSlideAtual - 1;
    if (posicaoAnterior < 0) {
      posicaoAnterior = this.slides.length - 1;
    }

    this.vaParaSlide(posicaoAnterior);
  }

  getIndiceAtual() {
    return this.indicadores[this.indiceDoSlideAtual];
  }

  vaParaSlide(posicao) {
    const indicadorAtual = this.getIndiceAtual();
    this.indiceDoSlideAtual = posicao;
    const indicadorSelecionado = this.getIndiceAtual();

    this.scrollParaSlide(this.getSlideAtual());
    this.atualizaIndicadores(indicadorAtual, indicadorSelecionado);

    this.renderizarDescricao();
  }

  scrollParaSlide(slideSelecionado) {
    this.listaProdutos.style.transform =
      "translateX(-" + slideSelecionado.style.left + ")";
  }

  atualizaIndicadores(indicadorAtual, indicadorSelecionado) {
    indicadorAtual.classList.remove("carousel__indicador--ativo");
    indicadorSelecionado.classList.add("carousel__indicador--ativo");
  }

  pularParaSlide(evento) {
    if (evento.target === evento.currentTarget) return;

    const indicadorSelecionado = evento.target.getAttribute("data-indicador");
    this.vaParaSlide(parseInt(indicadorSelecionado));
  }

  preparaSlides() {
    if (this.tamanhoSlide != 0) {
      this.slides.forEach((slide, i) => {
        slide.style.left = this.tamanhoSlide * i + "px";
      });
    } else {
      this.tamanhoSlide = this.getTamanhoSlide();
      document.location.reload()
    }
  }

  renderizarDescricao() {
    let i = this.indiceDoSlideAtual;
    let linkProjeto = this.dados.projetos[i].link;
    let linkRepositorio = this.dados.projetos[i].repositorio;

    this.titulo.innerText = this.dados.projetos[i].titulo;
    this.link.innerText = linkProjeto;
    this.link.setAttribute("href", linkProjeto);
    this.detalhes.innerText = this.dados.projetos[i].detalhes;

    this.carregarTechs(this.techs, i);

    this.botaoVisitar.setAttribute(
      "onclick",
      `window.open('${linkProjeto}', '_blank');`
    );
    this.botaoRepositorio.setAttribute(
      "onclick",
      `window.open('${linkRepositorio}', '_blank');`
    );
  }

  carregarTechs(techs, i) {
    // Techs do projeto atual
    const techsProject = this.dados.projetos[i].techs;
    // Todas as techs
    const techCollection = techs.children;
    const techList = [...techCollection];

    techList.forEach((tech) => {
        const techTitle = tech.getAttribute('title');
        tech.classList.add("projetos__techs--disabled");

        if (techsProject.includes(techTitle)) {
            tech.classList.remove("projetos__techs--disabled");
        } 
    });

  }
}
