import { GlossaryTerm } from '../../types/glossary';

export const operacoesTerms: GlossaryTerm[] = [
  {
    id: "fundacoes",
    category: "Operações e Extensão",
    title: "Fundações de Apoio",
    shortDesc: "Entidades ágeis que intermedeiam pesquisas e convênios privados na IES.",
    longDesc: "São organizações sem fins lucrativos, criadas com amparo legal, para ajudar Instituições de Ensino no gerenciamento ágil de projetos de pesquisa, ensino, extensão e de desenvolvimento. Elas permitem captar recursos da iniciativa privada sem o engessamento total burocrático e repassá-los ao setor público de laboratórios de forma fluente.",
    visualType: "balance",
    visualData: [
      { label: "Governo / Reitoria (Lento)", color: "slate" },
      { label: "Fundação (Elo Ágil)", color: "blue" },
      { label: "Mercado Privado (Rápido)", color: "teal" }
    ],
    examples: [
      "Uma farmacêutica financia uma pesquisa no laboratório da IES e o recurso é gerenciado pela Fundação para pagar os bolsistas rapidamente.",
      "Criação de fundo especial para modernizar robótica usando doações de ex-alunos.",
      "Cobrança flexível num curso de especialização Lato Sensu gerido via fundação sem ferir normas constitucionais da gratuidade do ensino central."
    ]
  },
  {
    id: "pnaes",
    category: "Operações e Extensão",
    title: "Programa Nacional de Assistência Estudantil (PNAES)",
    shortDesc: "Repasse sagrado para manter alunos de baixa renda vivos e estudando.",
    longDesc: "Verba carimbada estritamente para Assistência Estudantil. Impede a evasão em massa de alunos carentes garantindo-lhes residência, RU (Restaurante Universitário), transporte, saúde e apoio pedagógico. Tocar nesse recurso para outros fins da IES caracteriza crime severo.",
    visualType: "hierarchy",
    visualData: [
      { label: "Verba Carimbada MEC", color: "blue" },
      { label: "Moradia/Creche PNAES", color: "emerald" },
      { label: "Restaurante (RU)", color: "teal" }
    ],
    examples: [
      "Alocação dos repasses do PNAES para subsidiar 100% da bandeja alimentícia do estudante no Restaurante Escolar.",
      "Pagamento mensal de bolsa-permanência a discentes ingressantes por cotas sociais que mantêm desempenho acadêmico mínimo.",
      "Compra exclusiva focada em veículos e ônibus para translado em campi rurais usando dotação específica da assistência."
    ]
  },
  {
    id: "andifes",
    category: "Operações e Extensão",
    title: "Matriz ANDIFES",
    shortDesc: "Fórmula de distribuição da maior fatia do bolo orçamentário nacional.",
    longDesc: "Modelo consolidado de rateio do repasse discricionário entre IES brasileiras. Premia a eficiência ao cruzar dados como a retenção dos alunos, o tamanho dos campi e matrículas na pós-graduação. Uma universidade que forma seus alunos ganha mais pontuação do que aquela que apenas aprova e evadi.",
    visualType: "metric",
    visualData: [
      { label: "Aluno Equivalente Formado", color: "blue" },
      { label: "Fator Retenção Fática", color: "emerald" }
    ],
    examples: [
      "O corte brutal na quota da universidade após as auditorias constatarem evasões monstruosas em 5 graduações pesadas sem alunos formantes no fluxo anual histórico da base.",
      "Recepção de milhões a mais em bonificação por excelência no mestrado avaliado nota 5 pela CAPES inflacionando a métrica Pós da matriz.",
      "Repasse diferenciado na alíquota considerando alunos noturnos que necessitam maior base perimétrica vigilante na folha base."
    ]
  },
  {
    id: "rotacao",
    category: "Operações e Extensão",
    title: "Rotação de Estoques",
    shortDesc: "Evita o risco de estocar materiais deterioráveis e perder empenho.",
    longDesc: "A ciência do almoxarifado em medir a 'velocidade de giro'. Armazenar um ano inteiro de luvas cirúrgicas é perigoso (vencimento / deterioração térmica). Avaliar a Rotação exige adotar modelos ágeis de Sistema de Registro de Preços para ter almoxarifados 'quase virtuais' integrados localmente.",
    visualType: "cycle",
    visualData: [
      { label: "Recebe", color: "blue" },
      { label: "Usa e Dá Baixa", color: "teal" },
      { label: "Repõe Exatas Demandas", color: "emerald" }
    ],
    examples: [
      "Descarte criminoso por validade e mofo detectado em 5 mil resmas esquecidas no galpão sul pois rotatividade zero ocorreu numa compra em grande escala mal desenhada num edital engessado.",
      "Pedidos sob demanda quinzenal de formol usando as atas do governo para mitigar os vapores letais no campus hospitalar fático local da matriz em vez da compra imensa no mesmo empacotamento com o fornecedor químico na virada fiscal."
    ]
  },
  {
    id: "tombamento",
    category: "Operações e Extensão",
    title: "Tombamento Patrimonial",
    shortDesc: "Registro do DNA de bens permanentes e início da responsabilidade.",
    longDesc: "Ato sagrado de afixar e rastrear a 'chapinha' num patrimônio fisicamente alicerçado. A responsabilidade por ele é transferida do estoque para um gestor direto perante a burocracia contínua pública (O computador do Chefe agora é patrimônio 'Tombado' no CPF dele).",
    visualType: "document",
    visualData: [
      { label: "Compra Recebida", color: "slate" },
      { label: "Emissão Número/Plaqueta Oficial", color: "blue" },
      { label: "Início Depreciação (Responsável Específico)", color: "teal" }
    ],
    examples: [
      "Processo doloroso aberto após o roubo de dois laptops focais dos laboratórios forçando a emissão contábil registrando Baixas no Patrimonio Federal e sindicâncias de sumiços atreladas aos chefões no TCU brasileiro.",
      "Inventário final do ano que caça número a número nas cadeiras colégio adentro aferindo as transferências de bens entre os diretores isolados na máquina governamental do ativo municipal com relatórios pesados sob pena no TCE estado perante omissões nas portarias vigentes no rito."
    ]
  },
  {
    id: "concurso_pss",
    category: "Operações e Extensão",
    title: "Concurso vs Processo Seletivo (PSS)",
    shortDesc: "O permanente vs o temporário (limites da Lei e da gestão).",
    longDesc: "Enquanto Concursos dão posse efetiva via Regime Jurídico Único gerando custos vitalícios insanos e estabilidades na LRF, as IES devem suprir pontuais vagas emergenciais via PSS (Processo Seletivo Simplificado): Contratos sem estabilidade de Professores Substitutos válidos por no máximo 2 anos que mitigam greves e vacâncias abruptas até novos editais centrais aprovarem nos orçamentos federais unificados das folhas inelásticas das capitais do Ministério da área gerida do ERÁRIO fático da folha de salários.",
    visualType: "process",
    visualData: [
      { label: "Concurso (Vitalício e Estável num cargo com progressões)", color: "teal" },
      { label: "PSS (Temporário Tapa-Buracos emergencial do Contrato isolado sem carreiras)", color: "orange" }
    ],
    examples: [
      "Contratação urgente para fechar as horas num ano atípico com professor vitimado falecido nas férias evitando parar Engenharias no campus sem licitação burocrática engessada e lenta do edital de vida longa nas câmaras no congresso perante os limites fiscais do estado.",
      "Impedir recondução e uso vitalício fático eterno de temporários caracterizando a burla escancarada aos tetos legais sem passar nas malhas dos testes abertos de lisura na disputa aos salários unificados anuais e cargos públicos isentos na constituição no país da gestão reitoral estrita."
    ]
  },
  {
    id: "siafi",
    category: "Operações e Extensão",
    title: "SIAFI",
    shortDesc: "Sistema nervoso da máquina pública federal na tesouraria.",
    longDesc: "Sistema Integrado de Administração Financeira onde, de fato, a magia orçamentária vira dinheiro real e execuções no Banco. Toda dotação, empenho, liquidação vira bit e dado gerencial transparente cruzando os dados aos órgãos sem erros fáticos blindando as contas. Ficar sem SIAFI atestado é fechar os cofres governamentais e não girar o Brasil diário a todos reitores e prefeitos no cômputo da dívida unificada ativa.",
    visualType: "metric",
    visualData: [
      { label: "Registro (OB)", color: "blue" },
      { label: "Aprova Pagamento (Terminal Segregado Central Nacional da Fazenda Fática)", color: "emerald" }
    ],
    examples: [
      "Emissão irreversível real no SIAFI / SIAFEM estadual no caixa da Nota de Ordem Bancária no último dia final de fechamentos liberando 5 mil pra firma e credor logístico nos ritos.",
      "As dores de cabeças com rubricas cruzadas erradas e bloqueios (Trancas) diárias que ordenadores resolvem pela virada exigindo retificar valores lançados fora dos prazos da secretaria nacional em portarias pesadas e auditorias fáticas perante tesouro ativo unificado."
    ]
  },
  {
    id: "pdti",
    category: "Operações e Extensão",
    title: "PDTI",
    shortDesc: "Plano Diretor de Tecnologia. O PDI dos setores e braços virtuais.",
    longDesc: "Exigência brutal dos órgãos fiscalizadores. Nenhuma universidade federal pode mais adquirir 'sistemas ou TIs avulsos' e picotados. Sem PDTI válido e aderente, o diretor fica vedado de efetuar contratações, mitigando cabides informáticos onde a faculdade de Física tem um portal paralelo que não fala a linguagem base com o portal nacional ou financeiro geral do Brasil com dados acadêmicos soltos e viciados.",
    visualType: "document",
    visualData: [
      { label: "Sem Norte de Dados Base? Não Licita TI", color: "red" },
      { label: "Alinhado no PDTI Governamental Certo?", color: "emerald" }
    ],
    examples: [
      "O cancelamento na auditoria da compra super moderna da catraca de biometria avulsa pois não constavam projetos aprovados no eixo de governança de TIC no atual mandato anual (Sem aderência PDTI cancela a verba almejada na praça).",
      "Padronização imensa que demoliu 50 bancos de redes amadores soltos nos laboratórios com vulnerabilidades reunindo as matrizes na nuvem corporativa e no portal Gov integrando unicamente em sistemas focados as legislações do estado focadas nas redes isoladas unificadas."
    ]
  },
  {
    id: "transferegov",
    category: "Operações e Extensão",
    title: "Transferegov (Siconv)",
    shortDesc: "O mural de controle milimétrico para verbas recebidas volantes carimbadas extra base.",
    longDesc: "Plataforma blindada para execução fática de todo Acordo de Parceria, Fomentos, recursos das bancadas (Emendas Especiais atreladas dos deputados) no mandato das capitais. O dinheiro extra não se mescla e não contamina o 'custeio' rotineiro isolado das folhas faturas das IES estaduais na tesouraria geral. Garante a prestação fiscal na linha de meta do deputado gerindo repasses até pagamentos num funil exato do tesouro nacional ativo nas verbas extras anuais focais.",
    visualType: "alert",
    visualData: [
      { label: "Emenda Recebida", color: "teal" },
      { label: "Conta Plataforma", color: "blue" },
      { label: "Prestação (Atestes PDF Finais Requeridos e Prefeitos Locais do ERÁRIO Unificado)", color: "orange" }
    ],
    examples: [
      "Devolução frustrante pesada num balanço de 400 mil extintos reais pro Governo com multas do Reitor isolado faturado por culpa da falha amadora nas minúcias da aprovação documentais num plano extinto não anexos nas prestações nos prazos corretos em abas no Transferegov com as prefeituras ligadas a governança de fomento das emendas parlamentares perante cortes e deputados federais."
    ]
  },
  {
    id: "bdi",
    category: "Operações e Extensão",
    title: "BDI (Benefícios e Despesas Indiretas)",
    shortDesc: "A gordura oficial legalizada no preço final das empreiteiras.",
    longDesc: "Taxa imposta sob normativas somada aos custos da obra pesada (materiais+mãos de obra puros base). O BDI remunera na IES a administração invisível fixa empresarial da construtora alheia, lucros, contingências severas climáticas estaduais das empresas ou ônus dos seguros na pavimentação dos polos. Alvo frequente e denso dos Tribunais de Contas no superfaturamento se for acima dos tetos fixados de 20~25% num TR das câmaras civis faturadas e atreladas.",
    visualType: "hierarchy",
    visualData: [
      { label: "Custo Bruto Obra", color: "slate" },
      { label: "+ Taxa BDI (Aprovações Seguros & Empresa Privada do Licenciado Local na IES)", color: "blue" },
      { label: "Total Final Adjudicado Oficial Homologado no Pregão Nacional à Ganhadora Fática", color: "emerald" }
    ],
    examples: [
      "Retenção dolorosa após engenharia dos fiscais achar índices absurdos cobrados perante administração fixa da contratada majorando BDI na UFRJ para 35% roubando faticamente o montante das estatais unificadas estouradas sem balanços da IES em TR. O TCU cortando valores na glosa mensal antes do acerto da conta reitoral no rito pago com empenhos ativos federais perante tesourarias do estado isolado focais a governos no cômputo da matriz atestada nas LRFs atreladas faturadas na gestão.",
      "Justificativas documentadas isentando conselhos por taxas aceitas em 22% em hospitais do pólo rural perante alta logística fática requerida nas vias difíceis mitigando lucros locais empresariais."
    ]
  }
];
