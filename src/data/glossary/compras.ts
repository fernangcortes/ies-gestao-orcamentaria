import { GlossaryTerm } from '../../types/glossary';

export const comprasTerms: GlossaryTerm[] = [
  {
    id: "lei14133",
    category: "Compras e Licitações",
    title: "Lei 14.133/21",
    shortDesc: "Nova Lei de Licitações, com foco em Planejamento e Governança.",
    longDesc: "Marco regulatório que substitui a Lei 8.666. Foca severamente no planejamento (ETP), gestão de riscos e ferramentas digitais via PNCP. Inverte as fases da licitação, priorizando o julgamento da proposta antes da pesada fase de documentação (habilitação) para agilizar as compras públicas.",
    visualType: "process",
    visualData: [
      { label: "Planejamento (ETP/TR)", color: "blue" },
      { label: "Edital Público (PNCP)", color: "teal" },
      { label: "Julgamento & Habilitação", color: "emerald" }
    ],
    examples: [
      "Adoção obrigatória do Pregão Eletrônico para compras de materiais comuns de expediente.",
      "Criação de métricas de desempenho no edital, onde a IES paga conforme o nível de serviço entregue pela empresa de vigilância.",
      "Uso do catálogo eletrônico de padronização para compras rotineiras da Reitoria."
    ]
  },
  {
    id: "etp",
    category: "Compras e Licitações",
    title: "Estudo Técnico Preliminar (ETP)",
    shortDesc: "O embasamento técnico que questiona o 'por quê' da compra.",
    longDesc: "Documento da fase interna da licitação que mapeia o mercado, analisa alternativas e justifica técnica e economicamente a escolha. Sem ele, a IES não prova que aquela solução é a mais eficiente em termos de ciclo de vida.",
    visualType: "hierarchy",
    visualData: [
      { label: "Demanda do Setor", color: "slate" },
      { label: "Pesquisa de Soluções (Alugar x Comprar)", color: "orange" },
      { label: "Solução Mais Vantajosa", color: "teal" }
    ],
    examples: [
      "Estudo para decidir se a IES compra frota própria de veículos ou contrata serviço de locação continuada.",
      "Mapeamento de viabilidade para aquisição de softwares via nuvem vs. servidores locais físicos.",
      "Avaliação do custo de manutenção nos próximos 5 anos para aparelhos de raio-X na Odontologia."
    ]
  },
  {
    id: "tr",
    category: "Compras e Licitações",
    title: "Termo de Referência (TR)",
    shortDesc: "Regras do jogo: especificações e deveres do futuro contratado.",
    longDesc: "Gerado após o ETP. Define minuciosamente o que será comprado, as métricas de qualidade, prazos de entrega, sanções e multas. É proibido citar marcas, devendo-se utilizar parâmetros técnicos objetivos que permitam concorrência.",
    visualType: "document",
    visualData: [
      { label: "Especificações", color: "slate" },
      { label: "Deveres da Empresa", color: "blue" },
      { label: "Sanções e Multas", color: "red" }
    ],
    examples: [
      "TR para aquisição de computadores exigindo processador 8 cores, 16GB RAM, mas sem citar Intel ou AMD.",
      "Exigência de suporte presencial on-site de 36 meses para os servidores de TI adquiridos.",
      "Regras rígidas de dedetização e limpeza hospitalar cobradas da empresa terceirizada do HU."
    ]
  },
  {
    id: "srp",
    category: "Compras e Licitações",
    title: "Registro de Preços (SRP)",
    shortDesc: "Ata que fixa preços futuros por até 1 ano, evitando estoques grandes.",
    longDesc: "A IES licita não para comprar tudo de uma vez, mas para 'congelar' o preço vencedor. Durante o ano, o almoxarifado pede lotes menores apenas quando necessário, blindando a instituição contra inflação e perdas logísticas de materiais em depósitos úmidos.",
    visualType: "cycle",
    visualData: [
      { label: "Pregão (Preço Congelado)", color: "blue" },
      { label: "Pedidos Parcelados", color: "teal" },
      { label: "Pagamento Conforme Entrega", color: "emerald" }
    ],
    examples: [
      "Ata firmando R$ 20 por resma de papel, acionada fracionadamente por cada faculdade da IES ao longo do ano lectivo.",
      "Licitação SRP carona: a UFG pega carona num registro de preços já feito pela UnB para economizar tempo.",
      "Redução drástica do espaço de armazenagem de materiais perecíveis no almoxarifado central."
    ]
  },
  {
    id: "fracionamento",
    category: "Compras e Licitações",
    title: "Fracionamento de Despesa",
    shortDesc: "Erro grave: picotar compras grandes para fugir da licitação.",
    longDesc: "Crime ou erro grosseiro. Consiste em dividir artificialmente uma compra contínua e previsível (ex: papel higiênico para o ano) em mini-compras mensais abaixo do limite legal da Dispensa de Licitação, burlando a concorrência ampla.",
    visualType: "alert",
    visualData: [
      { label: "10 Dispensas de R$ 15 mil (Ilegal)", color: "red" },
      { label: "1 Pregão de R$ 150 mil (Legal)", color: "emerald" }
    ],
    examples: [
      "Gestor reprovado por autorizar 5 compras diretas de tinta de impressora no mesmo mês sob dispensa.",
      "Tribunal de Contas alertando a Reitoria por falta de planejamento anual unificado em materiais hospitalares.",
      "Proibição do uso recorrente de Suprimento de Fundos para itens de expediente habituais da secretaria."
    ]
  },
  {
    id: "segregacao",
    category: "Compras e Licitações",
    title: "Segregação de Funções",
    shortDesc: "Princípio antifraude: quem pede, não compra; quem compra, não atesta.",
    longDesc: "Divisão de poderes nos fluxos licitatórios. Garante que os riscos de corrupção sejam minimizados ao impedir que um único servidor acumule funções cruciais da fase interna até a fase de pagamento.",
    visualType: "structure",
    visualData: [
      { label: "Laboratório (Pede)", color: "slate" },
      { label: "Pregoeiro (Licita)", color: "blue" },
      { label: "Comissão (Atesta NF)", color: "teal" }
    ],
    examples: [
      "Fiscal de Contrato nunca pode ser o mesmo servidor que autoriza as ordens de empenho na contabilidade.",
      "Criação de Comissões mistas para receber equipamentos caros ao invés da assinatura de apenas um coordenador.",
      "Bloqueio de usuário no sistema para que o ordenador de despesas não possa realizar a liquidação do próprio gasto."
    ]
  },
  {
    id: "dialogo_comp",
    category: "Compras e Licitações",
    title: "Diálogo Competitivo",
    shortDesc: "Modalidade nova para inovações complexas sem solução pronta.",
    longDesc: "Usada quando o Estado sabe o problema (ex: evasão de alunos nas portas do RU) mas não sabe qual é a melhor tecnologia mercado, dialogando com as startups para desenhar o edital conjuntamente antes dos lances de preço.",
    visualType: "process",
    visualData: [
      { label: "Problema IES", color: "orange" },
      { label: "Diálogos com Startups", color: "blue" },
      { label: "Edital Final Customizado", color: "emerald" }
    ],
    examples: [
      "Desenvolvimento de uma IA própria para mapear taxas de evasão em dezenas de campi integrados.",
      "Modernização arquitetônica verde nas engenharias que envolve geração de patentes de energia limpa exclusivas.",
      "Substituição de tecnologias proprietárias legadas do Governo por novas redes blockchain governamentais integradas."
    ]
  },
  {
    id: "pregao",
    category: "Compras e Licitações",
    title: "Pregão Eletrônico",
    shortDesc: "Modalidade veloz baseada em leilões virtuais reversos para itens comuns.",
    longDesc: "Exigido para aquisição de Bens e Serviços Comuns. Inverte as fases da licitação: a disputa de lances (valores menores) ocorre antes da checagem documental, acelerando brutalmente o processo de compras rotineiras das autarquias.",
    visualType: "metric",
    visualData: [
      { label: "Lance 1: R$ 50", color: "slate" },
      { label: "Lance 2: R$ 45", color: "slate" },
      { label: "Vencedor: R$ 40", color: "teal" }
    ],
    examples: [
      "Uso obrigatório na contratação de equipes de limpeza e compra de frotas convencionais para os campi.",
      "Lance virtual público no Portal de Compras blindando contra fraudes em envelopes fechados.",
      "Aquisição massiva e veloz de carteiras universitárias padronizadas pela Pró-Reitoria de Infraestrutura."
    ]
  }
];
