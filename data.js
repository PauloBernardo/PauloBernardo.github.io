// ==== EDITE AQUI: todo o conteúdo do portfólio ====
const DATA = {
  nome: "Paulo Ricardo Bernardo Silva",
  foto: "assets/foto.jpg",
  cargo: "Desenvolvedor Full Stack · Big Data & Tempo Real · Pesquisador em IA",
  resumo:
    "Engenheiro de Computação pelo IFCE e mestrando em Engenharia de Telecomunicações (IFCE). " +
    "Atuo principalmente com front-end em Angular e também com back-end em Java, Python e Node.js. " +
    "Hoje trabalho em sistemas de big data e de envio em tempo real com Solr e Kafka.",
  links: {
    email: "paulobernardo06@gmail.com",
    github: "https://github.com/PauloBernardo",
    linkedin: "https://www.linkedin.com/in/paulo-bernardo-398225156",
    cv: "" // ex: "assets/cv.pdf"
  },
  empresa: {
    nome: "PRB Desenvolvimento de Software",
    razao: "Paulo Ricardo Bernardo Silva Desenvolvimento de Software LTDA",
    cnpj: "66.626.749/0001-57",
    desde: "2026"
  },
  skills: {
    "Front-end": ["Angular", "TypeScript", "RxJS", "HTML/CSS"],
    "Back-end": ["Java", "Spring Boot", "Python", "Node.js", "APIs REST"],
    "Dados & Streaming": ["Apache Kafka", "Apache Solr", "Big Data", "Tempo real"],
    "IA & Pesquisa": ["Machine Learning", "LSSVM", "Transformers", "HDBSCAN", "Modelos Bayesianos"],
    "Mobile & Automação": ["React Native", "Web Scraping", "RPA"]
  },
  idiomas: [
    { idioma: "Inglês", nivel: "B1 (Intermediário)", inst: "Casa de Cultura Britânica · UFC", ano: "2022" },
    { idioma: "Português", nivel: "Nativo" }
  ],
  formacao: [
    { titulo: "Mestrado em Engenharia de Telecomunicações", inst: "IFCE", periodo: "Em andamento" },
    { titulo: "Bacharelado em Engenharia da Computação", inst: "IFCE", periodo: "Concluído" }
  ],
  // Linha do tempo profissional (mais recente primeiro)
  experiencia: [
    {
      cargo: "Fundador & Desenvolvedor Full Stack",
      org: "PRB Desenvolvimento de Software",
      periodo: "2026 – atual",
      resumo: "Desenvolvimento de plataformas de pesquisa e inteligência sobre grandes volumes de dados de segurança, com dados vindos de cercamento eletrônico, leitura de placas, reconhecimento facial e biometria.",
      destaques: [
        "Ferramentas de pesquisa e inteligência para cruzar e consultar dados de cercamento eletrônico, leitura de placas (LPR), reconhecimento facial e biometria",
        "Indexação e busca em grande escala com Apache Solr",
        "Ingestão e distribuição de eventos em tempo real com Apache Kafka",
        "Integração com sistemas governamentais",
        "Front-end em Angular e serviços back-end em Java"
      ],
      stack: ["Angular", "Java", "Kafka", "Solr", "Big Data", "Tempo real"]
    },
    {
      cargo: "Pesquisador / Desenvolvedor — PD&I",
      org: "Polo de Inovação IFCE · Unidade EMBRAPII",
      periodo: "2019 – 2026",
      resumo: "Pesquisa aplicada e desenvolvimento de soluções para a indústria no Programa de Formação de RH para PD&I.",
      destaques: [
        "IA para posicionamento de ambulâncias e viaturas: clusterização com HDBSCAN e um modelo bayesiano multidimensional sobre dados georreferenciados",
        "App mobile em React Native para rastreabilidade de produtos com blockchain",
        "Automação e extração de dados financeiros com web scraping e uma DSL própria baseada em grafos (RPA), que depois evoluiu para um app de conciliação entre adquirentes",
        "Monitor e instrutor substituto na Philips Academy, a capacitação em desenvolvimento web com a Philips"
      ],
      stack: ["Python", "Machine Learning", "HDBSCAN", "React Native", "Blockchain", "Web Scraping", "RPA"]
    },
    {
      cargo: "Bolsista de Pesquisa · Desenvolvedor Back-end",
      org: "IFCE · DNOCS",
      periodo: "2020 – 2022",
      resumo: "Projeto SmartDNOCS (TED nº 04/2020) com o Departamento Nacional de Obras Contra as Secas.",
      destaques: [
        "Construção da API REST em Java/Spring de um sistema para crises hídricas e enchentes, alimentado por dados de sensores e imagens"
      ],
      stack: ["Java", "Spring Boot", "API REST", "Sensores / IoT"]
    }
  ],
  // Pesquisa acadêmica (mestrado)
  pesquisa: {
    resumo: "No mestrado em Engenharia de Telecomunicações (IFCE), pesquiso aprendizado de máquina com foco em LSSVM (Least Squares Support Vector Machines) e Transformers: modelos esparsos e eficientes para rodar em dispositivos de borda, com opção de rejeição para decisões mais confiáveis.",
    orientador: "Prof. Dr. Ajalmar Rêgo da Rocha Neto",
    areas: ["LSSVM", "Transformers", "Aprendizado de Máquina", "Esparsidade", "Opção de Rejeição", "Edge AI", "Manutenção Preditiva"],
    publicacoes: [
      {
        titulo: "Sparse Least Square SVM in Primal via Nesterov Accelerated Alternating Directions Method of Multipliers",
        autores: "Felipe Marinho, Wellington de Almeida, Victor Santos, Paulo Ricardo Bernardo Silva, Ajalmar Neto",
        veiculo: "IWANN 2025 · Springer LNCS 16008, pp. 79–93",
        ano: "2025",
        resumo: "LSSVM esparso formulado no primal e resolvido com ADMM acelerado por Nesterov. Artigo revisado por pares e apresentado na 18th International Work-Conference on Artificial Neural Networks (A Coruña, Espanha).",
        tags: ["LSSVM", "ADMM", "Nesterov", "Esparsidade"],
        link: "https://doi.org/10.1007/978-3-032-02725-2_7"
      },
      {
        titulo: "SR-LSSVM: Classificador de Mínimos Quadrados Esparso com Opção de Rejeição Aplicado à Manutenção Preditiva Industrial",
        autores: "Paulo Ricardo Bernardo Silva, Ajalmar Rocha Neto",
        veiculo: "XXVI Congresso Brasileiro de Automática (CBA) · Preprint",
        ano: "2026",
        resumo: "Propõe o SR-LSSVM, que adiciona esparsificação L1 (LASSO) e opção de rejeição ao LSSVM para uso em dispositivos de borda e CLPs. Com o solver ADMM, reduz de 23% a 48% os vetores de suporte, e a opção de rejeição aumenta em até 6,6 p.p. a acurácia nos padrões aceitos (AI4I 2020 e UCI).",
        tags: ["LSSVM", "ADMM", "FISTA", "Edge AI"],
        link: "https://ojs.sba.org.br/index.php/cba/article/view/6231"
      }
    ]
  },
  // Projetos de P&D (EMBRAPII, IFCE...)
  projetos: [
    {
      titulo: "Sistema Inteligente para Posicionamento de Ambulâncias e Viaturas",
      codigo: "PIFC-2409.0129",
      instituicao: "Polo de Inovação IFCE · EMBRAPII",
      periodo: "out/2024 – mar/2026",
      papel: "Pesquisador — Formação de RH para PD&I · 40h/mês",
      descricao: "Posicionamento inteligente de ambulâncias e viaturas a partir de dados georreferenciados de ocorrências, usando clusterização com HDBSCAN e um algoritmo bayesiano multidimensional com sobreposição para identificar regiões de demanda e reduzir o tempo de resposta.",
      stack: ["Python", "HDBSCAN", "Modelos Bayesianos", "Geoprocessamento", "Machine Learning"]
    },
    {
      titulo: "Philips Academy — Capacitação em Desenvolvimento Web",
      codigo: "Edital 1/2022 PEIF-CE",
      instituicao: "Polo de Inovação IFCE · EMBRAPII",
      periodo: "set/2022 – ago/2023",
      papel: "Monitor / Instrutor substituto",
      descricao: "Programa de capacitação em desenvolvimento web feito em parceria com a Philips. Atuei como monitor e instrutor substituto: apoiei os alunos, tirei dúvidas e ministrei aulas.",
      stack: ["Desenvolvimento Web", "Ensino", "Mentoria"]
    },
    {
      titulo: "Rastreabilidade de Produtos e Agrupamentos baseada em Blockchain",
      codigo: "PIFC-1911.0056",
      instituicao: "Polo de Inovação IFCE · EMBRAPII",
      periodo: "nov/2020 – jan/2022",
      papel: "Pesquisador — Formação de RH para PD&I · 30h/mês",
      descricao: "Plataforma de rastreabilidade de produtos e lotes baseada em blockchain, para garantir a integridade e a auditabilidade do histórico. Atuei principalmente no desenvolvimento do aplicativo mobile em React Native.",
      stack: ["React Native", "Blockchain", "Mobile"]
    },
    {
      titulo: "SmartDNOCS — Sistema de Monitoramento do DNOCS",
      codigo: "TED DNOCS nº 04/2020",
      instituicao: "IFCE · DNOCS",
      periodo: "jan/2020 – dez/2022",
      papel: "Bolsista de pesquisa · Desenvolvedor back-end",
      descricao: "Sistema para apoiar a resposta a crises hídricas e enchentes a partir de dados de sensores, imagens e outras fontes, com uma etapa extensa de levantamento de requisitos. Fui responsável pela construção da API REST em Java com Spring.",
      stack: ["Java", "Spring Boot", "API REST", "Sensores / IoT", "Levantamento de requisitos"]
    },
    {
      titulo: "Overhead — Extração Automática de Dados Web para Conciliação",
      codigo: "PIFC-1906.0050",
      instituicao: "Polo de Inovação IFCE · EMBRAPII",
      periodo: "jul/2019 – nov/2020",
      papel: "Pesquisador — Formação de RH para PD&I · 80h/mês",
      descricao: "Plataforma em nuvem para automatizar a extração de dados de instituições financeiras, com web scraping, acesso automatizado e uma linguagem própria baseada em grafos (fluxos de ações), no estilo das ferramentas de RPA. Depois evoluiu para um aplicativo mobile que reúne os dados de clientes com contas em diversas adquirentes (Cielo etc.) para conciliação.",
      stack: ["Web Scraping", "RPA", "DSL baseada em grafos", "Cloud", "Mobile"]
    }
  ]
};
