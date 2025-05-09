// Dados dos cards de Sobre
const sobreInfos = [
  `
  <h2>Atividades Extracurriculares e Liderança Acadêmica</h2>
  <ul>
    <li>Vice-presidente | Diretório Acadêmico| julho de 2024 - presente</li>
    <li>Orientanda de Iniciação Científica | Laboratório de Física Óptica e Aplicações FATEC 
      Itaquera | janeiro de 2023 a dezembro de 2024</li>
    <li>Representante do corpo discente | FATEC Itaquera | janeiro de 2023 a dezembro de 2024</li>
    <li>Representante de turma | FATEC Itaquera | setembro de 2023 a dezembro de 2024</li>
    <li>Vice-representante de turma | FATEC Itaquera | janeiro de 2023 a setembro de 2023</li>
  </ul>

  <h3>Diretório Acadêmico</h3>
  <p>Cargo: Vice-presidente</p>
  <p>Atividades: Atuo no auxílio e substituição das atribuições do Presidente do Diretório Acadêmico da 
  FATEC Itaquera. Responsável pela organização e auxílio na condução de eventos realizados 
  pelo Diretório. Participação em eventos para a tomada de decisões e reivindicações dos 
  estudantes — exemplo Bienal da UNE e Conselho das Autoridades de Base que ocorreu no 
  Recife em fevereiro de 2025.</p>

  <h3>Laboratório de Óptica e Aplicações da FATEC Itaquera</h3>
  <p>Cargo: Orientanda de Iniciação Científica</p>
  <p>Atividades: Trabalhei no laboratório de Óptica e Aplicações da FATEC Itaquera, na condução de pesquisa 
  na área de Fotoelasticidade; desenvolvimento de algoritmos e implementação de sistema 
  para análise computacional de dados vídeo; na condução e auxílio de experimentos com as 
  configurações experimentais Polariscópio Linear e Padrão de Interferência Speckle. Atuei 
  como oradora na apresentação de trabalhos de pesquisa em simpósios e congressos 
  acadêmicos. Trabalhei na organização dos trabalhos apresentados na Semana Acadêmica da 
  Fatec Itaquera de 2023.</p>

  <h3>Congregação Fatec Itaquera</h3>
  <p>Cargo: Representante Suplente do Corpo Discente</p>
  <p>Atividades: Participante ativo, como representante do corpo discente na congregação da FATEC Itaquera - 
  órgão de autoridade máxima da faculdade - em reuniões para a decisão das pautas de interesse e 
  demanda das atividades/ações da Faculdade. </p>

  <h3>Repesentação de Turma</h3>
  <p>Cargo: Representante de turma | DSM Curso de Deselvonvimento de Software Multiplataforma | FATEC Itaquera</p>
  <p>Atividades: Atuei na organização e comunicação - entre professores e alunos - referentes a atividades de aula 
  e extracurriculares. Responsável pela comunicação entre a Coordenação de Graduação, Diretoria 
  de Graduação e membros discentes da classe de graduação; pela organização das reuniões entre 
  os diversos representantes do curso de graduação Desenvolvimento de Softwares Multiplataforma 
  e a Direção/Coordenação de Graduação.</p>
  <p>Cargo: Vice-representante de turma | DSM Curso de Deselvonvimento de Software Multiplataforma | FATEC Itaquera </p>
  <p>Atividades: Atuei no auxílio e substituição das atribuições do representante de turma. Responsável pela 
  comunicação entre a Coordenação de Graduação, professores, Diretoria de Graduação e 
  membros discentes da classe de graduação.</p>
  `,
  `
  <h2>Cursos de Extensão</h2>
  <h3>Fundamentos da Física Óptica I</h3>
  <p>Disciplina de Extensão | FATEC Itaquera | Laboratório de Física Óptica e Aplicações</p>
  <p>80 horas |  Presencial</p>
  <p>De março a julho de 2024</p>
  <h3>Fundamentos da Teoria dos Erros Aplicada à Ciência e Tecnologia</h3>
  <p>Disciplina de Extensão | FATEC Itaquera | Laboratório de Física Óptica e Aplicações</p>
  <p>72 horas |  Presencial</p>
  <p>De fevereiro a junho de 2023</p>
  <h3>Fundamentos da Teoria dos Erros Aplicada à Ciência e Tecnologia II</h3>
  <p>Disciplina de Extensão | FATEC Itaquera | Laboratório de Física Óptica e Aplicações</p>
  <p>72 horas |  Presencial</p>
  <p>De setembro a dezembro de 2023</p>
  <h3>Competência Transversal | Lógica de Programação</h3>
  <p>Curso de Extensão | SENAI São Paulo</p>
  <p>14 horas |  Secretaria de Educação Online</p>
  `,
  `
  <h2>Idiomas</h2>
  <ul>
    <li>Português | Nativo</li>
    <li>Inglês | Intermediário | Nível B1</li>
    <li>Francês | Básico</li>
  </ul>
  <h3>Inglês</h3>
  <p>Curso de Extensão | NELF FATEC Itaquera</p>
  <p>Módulo 1, 2, 3 e 4 | 160 horas |  Presencial</p>
  <p>Janeiro de 2023 a Dezembro de 2024</p>
  <h3>Certificações</h3>
  <p><strong>TOEIC:</strong> espaço reservado para resultado/descrição ou data prevista.</p>
  <h3>Francês</h3>
  <p>Curso de Extensão | NELF FATEC Itaquera</p>
  <p>Módulo 1 | 40 horas |  Online</p>
  <p>Janeiro de 2025 a presente data (em andamento)</p>
  `
];

