import { GlossaryTerm } from '../../types/glossary';

export const orcamentoTerms: GlossaryTerm[] = [
  {
    id: "ppa",
    category: "Orçamento e Finanças",
    title: "Plano Plurianual (PPA)",
    shortDesc: "Planejamento governamental de médio prazo (4 anos).",
    longDesc: "Instrumento de planejamento governamental de médio prazo, com vigência de quatro anos. Ele estabelece, de forma regionalizada, as diretrizes, objetivos e metas da administração pública para as despesas de capital e outros programas de duração continuada, servindo como o grande mapa de expansão do Governo do qual a Universidade faz parte.",
    visualType: "timeline",
    visualData: [
      { label: "Ano 1", subLabel: "Elaboração e Início", color: "blue" },
      { label: "Ano 2", subLabel: "Execução Contínua", color: "blue" },
      { label: "Ano 3", subLabel: "Ajustes de Rota", color: "blue" },
      { label: "Ano 4", subLabel: "Conclusão", color: "teal" }
    ],
    examples: [
      "A construção de um novo Campus Avançado de Medicina, que demorará 3 anos para ficar pronto, prevista como meta estrutural.",
      "Planejamento de longo prazo para renovação de 100% da frota de ônibus do campus em 4 anos.",
      "Criação de um programa contínuo plurianual de fomento à pesquisa em inteligência artificial."
    ]
  },
  {
    id: "ldo",
    category: "Orçamento e Finanças",
    title: "Lei de Diretrizes Orçamentárias (LDO)",
    shortDesc: "Vínculo entre o PPA e a LOA, definindo metas anuais.",
    longDesc: "Considerada o elo indispensável entre o PPA (estratégia de 4 anos) e a LOA (execução operacional de 1 ano). A LDO orienta a elaboração dos orçamentos, dispõe sobre alterações na legislação tributária e, principalmente, estabelece de forma prévia as metas e eventuais riscos fiscais para o ano seguinte.",
    visualType: "process",
    visualData: [
      { label: "PPA", subLabel: "Visão Geral (4 anos)", color: "blue" },
      { label: "LDO", subLabel: "O Elo (Filtro anual)", color: "teal" },
      { label: "LOA", subLabel: "A Execução (Orçamento)", color: "emerald" }
    ],
    examples: [
      "O Conselho Universitário aprova e encaminha a previsão de contratação de 50 novos servidores para constar no anexo de metas da LDO.",
      "A LDO estadual prevê uma reserva de contingência caso a arrecadação de ICMS caia, impactando diretamente os limites da universidade.",
      "Aperto fiscal: a LDO do ano proíbe a concessão de novos reajustes salariais para docentes, barrando a proposta de aumento nas catracas do orçamento."
    ]
  },
  {
    id: "loa",
    category: "Orçamento e Finanças",
    title: "Lei Orçamentária Anual (LOA)",
    shortDesc: "Fixa as despesas e estima as receitas para o ano.",
    longDesc: "A LOA é a peça de curtíssimo prazo, ou seja, a execução puramente financeira do que foi planejado. Ela fixa rigorosamente as despesas máximas (dotações) que a instituição poderá realizar ao longo do ano civil, estando sempre vinculada a uma estimativa realista de arrecadação de receitas ou repasses governamentais.",
    visualType: "balance",
    visualData: [
      { label: "Receitas Estimadas", subLabel: "Repasses", color: "emerald" },
      { label: "Despesas Fixadas", subLabel: "Limites de Gasto", color: "orange" }
    ],
    examples: [
      "O Diretor tenta empenhar R$ 1,1 mi em 'Custeio', mas a LOA só liberou R$ 1,0 mi. O sistema (SIAFI) trava e ele não pode comprar.",
      "Recebimento da dotação no primeiro dia útil do ano para começar a garantir os contratos continuados (limpeza e segurança).",
      "Redução linear pelo Governo de 10% do valor publicado na LOA inicial da IES, exigindo corte de gastos não essenciais."
    ]
  },
  {
    id: "lrf",
    category: "Orçamento e Finanças",
    title: "Lei de Responsabilidade Fiscal (LRF)",
    shortDesc: "Guardiã das finanças públicas e limites do endividamento.",
    longDesc: "Instituída pela Lei Complementar 101/00, atua estabelecendo limites rígidos e severos para o endividamento público e impõe o famoso 'Teto de Gastos com Pessoal', evitando que a máquina estatal e as universidades quebrem devido a um inchaço incontrolável na folha salarial.",
    visualType: "alert",
    visualData: [
      { label: "Alerta de Gastos", subLabel: "Limite Prudencial Atingido", color: "red" }
    ],
    examples: [
      "O reitor barrado no Tribunal de Contas de abrir novo concurso público porque o Estado atingiu o limite prudencial de gastos com pessoal da LRF.",
      "Proibição de conceder aumento salarial ou criar novos cargos nos 180 dias finais do mandato do reitor.",
      "Obrigatoriedade de publicar os Relatórios de Gestão Fiscal quadrimestrais aos conselhos da IES para monitoramento da LRF."
    ]
  },
  {
    id: "obz",
    category: "Orçamento e Finanças",
    title: "Orçamento Base Zero (OBZ)",
    shortDesc: "Justificativa periódica e total do orçamento (do zero).",
    longDesc: "Em contraste com o orçamento incremental, o OBZ exige que cada gestor da instituição justifique e comprove a necessidade do seu orçamento integral (a partir do zero) todos os anos, varrendo gastos históricos e ineficientes ao invés de apenas atualizar orçamentos velhos baseados em inflação.",
    visualType: "cycle",
    visualData: [
      { label: "Zerar Histórico", color: "red" },
      { label: "Identificar Necessidades", color: "orange" },
      { label: "Justificar Base", color: "blue" },
      { label: "Aprovar Eficiência", color: "emerald" }
    ],
    examples: [
      "A Pró-reitoria zera o orçamento histórico de R$ 50 mil em papel, exigindo comprovação de uso. Descobre processos digitais e corta a verba, direcionando-a para softwares.",
      "Centro de Ciências Exatas recriando o orçamento para laboratórios focados em tecnologias vigentes ao invés de continuar mantendo repasses de mídias obsoletas.",
      "Extinção de um repasse automático anual para aluguel de ônibus, substituído por um comparativo de leasing viável justificado pelo diretor."
    ]
  },
  {
    id: "empenho",
    category: "Orçamento e Finanças",
    title: "Empenho",
    shortDesc: "Reserva oficial e congelamento do orçamento público.",
    longDesc: "Primeiro Estágio da Despesa. O ato emanado pela autoridade governamental competente que cria uma obrigação de pagamento, pendente ou não de implemento de condição. Ele reserva o recurso nas contas, impedindo gastos com finalidades diversas.",
    visualType: "document",
    visualData: [
      { label: "Nota de Empenho", subLabel: "Recurso 'Congelado'", color: "blue" }
    ],
    examples: [
      "Assinatura da Nota de Empenho para reservar 20 mil reais para cadeiras novas, logo, esse dinheiro não pode ser usado para pagar água.",
      "Reitoria emitindo empenhos globais em janeiro para contratos que durarão os 12 meses, garantindo o recurso antecipadamente.",
      "Anulação do saldo total de empenho quando uma empresa vencedora da licitação misteriosamente desiste da entrega dos computadores."
    ]
  },
  {
    id: "liquidacao",
    category: "Orçamento e Finanças",
    title: "Liquidação",
    shortDesc: "Atesta o direito do credor mediante entrega do bem.",
    longDesc: "Segundo Estágio da Execução da Despesa. Consiste na verificação do direito do credor, atestando que bens foram fisicamente entregues, serviços prestados ou obras realizadas, com base nos títulos e documentos comprobatórios (Nota Fiscal assinada e carimbada com 'Atesto').",
    visualType: "process",
    visualData: [
      { label: "Entrega Física", color: "slate" },
      { label: "Conferência Técnica", color: "blue" },
      { label: "Atesto (Liquidação)", color: "emerald" }
    ],
    examples: [
      "O almoxarife inspeciona os microscópios recebidos, verifica notas técnicas, testa o hardware e assina o verso atestando o recebimento.",
      "A fiscalização de engenharia da IES emitindo relatório e medindo que 30% da obra da biblioteca foi concluída no mês, liquidando essa fração devida.",
      "Devolução do ateste, barrando a liquidação, porque os projetores entregues eram de marca inferior e diferiam do Termo de Referência."
    ]
  },
  {
    id: "rap",
    category: "Orçamento e Finanças",
    title: "Restos a Pagar (RAP)",
    shortDesc: "Despesas que invadem o ano seguinte pendentes de liquidação/pagamento.",
    longDesc: "Mecanismo contábil que permite que as despesas empenhadas que não foram pagas até 31 de dezembro transitem para o ano seguinte, preservando o valor sem onerar e devorar a LOA do ano subsequente. Estações: RAP Processados (já com liquidação atestada) e Não Processados (pendente fornecimento).",
    visualType: "structure",
    visualData: [
      { label: "31 Dezembro", subLabel: "Virada do Exercício", color: "slate" },
      { label: "Processados", subLabel: "Já Liquidados", color: "emerald" },
      { label: "Não Processados", subLabel: "Ainda na obra", color: "orange" }
    ],
    examples: [
      "Obra do centro de refeitório que foi atrasada pelas chuvas sendo inscrita em RAP não processado para ser continuada em janeiro.",
      "O cancelamento de restos a pagar inscritos anos atrás e nunca executados pela empresa contratada (presunção no ciclo patrimonial).",
      "Processados esperando em caixa o pagamento prioritário bancário no SIAFI no dia 2 de janeiro."
    ]
  },
  {
    id: "suprimento",
    category: "Orçamento e Finanças",
    title: "Suprimento de Fundos",
    shortDesc: "Adiantamento para gastos de pequeno risco ou urgências.",
    longDesc: "Regime de adiantamento em que um montante é entregue a um servidor (via cartão corporativo) para cobrir despesas pontuais, emergenciais, miudezas de pequeno vulto, ou durante missões em locais de escassez sem possibilidade formal de um rito burocratizado licitatório.",
    visualType: "document",
    visualData: [
      { label: "Cartão CPGF", subLabel: "Limite e Conta", color: "teal" }
    ],
    examples: [
      "O pagamento do conserto imprevisível num pneu do veículo da comitiva acadêmica estragado numa estrada remota durante uma pesquisa geológica de campo.",
      "Aquisição isolada de emergência de parafusos específicos em ferragem de bairro pois uma mesa de microscópio se rompeu ao acaso corriqueiro na clínica.",
      "Professor devolvendo saldo que sobrou no suprimento com notas fiscais comprobatórias para prestação de contas no tribunal interno."
    ]
  },
  {
    id: "creditos_adicionais",
    category: "Orçamento e Finanças",
    title: "Créditos Adicionais",
    shortDesc: "Ajustes injetando dotações que não previam ou excederam LOA.",
    longDesc: "Autorizações para despesas não computadas (ou insuficientes) na LOA do ano. Suplementares: reforçam um balanço final que acabou. Especiais: criam e destinam montantes para novos projetos alheios e recém aprovados. Extraordinários: desastres imprevisíveis estatais.",
    visualType: "hierarchy",
    visualData: [
      { label: "Créditos", color: "slate" },
      { label: "Suplementares (Reforço)", color: "blue" },
      { label: "Especiais (Novo)", color: "teal" },
      { label: "Extraordinários (Calamidade)", color: "red" }
    ],
    examples: [
      "Decreto extraordinário por enchentes injetando 5 milhões à Reitoria na IES para recuperação laboratorial emergencial, sem dotação anterior prévia.",
      "Abertura em conselho do crédito suplementar esvaziando contas de passagens de viagens para cobrir os saldos esgotados e as pesadas tarifas com a alta luz nos balanços de reitoria.",
      "Aprovação especial autorizada pela casa de leis pra implantar um novo modelo logístico laboratorial aprovado tarde da noite, após a aprovação das comissões na referida LOA do ano basal centralizado."
    ]
  },
  {
    id: "matriz_occ",
    category: "Orçamento e Finanças",
    title: "Matriz OCC (Outros Custeios e Capital)",
    shortDesc: "Modelo matemático de rateios financeiros no ministério.",
    longDesc: "Algoritmo governamental adotado em âmbito MEC/ANDIFES para alocar equitativamente recursos entre diversas unidades. Emprega matrizes com indicadores potentes como a quantidade real ativa dos alunos retidos com pesos por perfis pesados, engenharias que consumam laborativo ou a área e produção das instituições federais/estaduais repassadas uniformemente contra alíquotas fixas nas finanças da tesouraria centralizada gerando montantes de equidade nas verbas da praça pública perante pressões na Câmara nos cortes.",
    visualType: "metric",
    visualData: [
      { label: "Alunos Matriculados", subLabel: "Indicador Peso 1", color: "blue" },
      { label: "Alunos Formados", subLabel: "Indicador Métrica Prêmios", color: "emerald" },
      { label: "Área e Laboratórios", subLabel: "Ajuste na Matriz", color: "orange" }
    ],
    examples: [
      "Os cálculos que penalizaram e reduziram o campus onde o índice altíssimo da violenta evasão despontou subtraindo bônus numérico basal nos fatores anuais matemáticos repassados via matriz OCC de Custeio das Faculdades.",
      "Injeção das métricas ajustadas com novos pesos elevados na base OCC do MEC que alocam recursos densos, bonificando em cifras volumosas reitorias que mantiveram alunos formandos ou abriram engenharias que drenam gastos maiores fixos.",
      "O corte repassado a um núcleo pela matriz reduzido, por erro do sistema contábil, esquecendo de somar os formados da Pós local computados extemporaneamente nos fluxos gerenciais na tesouraria de governo repassador de rendas e portarias MEC."
    ]
  },
  {
    id: "contingenciamento",
    category: "Orçamento e Finanças",
    title: "Contingenciamento Orçamentário",
    shortDesc: "Congelamento de rotinas pelo Estado face a quedas em caixa.",
    longDesc: "Quando a arrecadação da nação ou ente fracassa e frustra expectativas orçadas em relatórios da secretaria estadual / federal do Tesouro local perante a realidade orçada na matriz inicial em LOA do estado ou de União em planilhas da STN com retornos, decreta-se em decreto cortes maciços e limites duros no poder que gestores estariam em rotina para empenhar os gastos alvos nos balanços, exigindo contenção abrupta imediata sob decreto das secretarias suspendendo e tesourando investimentos bilionários nas frentes.",
    visualType: "alert",
    visualData: [
      { label: "Arrecadação Caiu", color: "orange" },
      { label: "Empenhos Bloqueados", color: "red" },
      { label: "Geração de Limites", color: "teal" }
    ],
    examples: [
      "A suspensão geral de obras em andamento (cancelamento contingenciado) pois o caixa caiu muito.",
      "Proibição do Governador de gastar com bolsas diárias para que o recurso central não fuja em caixa.",
      "A reprogramação onde Pró-Reitores excluem empenhos passados recuando e cortando 30% em laboratórios operantes."
    ]
  },
  {
    id: "duodecimo",
    category: "Orçamento e Finanças",
    title: "Repasse Duodecimal (Duodécimo)",
    shortDesc: "Transferência parcelada do orçamento em cotas (1/12 avos) durante o ano.",
    longDesc: "A divisão fracionada anual obrigatória em cotas para os poderes garantindo autonomia financeira regular, para que um gestor na UERJ, USP ou órgãos e poderes tenha estabilidade nas contabilidades todo dia 20 independentemente da vontade singular dos governantes temporários atuantes sobre balanços alvos da macroeconomia.",
    visualType: "cycle",
    visualData: [
      { label: "Jan", color: "slate" },
      { label: "Fev", color: "slate" },
      { label: "Mar... Dez", color: "slate" }
    ],
    examples: [
      "A Reitoria paralisada acionando justiça porque o Governador reteve intencionalmente o repasse duodecimal do mês estagnando a IES e serviços em caixa em novembro ativo contra as faturas de serviços continuados sob LRF.",
      "Garantia e acautelamento da parcela 1/12 em conta da universidade preservando autonomia em mês duro.",
      "Programação rigorosa das obrigações da reitora conforme a chegada rigorosa programada do saldo base mensal no dia 20 de tesouraria do tesoureiro sem colapsos da falta de lastros no extrato local da folha contínua do SIAFI/SIAFEM atestado na prestação fiscal do trimestre."
    ]
  }
];
