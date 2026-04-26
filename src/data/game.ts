export interface AllocationArea {
  id: string;
  name: string;
  min: number;
  max: number;
  step: number;
}

export type ScenarioType = "choice" | "allocation";

export interface Scenario {
  id: number;
  title: string;
  role: string;
  intro: string;
  type: ScenarioType;
  dilemma: string;
  
  // Nomes para o Mapa
  buildingName: string;
  mapX: number; // 0 a 100
  mapY: number; // 0 a 100
  iconName: string;
  
  // NPC de Diálogo
  npcName: string;
  npcAvatar: string;
  nextLevelHint: string;
  
  options?: {
    text: string;
    impact: { budget: number, reputation: number };
    feedback: string;
  }[];

  allocationTask?: {
    totalBudget: number;
    unit: string;
    areas: AllocationArea[];
    evaluate: (allocations: Record<string, number>) => {
      success: boolean;
      feedback: string;
      impact: { budget: number; reputation: number };
    };
  };

  quiz: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
    topic: string;
  };
}

export interface GameState {
  level: number;
  budget: number; // 0 to 100
  reputation: number; // 0 to 100
  casesCompleted: number;
  log: string[];
  mistakesByLevel: { level: number, topic: string, count: number }[];
  activeBuildingId?: number; // Para navegação do bonequinho
}

