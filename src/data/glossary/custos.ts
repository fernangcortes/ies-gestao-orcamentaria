import { GlossaryTerm } from '../../types/glossary';

export const custosTerms: GlossaryTerm[] = [
  {
    id: "custo_direto",
    category: "Custos e Contabilidade",
    title: "Custo Direto",
    shortDesc: "Gasto com medidores precisos, não demanda fórmulas de rateio.",
    longDesc: "Representa gastos apropriados inequivocamente e explícitos atrelados a blocos únicos: sem necessitar de divisão ou métodos que o espalhem.",
    visualType: "structure",
    visualData: [
      { label: "Produto/Curso", color: "emerald" },
      { label: "Soma Imediata", color: "blue" }
    ],
    examples: [
      "O salário efetivo do bolsista dedicado 100% àquela pesquisa.",
      "Compra de reagente num frasco selado usado só no laboratório X.",
      "Horas extras de segurança pagas só para aula aos sábados isolada."
    ]
  },
  {
    id: "custo_indireto",
    category: "Custos e Contabilidade",
    title: "Custo Indireto",
    shortDesc: "Necessita de base e critério logístico nas divisões.",
    longDesc: "Os gastos transversais macro na entidade rateados arbitrariamente num viés por métodos baseados em alunos da IES ou área e afins. (Exemplo: Salário do Chefe Geral que controla a faculdade que atende Letras, Relações e Nutrição).",
    visualType: "hierarchy",
    visualData: [
      { label: "Despesa Global", color: "slate" },
      { label: "Curso A", color: "teal" },
      { label: "Curso B", color: "teal" },
      { label: "Curso C", color: "teal" }
    ],
    examples: [
      "Conta elétrica dos 5 prédios interligados medidos num único relógio do campus.",
      "Manutenção da portaria e vigilância noturna na matriz de ensino servindo a múltiplos cursos difíceis de discernir as demandas.",
      "Salários dos secretários acadêmicos universais unificados faturados sobre a massa estudantil geral computada atrelados a folha do custeio por absorção nas portarias e diários da instituição oficial imposta."
    ]
  },
  {
    id: "custeio_absorcao",
    category: "Custos e Contabilidade",
    title: "Custeio por Absorção",
    shortDesc: "Sistema contábil obrigatório. Agrega todos custos (fixos/variáveis).",
    longDesc: "Pilar contábil governamental fiscal. Obriga a absorção matemática e rateios rigorosos onde inclusive os custos indiretos desproporcionais e depreciação física pesada sejam incorporados nas faturas do custo final de serviços, por vezes distorcendo a perspectiva local da unidade num cenário real de superávit ou de crise isolada sem flexibilidade analítica de cortes gerenciais do ponto focal que seria visto pelo diretor e conselho numa pauta.",
    visualType: "balance",
    visualData: [
      { label: "Todos os Custos Fixos Gerais", subLabel: "Rateados", color: "red" },
      { label: "Custos Variáveis", subLabel: "Diretos", color: "blue" }
    ],
    examples: [
      "Rateio da folha dos concursados que eleva artificialmente no balanço anual o custo do aluno de um mestrado diminuto e frágil em fundos local.",
      "Auditoria fiscal aplicando depreciações dos ativos sobre relatórios exigindo contabilização legal.",
      "Análise engessada negando a viabilidade de ampliação pelo TCU porque a soma teórica ficou insustentável ao imputar encargos macro-estruturais sobre uma turminha mínima noturna de 5 alunos abrindo nas áreas."
    ]
  },
  {
    id: "custeio_variavel",
    category: "Custos e Contabilidade",
    title: "Custeio Variável",
    shortDesc: "Modelo para decisões ágeis, isentando CF fixos e de salários.",
    longDesc: "Modelo focado na realidade marginal de curto braço focando exclusivamente o impacto extra onde a faculdade verifica faticamente se o novo serviço, eliminando da frente os velhos fardos gigantes dos custos passados constantes (salários fixos), traz alguma margem rentável real na adesão em pauta superando o extra imediato requerido. Útil para a viabilidade em turmas novas e projetos temporais perante conselhos indecisos.",
    visualType: "process",
    visualData: [
      { label: "Ignorar Fixos", color: "slate" },
      { label: "Medir Variáveis Extras", color: "blue" },
      { label: "Apuração de Sobras", color: "emerald" }
    ],
    examples: [
      "Reitoria verificando que abrir sábados traz de custo real (Variável) apenas mais R$2 mil em energia extra superando repasse novo injetado atestando viabilidade com sobra.",
      "Contagem limpa em Pós Lato Sensu gerando lucros reais à conta unificada apesar do alto salário dos catedráticos estatais em folha de ponto da universidade estadual engessada que já recebe em dia.",
      "Gestor analisando expansões baseadas só na verba imediata capturável (incremental na conta corrente e verbas da praça pública)."
    ]
  },
  {
    id: "custeio_abc",
    category: "Custos e Contabilidade",
    title: "Custeio Baseado em Atividades (ABC)",
    shortDesc: "Rateia fundos embasados nas 'Atividades consumidas'.",
    longDesc: "Busca exterminar a injustiça clássica dos rateios genéricos por cabeça de alunos, apontando DIRECIONADORES cirúrgicos: Se engenharia usa 90% do processamento técnico logístico das bases, ela paga o grosso da energia e manutenção. Exige monitoramento do uso fático das ações centrais mitigando revoltas no congresso interno setorial sobre orçamentos impetrados pelo reitor contra faculdades de base humanas com consumos diminutos estruturais em faturas da secretaria e matrizes OCC em LOA.",
    visualType: "hierarchy",
    visualData: [
      { label: "Atividade Real (Helpdesk)", color: "blue" },
      { label: "Direcionador (Chamados TI)", color: "teal" },
      { label: "Carga Direcional em Setores", color: "emerald" }
    ],
    examples: [
      "Alocação proporcional dos R$ 100k da Internet porque Informática registra tráfegos massivos isentando blocos passivos com quadros verdes de gizes e cadernos nas áreas atreladas.",
      "Biblioteca faturando demandas internas do Centro atrelado às aquisições complexas exclusivas do ramo.",
      "Aplicação de um questionário identificando quantas cópias a impressora tira de provas das Exatas e das Engenharias evitando atritar setores por cobranças de terceiros."
    ]
  },
  {
    id: "margem_contribuicao",
    category: "Custos e Contabilidade",
    title: "Margem de Contribuição",
    shortDesc: "Receitas do lote menos os Custos puramente Variáveis.",
    longDesc: "Diferença unitária real. O quantitativo monetário que a Universidade apura num produto, isoladamente e liberto dos abismos burocráticos globais, onde deduzindo os insumos essências que tornaram fato (Luz incremental e apostilas extras), resta em reais para colaborar com o abater geral na pesada máquina burocrática fixa de contas da instituição formando o equilíbrio na balança.",
    visualType: "metric",
    visualData: [
      { label: "Receita Captada/Repasse", color: "emerald" },
      { label: "-", color: "slate" },
      { label: "Custo Variável", color: "orange" },
      { label: "=", color: "slate" },
      { label: "Margem Final Bruta", color: "teal" }
    ],
    examples: [
      "A Pós cobrando 5 mil abate mil de papelaria revelando margem útil de R$ 4k para salvar o custeio universal sem lastro atrelado.",
      "Prestação da clinica pública onde o convênio paga o triplo dos insumos e sustenta bolsas de mestrado remanescente dos excedentes e margens.",
      "A descoberta chocante de bolsas ou taxas pagas perante insumos milionários importados de cotação alta apresentando MC negativa (ruína invisível ao caixa central na faculdade sem planilhas transparentes revelando insumos comensurados)."
    ]
  },
  {
    id: "ponto_equilibrio",
    category: "Custos e Contabilidade",
    title: "Ponto de Equilíbrio (Break-even)",
    shortDesc: "Número X inicial crítico onde Despesa se empata à Receita.",
    longDesc: "Indicador imperativo. É a exata quantidade inegociável contábil no plano onde a arrecadação da IES (por matrículas, bolsas ou convênios) e subsídios, cruzará o eixo mortal cobrindo 100% dos Custos Fixos mais Variáveis empatando o semestre em ZERO. Daí para cima superávits; para baixo, falências crônicas das reitorias sem fundos que abatem folha na união estouradas nos tribunais superiores.",
    visualType: "alert",
    visualData: [
      { label: "Prejuízo Inicial", color: "red" },
      { label: "Ponto Exato (Zero)", color: "blue" },
      { label: "Massa Crítica/Lucro Marginal", color: "emerald" }
    ],
    examples: [
      "Cancelamento sumário e automático via consórcio gestor da nova turma porque só teve 12 inscritos, sem alcançar os 20 que pagariam as logísticas na carga básica e custos da abertura fática na unidade do noturno base.",
      "Meta gerencial informando que após o limite contábil emparelhado cada novo ingresso injetará 100% de lucros nas áreas remetentes a melhorias reais das bibliotecas isoladas nas coordenações plenas e secretarias ativas para fomento.",
      "Revisões cruéis nos orçamentos de centros após corte da tarifa do estado onde o patamar de exigências fixado infla o gráfico do ponto crítico (Break-even Point) em 30% a mais."
    ]
  },
  {
    id: "depreciacao",
    category: "Custos e Contabilidade",
    title: "Depreciação Patrimonial",
    shortDesc: "Atesta o sucateamento inexorável contínuo de recursos.",
    longDesc: "Estratégia contábil mandante. Demonstra a perda irreversível silenciosa dos altos bens tecnológicos que caem via senescência de valor nominal mesmo sem saques caixas reais; alertando chefias nos balanços do tempo fático que eles virarão sucatas inviáveis sob vida útil, cobrando em lançamentos mensais das despesas nas faturas virtuais amortizando valores nos caixas previstos perante os fundos centrais estaduais sob as LRF no desgaste operacional (bens tombados).",
    visualType: "timeline",
    visualData: [
      { label: "Compra (100% Alto)", color: "teal" },
      { label: "Ano 1 a 4 (Perdas %)", color: "orange" },
      { label: "Ano 5 (Sucata Zero VLR)", color: "red" }
    ],
    examples: [
      "Registrar R$ 20k de quebra de valor ao mês pela super-estação tecnológica de TI informando conselhos para prover a troca orçada perante compras futuras num rito normal em fluxo.",
      "Reitorias percebendo via balanço o acúmulo das máquinas ociosas superadas caindo em ruínas contábil alertando para alienações dos passivos em leilões na modalidade do Estado amparada perante a lei 14.133 para não colapsar com lixo logístico os depósitos fechados sob chaves dos polos universitários federais obsoletos.",
      "Absorvedores contábeis incorporados faticamente inflando rateios dos balanços operacionais na LOA e faturas contábeis das pós aos relógios patrimoniais governamentais atrelados aos campi modernizados recém integrados no eixo federal unificado."
    ]
  },
  {
    id: "custo_oculto",
    category: "Custos e Contabilidade",
    title: "Custos Ocultos (Hidden Costs)",
    shortDesc: "Fardos financeiros invisíveis nos fluxos mal mensurados.",
    longDesc: "Impactos nocivos disfarçados em relatórios. São retrabalhos da gestão burocrática, falhas energéticas não apuradas, horas extras de manutenção de velharias em sistemas que os diretores fecham os olhos. Minam os resultados do ente sob a base falsa de lucros aparentes mas que secam cofres no entorno institucional das finanças sem licitações atreladas nos balanços abertos.",
    visualType: "alert",
    visualData: [
      { label: "Aparecimento da Compra Visível", color: "blue" },
      { label: "Gastos Não Mapeados Abismais (Iceberg)", color: "red" }
    ],
    examples: [
      "Impressoras antigas recebidas por doação (grátis) que consomem toners esgotados monopolizados caríssimos travando o caixa trimestral.",
      "Sistemas parados resultando em turmas atrasadas e pagamento de bolsas excedentes para cobrir períodos em greves estruturais do local da reitoria nas auditorias do TCU/TCE no Brasil ativo na esfera acadêmica.",
      "Desperdícios energéticos onde ares-condicionados centrais operam sob fiações antigas sem reparos faturando contas em pico invisível mensais contínuos sem avaliações e sem ETP fidedigno."
    ]
  }
];