// Seleciona cards de sobre
const sobreCards = document.querySelectorAll(".sobre-card");

sobreCards.forEach(card => {
  card.addEventListener("click", () => {
    const idx = card.dataset.index;
    modalBody.innerHTML = sobreInfos[idx];
    modal.style.display = "block";
  });
});

// Seleção de elementos
const imagens = document.querySelectorAll(".carousel img");
const descricao = document.getElementById("descricao");
const botoes = document.querySelectorAll(".buttons button");
const modal = document.getElementById("eventoModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");

// Textos descritivos dos eventos
const textos = [
  "Descrição do Evento 1: Bienal da UNE.",
  "Descrição do Evento 2: Jornada Acadêmica Fatec Itaquera.",
  "Descrição do Evento 3: Recepção de Calouros 2024/2.",
  "Descrição do Evento 4: Participação no Diretório Acadêmico.",
  "Descrição do Evento 5: Simpósio Fatec-SP."
];

// Controle de índice atual
let atual = 0;

// Função para atualizar carrossel e botões
function atualizarCarrossel(index) {
  imagens.forEach(img => img.classList.remove("active"));
  imagens[index].classList.add("active");

  descricao.innerText = textos[index];

  botoes.forEach(btn => btn.classList.remove("active"));
  botoes[index].classList.add("active");

  atual = index;
}

// Inicializar carrossel
if (imagens.length > 0) {
  atualizarCarrossel(0);

  // Troca automática a cada 4 segundos
  setInterval(() => {
    let proximo = (atual + 1) % imagens.length;
    atualizarCarrossel(proximo);
  }, 4000);
}

// Eventos de clique nos botões de controle
botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    atualizarCarrossel(parseInt(btn.dataset.index));
  });
});

// Evento de clique nas imagens do carrossel para abrir modal
imagens.forEach(img => {
  img.addEventListener("click", () => {
    const idx = img.dataset.index;

    modalBody.innerHTML = `
      <h2>${textos[idx]}</h2>
      <img src="${img.src}" style="width:100%; border-radius:5px; margin-top:15px;">
      <p>Informações detalhadas sobre o evento ${parseInt(idx) + 1} podem ser adicionadas aqui.</p>
    `;

    modal.style.display = "block";
  });
});

// Fechar modal
closeModal.onclick = () => modal.style.display = "none";

// Fechar modal ao clicar fora da área de conteúdo
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// Modal Design
const designCards = document.querySelectorAll(".design-card");
const designModal = document.getElementById("designModal");
const designModalBody = document.getElementById("designModalBody");
const closeDesignModal = designModal.querySelector(".close");

const designInfos = [
  {
    title: "Dupla Exposição",
    description: "Projeto de manipulação de imagem, unindo duas fotografias em uma composição criativa, explorando sobreposição de elementos e contraste de cores.",
    image: "src/imagens/designDigital/duplaExposição/DuplaExposicaoPatricia.png"
  },
  {
    title: "Campanha Motivacional",
    description: "Criação de peças gráficas motivacionais para redes sociais, com foco em mensagens de incentivo e valorização pessoal.",
    image: "src/imagens/designDigital/campanhas/CampanhaMotivacionalPatricia.png"
  },
  {
    title: "Logo Identidade Pessoal",
    description: "Desenvolvimento de logo minimalista para identidade visual pessoal, utilizando paleta de cores neutras e formas simplificadas.",
    image: "src/imagens/designDigital/logos/logo_CoresEscolha_S86.svg"
  },
  {
    title: "Gif Comercial",
    description: "Animação de um GIF publicitário para divulgação do turismo ecologico brasileiro em redes sociais e canais promocionais.",
    image: "src/imagens/designDigital/campanhas/GifComercial_3S.gif"
  },
  {
    title: "Mockup Site Fatec",
    description: "Modelo visual de interface para site institucional da FATEC, propondo melhorias de layout, responsividade e acessibilidade.",
    image: "src/imagens/designDigital/mockups/siteFate.png"
  },
  {
    title: "Projeto UX",
    description: "Desenvolvimento de projeto de Experiência do Usuário (UX), com foco em jornada do usuário e prototipação de interface interativa.",
    image: "src/imagens/designDigital/projetoFinalDeExperienciaDoUsuario/projetoFinalUX.jpg"
  }
];

// Evento para abrir o modal
designCards.forEach(card => {
  card.addEventListener("click", () => {
    const index = card.getAttribute("data-index");
    const info = designInfos[index];
    designModalBody.innerHTML = `
      <h2>${info.title}</h2>
      <p>${info.description}</p>
      <img src="${info.image}" style="width:100%; margin-top:15px; border-radius:5px;">
    `;
    designModal.style.display = "block";
  });
});

// Evento para fechar o modal
closeDesignModal.onclick = () => {
  designModal.style.display = "none";
};

window.addEventListener("click", (event) => {
  if (event.target === designModal) {
    designModal.style.display = "none";
  }
});