export const getGameScenarios = (playerName: string = "Você"): Scenario[] => {
  const name = playerName.trim() || "Você";
  return [
  {
    id: 1,
    title: "Nível 1: Estoque Vazio!",
    role: "Técnico Administrativo",
    buildingName: "Almoxarifado Geral",
    mapX: 15,
    mapY: 85,
    iconName: "PackageOpen",
    npcName: "Chefe Jorge",
    npcAvatar: "👨‍🔧",
    nextLevelHint: `Muito bem, ${name}! Agora vá para o Prédio de TI, eles estão com um edital urgente travando nossa rede.`,
    intro: `O início da sua jornada na Goyases! ${name}, como técnico recém-concursado da Universidade, seu primeiro desafio apareceu. A papelaria do campus zerou nas vésperas das provas finais.`,
    type: "choice",
    dilemma: "A coordenação mandou 'comprar rápido e de qualquer jeito'. Vocês têm R$ 40 mil livres na rubrica local.",
    options: [
      {
        text: "Comprar imediatamente avulso, via Dispensa de Licitação, fragmentando em notas menores para ser rápido.",
        impact: { budget: -10, reputation: -20 },
        feedback: "Erro Grosseiro! O TCE (Tribunal de Contas) detectou Fracionamento Ilegal de Despesa. A reitoria sofreu sanção."
      },
      {
        text: "Pesquisar uma Ata de Registro de Preços (SRP) nacional para adesão rápida.",
        impact: { budget: +5, reputation: +15 },
        feedback: "Excelente! Você aderiu a uma ata de SRP economizando recursos e respeitando a Lei 14.133."
      }
    ],
    quiz: {
      question: "Qual mecanismo permite comprar de forma parcelada, ao longo do ano, garantindo um preço fixo sem novo pregão?",
      options: ["Suprimento de Fundos", "Inexigibilidade", "SRP (Sistema de Registro de Preços)", "Matriz OCC"],
      answer: 2,
      explanation: "O Registro de Preços firma a promessa de preço por até 1 ano. Útil contra a inflação.",
      topic: "Licitações e Compras"
    }
  },
  {
    id: 2,
    title: "Nível 2: Inovando a Gestão",
    role: "Técnico de Planejamento",
    buildingName: "Prédio de TI (DTI)",
    mapX: 35,
    mapY: 70,
    iconName: "MonitorCog",
    npcName: "Diretora Ana",
    npcAvatar: "👩‍💼",
    nextLevelHint: "Sua habilidade chamou a atenção! A Coordenação Administrativa chamou você para cuidar do orçamento da Faculdade.",
    intro: "A Reitoria quer implantar catracas modernas de biometria para toda a universidade. Ninguém sabe qual marca ou tecnologia é viável.",
    type: "choice",
    dilemma: "O setor de TI pediu para 'recomendar a marca X no edital, pois ela é a melhor do mercado'. O que você elabora?",
    options: [
      {
        text: "Fazer um Termo de Referência (TR) fechando requisitos específicos e citando a Marca X por segurança.",
        impact: { budget: -5, reputation: -15 },
        feedback: "Auditoria reprovou o edital! Direcionamento de marca fere a isonomia. A compra foi travada."
      },
      {
        text: "Criar um Estudo Técnico Preliminar (ETP) comparando Custo Total de Vida de diferentes soluções (alugar vs comprar).",
        impact: { budget: +15, reputation: +20 },
        feedback: "Inovador! O ETP demonstrou que ALUGAR as catracas é mais barato e com risco de quebra zero."
      }
    ],
    quiz: {
      question: "O Estudo Técnico Preliminar (ETP) deve analisar não apenas o valor do bem físico, mas de preferência...",
      options: ["O CNPJ do fornecedor", "Apenas o ano de fabricação", "O Custo de Ciclo de Vida (manutenção, instalação e energia)", "Qual conta o Banco usará"],
      answer: 2,
      explanation: "O ETP foca no 'life cycle cost'. As peças de manutenção não podem ser ignoradas perante a compra inicial.",
      topic: "Licitações e Compras"
    }
  },
  {
    id: 3,
    title: "Nível 3: Orçamento Limitado",
    role: "Coordenador Financeiro",
    buildingName: "Coord. Administrativa",
    mapX: 65,
    mapY: 80,
    iconName: "PiggyBank",
    npcName: "Prof. Marcos",
    npcAvatar: "🧔‍♂️",
    nextLevelHint: "Você equilibrou bem as contas! O Diretor da Faculdade de Gestão agora quer discutir uma ideia sobre Pós-Graduação.",
    intro: `Grande progresso! ${name}, você foi promovido(a) a Coordenador(a)! No novo semestre, o orçamento livre da sua Faculdade é de R$ 100 Mil. A cobrança sobre você agora é sistêmica.`,
    type: "allocation",
    dilemma: "Distribua exatamente R$ 100 Mil mantendo equilíbrio. Dica: Laboratórios e a Assistência nunca devem ser ignorados ($0) em uma universidade.",
    allocationTask: {
      totalBudget: 100,
      unit: "k",
      areas: [
        { id: "assistencia", name: "Bolsas de Assistência Estudantil", min: 0, max: 100, step: 5 },
        { id: "laboratorios", name: "Insumos e Manutenção dos Labs", min: 0, max: 100, step: 5 },
        { id: "manutencao", name: "Serviços Essenciais (Limpeza, Luz)", min: 0, max: 100, step: 5 },
      ],
      evaluate: (allocs) => {
        const bolsas = allocs['assistencia'] || 0;
        const labs = allocs['laboratorios'] || 0;
        const manut = allocs['manutencao'] || 0;
        
        if (bolsas === 0) return { success: false, feedback: "Zero para bolsas?! Estudantes ocuparam a Reitoria e o campus parou. Crise imediata!", impact: { budget: 0, reputation: -40 } };
        if (labs === 0) return { success: false, feedback: "Laboratórios sem verba nenhuma! Pesquisas param e a inovação some da sua faculdade.", impact: { budget: 0, reputation: -30 } };
        if (manut < 30) return { success: false, feedback: "Cortou demais a manutenção essencial? A luz acabou no meio das aulas da noite e tudo escureceu!", impact: { budget: -20, reputation: -30 } };
        
        if (bolsas > 60 && labs < 20) return { success: true, feedback: "O social brilhou, mas os laboratórios ficaram minguados, afetando a qualidade teórica dos cursos e frustrando pesquisadores.", impact: { budget: +5, reputation: -10 } };
        if (labs > 60 && bolsas < 20) return { success: true, feedback: "Você comprou equipamentos incríveis para a pesquisa! Porém, muitos estudantes de baixa renda trancaram curso para poder trabalhar.", impact: { budget: +5, reputation: -10 } };
        
        if (bolsas >= 30 && labs >= 30 && manut >= 30) return { success: true, feedback: "O Equilíbrio Dourado! Assistência justa, pesquisa rodando e contas básicas no azul. Gestão exemplar!", impact: { budget: +20, reputation: +30 } };
        
        if (manut > 60) return { success: true, feedback: "Campus brilhando nas faxinas e sobrou luz, mas foi um conservadorismo excessivo. Faltou ousar nas bolsas ou labs.", impact: { budget: -5, reputation: -5 } };
        
        if (bolsas === labs && bolsas >= 25 && manut >= 25) return { success: true, feedback: "Caminho bem balizado. Empatou ensino e suporte, agradando quase todos os departamentos igualmente.", impact: { budget: +10, reputation: +20 } };

        if (bolsas > labs && manut >= 30) return { success: true, feedback: "Geração de amplo impacto social! A comunidade se sentiu bem acolhida pelas suas pautas de segurança financeira.", impact: { budget: +10, reputation: +25 } };
        
        return { success: true, feedback: "Apesar das críticas pontuais, a faculdade prossegue um pouco arrastada. Suas escolhas sobreviveram.", impact: { budget: -5, reputation: +5 } };
      }
    },
    quiz: {
      question: "Qual o princípio da Administração Pública que exige ratear o dinheiro sem favorecimento político injustificável?",
      options: ["Autonomia Didática", "Impessoalidade", "Lei de Cotas", "Indissociabilidade"],
      answer: 1,
      explanation: "A Impessoalidade (Art 37, CF) veda qualquer ação de cunho privado ou favoritismo perante recursos impessoais.",
      topic: "Princípios Constitucionais"
    }
  },
  {
    id: 4,
    title: "Nível 4: Custos sob a Lupa",
    role: "Diretor da Faculdade",
    buildingName: "Faculdade de Gestão",
    mapX: 85,
    mapY: 60,
    iconName: "BriefcaseBusiness",
    npcName: "Diretor Rubens",
    npcAvatar: "👨‍🏫",
    nextLevelHint: "Sucesso contábil! O Pró-Reitor de Extensão na Fundação de Apoio precisa de suas luzes para um convênio gigante.",
    intro: `Com seu carisma gestacional ascendente, você assumiu uma diretoria! Empresas sugeriram uma 'Pós-graduação noturna' nas dependências da universidade.`,
    type: "choice",
    dilemma: "Professores já são pagos pelo Tesouro mensalmente (Gastos Fixos). A nova pós renderá R$ 30 mil e gastará apenas R$ 5 mil variados (coffee-break/adicionais). Abri-la ou não?",
    options: [
      {
        text: "Usar Custeio por Absorção, rateando os altos custos totais originais de professores sobre a nova turma, inviabilizando-a. (Não Abrir)",
        impact: { budget: -5, reputation: -10 },
        feedback: "Erro. Você perdeu uma excelente arrecadação utilizando engessamento incorreto para decisões extra-ordinárias de curto prazo."
      },
      {
        text: "Usar Custeio Variável. Constatar que a nova turma cria 'Margem de Contribuição' de R$ 25k para o departamento gerando saldos extras.",
        impact: { budget: +20, reputation: +20 },
        feedback: "Cirúrgico! Na análise rápida e viabilidade de novas frentes ociosas, considerar a margem de contribuição extra é brilhante."
      }
    ],
    quiz: {
      question: "No método do Custeio Variável, o que compõe a conta essencial para avaliar o lucro de expansões pontuais no setor?",
      options: ["Receita menos Custos Indiretos de Rateio de Folha.", "A 'Despesa Administrativa Predial'.", "Receita menos os Custos Variáveis Incrementais necessários.", "A Depreciação pura do parque de informática."],
      answer: 2,
      explanation: "Receita (R$) menos o Custo Variável exclusivo da oportunidade apura exatamente a 'Margem de Contribuição'.",
      topic: "Custos no Setor Público"
    }
  },
  {
    id: 5,
    title: "Nível 5: Delegação na Fundação",
    role: "Pró-Reitor de Extensão",
    buildingName: "Fundação de Apoio",
    mapX: 50,
    mapY: 50,
    iconName: "FlaskConical",
    npcName: "Pesquisadora Lúcia",
    npcAvatar: "👩‍🔬",
    nextLevelHint: "A vacina foi salva e o dinheiro acelerou as patentes! Mas uma crise orçamentária macro atingiu o Prédio de Operações agora!",
    intro: `O Reitor enxergou seu potencial! ${name}, parabéns pelo novo cargo de Pró-Reitor. Um laboratório da IES desenvolveu uma vacina! Uma multinacional quer investir R$ 2 Milhões para testes em campo longo.`,
    type: "choice",
    dilemma: "Colocar R$ 2 Milhões na Conta Única do Estado vai congelar o projeto nas lentas filas de suprimentos oficiais. Como gerir este convênio privado?",
    options: [
      {
        text: "Assinar convênio rígido e jogar a verba na tesouraria estadual, exigindo que o pesquisador siga licitações normais.",
        impact: { budget: -15, reputation: -25 },
        feedback: "Burocracia letal! A multinacional cancelou a pesquisa pois a agilidade comercial sumiu nos longos editais do estado."
      },
      {
        text: "Delegar o gerenciamento financeiro do contrato para a Fundação de Apoio ligada à universidade, sob regulamentos mais enxutos.",
        impact: { budget: +25, reputation: +15 },
        feedback: "Isso é liderança estratégica moderna! A fundação protegeu o recurso e viabilizou velocidade aos cientistas."
      }
    ],
    quiz: {
      question: "Fundações de Apoio (Lei 8.958/94) servem para:",
      options: ["Substituir o orçamento geral do MEC/Estado.", "Gerenciar estritamente projetos de pesquisa e ensino com maior agilidade comercial.", "Aprovar Leis Diretrizes anuais (LDO).", "Contratar professores estáveis sem concurso público final."],
      answer: 1,
      explanation: "Elas dão dinâmica e fluidez a parcerias privadas e públicas de PD&I, blindando o recurso da vala comum estatal.",
      topic: "Fundações de Apoio"
    }
  },
  {
    id: 6,
    title: "Nível 6: Crise de Repasses",
    role: "Pró-Reitor de Adm.",
    buildingName: "Prédio de Operações",
    mapX: 20,
    mapY: 35,
    iconName: "Zap",
    npcName: "Sec. Finanças",
    npcAvatar: "👨‍💻",
    nextLevelHint: "Você amortizou a crise, Pró-Reitor! Ainda com nuvens escuras no ano, corra para o Canteiro de Obras: As fortes chuvas de dezembro estragaram contratos vitais.",
    intro: "Metade do seu tempo agora é apagar incêndios macro. O Estado decretou forte CONTINGENCIAMENTO nas Despesas Livres. A sua Matriz orçamentária do mês caiu para cruéis R$ 75 Milhões.",
    type: "allocation",
    dilemma: "Havia R$ 120M planejados, sobraram só 75. Escolha cortes entre Serviços Básicos, Expansão de Obras ou o Restaurante Comunitário (Social).",
    allocationTask: {
        totalBudget: 75,
        unit: "Mi",
        areas: [
            { id: "energia", name: "Faturas Inflexíveis (Água, Energia, Internet)", min: 0, max: 75, step: 5 },
            { id: "obras", name: "Obras Novos Prédios de Engenharia", min: 0, max: 75, step: 5 },
            { id: "social", name: "Apoio Indigência e Restaurante Universitário", min: 0, max: 75, step: 5 },
        ],
        evaluate: (allocs) => {
            const contas = allocs['energia'] || 0;
            const obras = allocs['obras'] || 0;
            const ru = allocs['social'] || 0;
            
            if (contas === 0) return { success: false, feedback: "A Companhia interveio e cortou a Luz da instituição globalmente! Servidores em desespero e alunos no escuro, game over.", impact: { budget: -30, reputation: -40 } };
            if (ru === 0) return { success: false, feedback: "O Restaurante fechou! Os estudantes fecharam a rodovia num protesto imenso e exigiram sua renúncia antecipada do cargo.", impact: { budget: -10, reputation: -40 } };
            
            if (obras >= 50) return { success: false, feedback: "Manter obras a todo custo num pico de crise cortou a luz dos diretores e tirou o almoço dos alunos. Fiasco tático.", impact: { budget: -20, reputation: -30 } };
            
            if (contas >= 40 && ru >= 25 && obras <= 10) return { success: true, feedback: "Você trancou as obras dos engenheiros para salvar o oxigênio principal da IES (luz e comida). O básico heroicamente salvo!", impact: { budget: +15, reputation: +20 } };
            if (ru >= 45 && contas >= 20) return { success: true, feedback: "Cobertor muito puxado pro social; salvou os estudantes carentes com louvor, mas precisou racionar internet no campus sul.", impact: { budget: +5, reputation: +15 } };
            
            if (contas === 25 && ru === 25 && obras === 25) return { success: true, feedback: "O corte linear e exato castiga áreas de alta demanda do mesmo jeito que a de baixa. Fila da dor foi geral, mas a universidade girou trôpega.", impact: { budget: -5, reputation: +5 } };
            
            if (obras > ru && obras > contas) return { success: false, feedback: "A insistência expansionista drenou as faturas cruciais. Prédio novo inaugurado em meio à paralisação social.", impact: { budget: -20, reputation: -25 } };
            
            if (contas < 20) return { success: false, feedback: "Água fraca e quedas elétricas tornaram a presença nos laboratórios impossível. Uma economia que ruiu pontes de trabalho.", impact: { budget: -15, reputation: -20 } };
            
            if (ru < 15) return { success: true, feedback: "Filas astronômicas e falta de bandeja no RU geraram moções de repúdio nas Faculdades, mas o apagão de luz foi evitado.", impact: { budget: +5, reputation: -15 } };

            return { success: true, feedback: "Decisões amargas. A universidade cambaleou, mas sua articulação renegociando valores na boca do caixa aliviou a corda.", impact: { budget: +10, reputation: +10 } };
        }
    },
    quiz: {
      question: "A matriz usada geralmente em Federais e Estaduais, que baseia o fomento em indicadores como alunos equiparados e área chama-se:",
      options: ["PPA Quadrienal.", "Matriz OCC (Outros Custeios e Capital).", "Relatório Limite Prudencial.", "Conta de Depreciação Patrimonial."],
      answer: 1,
      explanation: "A matriz OCC distribui justiça e transparência nos repasses correntes em detrimento do antigo favorecimento isolado.",
      topic: "Orçamento Público"
    }
  },
  {
    id: 7,
    title: "Nível 7: Dezembro e as Chuvas",
    role: "Vice-Reitor(a)",
    buildingName: "Canteiro de Obras",
    mapX: 40,
    mapY: 20,
    iconName: "HardHat",
    npcName: "Eng. Pedro",
    npcAvatar: "👷‍♂️",
    nextLevelHint: "Excelente solução contábil! O TCE foi avisado e enviou os inspetores. Agora vá proteger a Instituição de retaliações.",
    intro: `Estamos na vice-reitoria! Dezembro chegou e as chuvas arrebentaram telhados centrais. A obra de contenção foi feita quase toda, mas faltou assinar as faturas pela Defesa Civil antes de 31/12.`,
    type: "choice",
    dilemma: "A Lei Orçamentária manda recolher dinheiro não liquidado na virada do ano. Engenheiros pedem para salvar R$ 500mil retidos.",
    options: [
      {
        text: "Pressionar e atestar no sistema a Nota Fiscal (Liquidação) como 100% pronta na fraude, fazendo o Pagamento hoje e salvando o caixa.",
        impact: { budget: -50, reputation: -50 },
        feedback: "Liquidação Falsa! As chuvas levaram as calhas mentirosas e o TCE achou a assinatura fraudada sua. Processo e dor de cabeça."
      },
      {
        text: "Inscrever as faturas verdadeiramente pendentes como 'Restos a Pagar Não Processados' travados na contabilidade legal do Exercício.",
        impact: { budget: +20, reputation: +30 },
        feedback: "Ação de Vice-Reitor exímio! O dinheiro é garantido num cofre contábil especial (Restos a Pagar) para janeiro, dentro e estrito à Lei."
      }
    ],
    quiz: {
      question: "Restos a Pagar (RAP) Processados e Não Processados se diferem de forma fulcral perante o segundo estágio das despesas públicas. Qual sua essência?",
      options: ["Processados são empenhados mas não faturados.", "Processados já atingiram a fase da Liquidação da mercadoria, pendendo só quitar fatura.", "Processados dependem apenas dos Empenhos Extraordinários.", "Não processos independem já de PPA legal e empenhos."],
      answer: 1,
      explanation: "A Liquidação materializa a distinção das duas modalidades.",
      topic: "Orçamento Público"
    }
  },
  {
    id: 8,
    title: "Nível 8: Auditoria Final",
    role: "Vice-Reitor(a)",
    buildingName: "Reitoria (Sede)",
    mapX: 85,
    mapY: 25,
    iconName: "ScrollText",
    npcName: "Inspetor Paulo",
    npcAvatar: "🕵️‍♂️",
    nextLevelHint: "A sua transparência cimentou a imagem impecável da Goyases. A chapa da situação pediu para você liderar as eleições! Vá ao evento final no Centro de Convivência.",
    intro: "O Tribunal de Contas (TCE) fez plantão na sua mesa. Como responsável interino da Reitoria devido a viagens, você responde às perguntas finais da gestão quadrienal.",
    type: "choice",
    dilemma: "Acharam inconsistência profunda: uma terceirizada apresentou notas com nomes de funcionários já demitidos ou fantasmas. Era um roubo claro.",
    options: [
      {
        text: "Imediatamente abrir uma Tomada de Contas Especial (TCE) documentada no sistema contra a empresa, notificando Ministério Público.",
        impact: { budget: +30, reputation: +40 },
        feedback: "Honestidade Ativa! Accountability de alto nível. Você acionou os alarmes oficiais jogando o dolo somente sobre a corporação criminosa."
      },
      {
        text: "Pagar uma pequena multa à surdina e romper o contrato 'amigavelmente', para esconder o problema da mídia sensacionalista.",
        impact: { budget: -90, reputation: -100 },
        feedback: "Omissão Solidária! Gestores que tapam o sol com a peneira perante indícios de desvio acabam responsabilizados em conjunto pela corte de contas."
      }
    ],
    quiz: {
      question: "Qual mecanismo de Auditoria tem como foco melhorar o fluxo interno dos processos, diminuindo filas e retrabalho (Os 3 'E's)?",
      options: ["Auditoria Penal de Risco", "Auditoria Operacional", "Tomada de Contas Especial (TCE)", "Auditoria de Conformidade"],
      answer: 1,
      explanation: "A Auditoria Operacional (Eficiência, Eficácia, Efetividade) foge da pura punição e tenta reestruturar garantias e gargalos preventivos.",
      topic: "Auditoria Governamental"
    }
  },
  {
    id: 9,
    title: "Nível 9: Feira das Profissões",
    role: "Candidato(a) a Reitor(a)",
    buildingName: "Centro de Convivência",
    mapX: 75,
    mapY: 45,
    iconName: "Tent",
    npcName: "Diretor Silvio",
    npcAvatar: "👨‍🎤",
    nextLevelHint: "Sua popularidade transcendeu as paredes de pedra. O debate final é no palco histórico da Biblioteca Central, o estopim...",
    intro: `Você declarou candidatura formal para a cadeira máxima! ${name}, no aquecimento da campanha, coordene a gigante Feira de Profissões de portas abertas.`,
    type: "choice",
    dilemma: "Uma verba robusta sobrou no fundo acadêmico de publicidade institucional. Como você engaja estudantes visitantes a enxergarem o brilho da IES publicamente?",
    options: [
      {
        text: "Pagar um cachê obsceno para um digital influencer fazer uma 'dancinha viral' vazia sem relacionar com ensino local.",
        impact: { budget: -30, reputation: -10 },
        feedback: "Falta de Interesse Público! Órgãos estatais não são empresas pop. A sociedade questionou a austeridade da publicidade gasta nisso."
      },
      {
        text: "Alocar os fundos numa megatenda imersiva onde os garotos operam braços robóticos e veem tubos de reação ao vivo.",
        impact: { budget: -15, reputation: +30 },
        feedback: "Inspiração Transformadora! A comunicação estatal respeitou a educação pública, aumentando as matrículas vestibularmente."
      }
    ],
    quiz: {
      question: "Gastos com ações festivas e promocionais em órgãos estatais (eventos) devem sempre atentar para o princípio da:",
      options: ["Lucratividade Máxima Comercial", "Sustentabilidade dos Cofres Internacionais", "Economicidade e Interesse Público", "Burocracia de Repetição"],
      answer: 2,
      explanation: "Ações de comunicação precisam justificar o 'interesse público educativo' que o Estado possui, sem desperdícios.",
      topic: "Princípios Constitucionais"
    }
  },
  {
    id: 10,
    title: "Nível 10: O Debate Supremo",
    role: "Candidato(a) a Reitor(a)",
    buildingName: "Biblioteca Central",
    mapX: 50,
    mapY: 15,
    iconName: "Landmark",
    npcName: "Líder Estudantil",
    npcAvatar: "👩‍🎓",
    nextLevelHint: "Foi declarada a apuração! Todas as urnas abertas apontam para a sua consagração e um mandato histórico! Vá pra festa das vestes talares!",
    intro: `A Biblioteca arde de calor humano! ${name}, esse é a sabatina onde Diretores, Pesquisadores e o Corpo Estudantil te olham e julgam seu legado e futuro.`,
    type: "choice",
    dilemma: "Lideranças sindicais perguntam incisivas: 'Você garante para os próximos dez anos o aumento de benefícios irrestrito aos laboratórios periféricos?'",
    options: [
      {
        text: "Prometer firmemente gastos recorrentes e novos prédios vitalícios, independente dos humores dos orçamentos futuros estaduais.",
        impact: { budget: -90, reputation: -60 },
        feedback: "Vexatória Ilusão. Você caiu na demagogia irrestrita e ofendeu os técnicos maduros da Reitoria. Você perdeu no debate moral."
      },
      {
        text: "Explicar que todo avanço futuro precisará atestar a LDO/LOA, prometendo gestão sólida das matrizes, não sonhos inviáveis.",
        impact: { budget: 0, reputation: +40 },
        feedback: "Ovação Histórica! Pessoas ovacionaram sua segurança administrativa. Sabem que você não fará o Estado quebrar, apenas prosperará a instituição solidamente."
      }
    ],
    quiz: {
      question: "Nas Universidades, é obrigatório um gestor aprovar qualquer nova despesa ou renúncia de receita que afete longos períodos baseando-se no...",
      options: ["Aval do Grêmio Livre", "Voto de Confiança do Colegiado", "Adequação Orçamentária e Financeira (LDO/LOA)", "Contrato de Empréstimo Estudantil"],
      answer: 2,
      explanation: "Novas despesas contínuas exigem expressa estimativa de impacto e adequação à Lei de Diretrizes e ao Orçamento Atual.",
      topic: "Planejamento e Orçamento"
    }
  }
  ];
};

