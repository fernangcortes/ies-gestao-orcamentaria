import { GlossaryTerm } from '../../types/glossary';

export const auditoriaTerms: GlossaryTerm[] = [
  {
    id: "pdi",
    category: "Estratégia e Auditoria",
    title: "PDI (Plano de Desenvolvimento Institucional)",
    shortDesc: "O 'coração' da IES. Traça o rumo estratégico de 5 a 10 anos.",
    longDesc: "Mapa estratégico máximo de uma IES. Traça diretrizes pedagógicas, eixos de expansão física, metas de sustentabilidade financeira e qual perfil profissional deseja integrar à sociedade, subsidiando a elaboração das Matrizes Orçamentárias.",
    visualType: "document",
    visualData: [
      { label: "Visão & Missão", color: "blue" },
      { label: "Expansão 10 Anos", color: "teal" },
      { label: "Políticas Sociais", color: "orange" }
    ],
    examples: [
      "Decisão de priorizar Orçamento (LOA) para ampliação da internet em campi do interior por ordem do PDI focado na interiorização.",
      "Redução gradual de repasses ao papel focando em digitalização total dos diários exigida pelo plano mestre.",
      "Trava de novos cursos humanísticos devido à saturação de matriz local identificada pelas autoavaliações do PDI passado."
    ]
  },
  {
    id: "indissociabilidade",
    category: "Estratégia e Auditoria",
    title: "Indissociabilidade Constitucional",
    shortDesc: "Equilíbrio vital entre Ensino, Pesquisa e Extensão.",
    longDesc: "Princípio do Art 207 da CF. Impede que a IES atue apenas repassando conteúdo (escola). Exige geração de ciência e serviço fático devolvido ao usuário ou sociedade carente, dividindo equitativamente matrizes financeiras de fomento.",
    visualType: "balance",
    visualData: [
      { label: "Ensino (Salas)", color: "blue" },
      { label: "Pesquisa (Labs)", color: "teal" },
      { label: "Extensão (Rua)", color: "emerald" }
    ],
    examples: [
      "O atendimento dental barato da PUC (Extensão) aos cidadãos locais ensinando novatos de Odonto no ato (Ensino) com novos adesivos (Pesquisa).",
      "Garantia de bolsas estudantis universais a monitores de campo sem foco unicamente financeiro retido na tesouraria do reitor.",
      "Vetar que os reitores esvaziem setores sociais repassando verbas à estrutura burocrática reitoral passível em tribunais das federações."
    ]
  },
  {
    id: "bsc",
    category: "Estratégia e Auditoria",
    title: "Balanced Scorecard (BSC)",
    shortDesc: "Técnica focada nos resultados ao Utente e Sociedade e não Lucros.",
    longDesc: "Instrumentos métricos para atestar avanços em 4 vertentes. Diferente do privado, no público o eixo superior financeiro é suprimido na ponta para colocar os Cidadãos; analisando faticamente eficácias regionais em prol à responsabilidades sociais atestadas em indicadores no consun.",
    visualType: "hierarchy",
    visualData: [
      { label: "1. Público (Topo)", color: "emerald" },
      { label: "2. Eficácia em Finanças", color: "blue" },
      { label: "3. Capacitação Humana e Processos", color: "orange" }
    ],
    examples: [
      "Análise focando a empregabilidade egresso em vez de lucros absolutos de turma paga aberta.",
      "Treinamento massivo aos funcionários antigos de compras pra despachar edital ETP com rapidez focada as leis atuais 14.133.",
      "Avaliar o clima de retenção entre as faculdades sem usar planilhas de rateio frio na avaliação fática anual no reitorado."
    ]
  },
  {
    id: "governanca",
    category: "Estratégia e Auditoria",
    title: "Governança Pública",
    shortDesc: "A arquitetura de liderança para gerir atos da gestão ética.",
    longDesc: "Mecanismos rigorosos de cúpula com liderança para dirigir, avaliar e sanar o gestor que visa favorecimento político; descentralizando poder às comissões atestadas na matriz do compliance reitoral atrelado perante TCU focadas a mitigar o erro crônico.",
    visualType: "structure",
    visualData: [
      { label: "Comitês Decisórios", color: "blue" },
      { label: "Auditorias de Base", color: "teal" },
      { label: "Resultados Lícitos", color: "emerald" }
    ],
    examples: [
      "Retirar a decisão de R$ 5mi da caneta única e isolada do cargo do reitor enviando a equipe de colegiados para avaliação ETP fática isenta da política.",
      "Instituição exigindo portal unificado ativo do cidadão com as folhas contínuas das estatais atualizadas mensalmente focada atreladas à LAI (Leis Acessos).",
      "Auditoria atuando preventivamente treinando os servidores velhos, ante de apenas multar."
    ]
  },
  {
    id: "accountability",
    category: "Estratégia e Auditoria",
    title: "Accountability",
    shortDesc: "Responsabilização diária. Promover respostas francas ao cidadão.",
    longDesc: "O dever implacável atrelado à máquina no estado no país com o contribuinte que financia os laboratórios pesados da federação; responder não via contador apenas os números frios do empenho pagos no sistema; porém exprimir faticamente atrelando valor com que as pesquisas renderam e não roubar verbas.",
    visualType: "process",
    visualData: [
      { label: "Registros Contábeis Claros", color: "slate" },
      { label: "Transparência de Ações Públicas", color: "blue" },
      { label: "Auto-Responsabilidade Social", color: "emerald" }
    ],
    examples: [
      "Reitoria mantendo as audiências bimestrais abertas aos diretórios de bairros e moradores justificando os gastos orçados atrasados sob a LDO no hospital fático central.",
      "Disponibilização da lista com os provimentos do cargo em Diário Pleno isentos na Web contábil fática transparente.",
      "Demissão formal num conselho aberto após comissão julgando dolo isolado fraudador no balanço sem proteções atreladas nos porões da gestão governamental estatal ativas no tribunal cego de inspeção."
    ]
  },
  {
    id: "auditoria_conformidade",
    category: "Estratégia e Auditoria",
    title: "Auditoria de Conformidade (Regularidade)",
    shortDesc: "Análise fria perante um regulamento. O ato obedeceu a lei dura?",
    longDesc: "Caça restrita e rigorosa as regularidades pontuais aos moldes literais nos artigos penais ou nas folhas contratuais sem visar o panorama fático dos atrasos (é punitiva atestando ilegalidades de fracionamentos nos diários na base da CGU ou no rito TCE na IES estadual do cofre unificado).",
    visualType: "alert",
    visualData: [
      { label: "Prática do Reitor X (vs) Norma Legal Y", color: "red" }
    ],
    examples: [
      "Reprovação rígida final onde o pesquisador da IES acumulava nos recibos faturas extrapolando limites aos caixas das autarquias na rubrica extra federal do MEC.",
      "Sanções por compras realizadas desprovidas e falhas do estudo base no TR sem as estipulações ETP adequadas conforme manual e manuais do ministério local atestadas no país penalizando o burocrata sem isenção técnica na área setorial unida à gestão plena."
    ]
  },
  {
    id: "auditoria_operacional",
    category: "Estratégia e Auditoria",
    title: "Auditoria Operacional",
    shortDesc: "Análise construtiva via '3 Es' (Eficiência, Eficácia, Efetividade).",
    longDesc: "Foge da caça às bruxas cega e verifica os gargalos da lentidão (ex. o pregoeiro atrasa 6 meses pra comprar giz). Recomendações vitais focadas em refazer caminhos da governança agilizando entregas de ensino às reitorias sem ferir licitações; não caçam os ladrões, combatem os desperdícios burocráticos.",
    visualType: "metric",
    visualData: [
      { label: "Eficácia em Repassar Caixa", color: "blue" },
      { label: "Otimizar Fluxos Lentos Setoriais", color: "teal" }
    ],
    examples: [
      "Recomendação interna para adotar Sistema de Registro (SRP) nas canetas após o tribunal notar excesso e repetições imensas e letárgicas com 20 pregões isolados focais errôneos atestados.",
      "Criação das centrais unidas para fechar a aquisição faturando lotes unificados ganhando descontos estaduais atenuando os fardos ao imposto nacional gerido."
    ]
  },
  {
    id: "tce",
    category: "Estratégia e Auditoria",
    title: "Tomada de Contas Especial (TCE)",
    shortDesc: "Processo penal-administrativo contra flagrantes danos severos ao erário.",
    longDesc: "Instrumento extremo instaurado obrigatoriamente frente a superfaturamentos crônicos comissivos e omissões flagrantes (quando dízimos e caixas reitorais fáticos somem das obras ou desviamo-se dotações milionárias para as missões pessoais; focando punir severamente e tentar a recuperação fática processual do erário em juros às tesourarias centrais do núcleo de governo brasileiro da controladoria)." ,
    visualType: "document",
    visualData: [
      { label: "Irregularidade Crassa / Rombo Detectado", color: "red" },
      { label: "Apuração e Restituição Imposta com Juros", color: "orange" }
    ],
    examples: [
      "Docente denunciado formal por utilizar verbas empenhadas do fomento de biotecnologia desviando compras e viagens à capital pagas pra famílias fora das normativas nos convênios das portarias de extensão.",
      "A Reitoria ou TCE abrindo sindicâncias contra as fornecedoras mafiosas laranjas no faturamento que desviavam verbas licitadas de portaria e não entregavam cimentos isolados na expansão atrelado e amparado da infra."
    ]
  }
];
