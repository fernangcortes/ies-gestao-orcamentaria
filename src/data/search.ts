export const searchLinks = [
  { type: "web", title: "Lei 14.133/2021 (Nova Lei de Licitações)", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm", desc: "Legislação atualizada sobre compras e contratos administrativos." },
  { type: "web", title: "Lei 4.320/1964 (Finanças Públicas)", url: "https://www.planalto.gov.br/ccivil_03/leis/l4320.htm", desc: "Normas Gerais de Direito Financeiro, abrangendo o ciclo orçamentário." },
  { type: "web", title: "Lei de Responsabilidade Fiscal (LC 101/00)", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm", desc: "Limites essenciais de despesas e endividamento estatal." },
  { type: "web", title: "Tesouro Transparente", url: "https://www.tesourotransparente.gov.br/", desc: "Painéis e dados abertos sobre as finanças do governo." },
  { type: "web", title: "Portal Nacional de Contratações Públicas (PNCP)", url: "https://pncp.gov.br/", desc: "Portal central de divulgação das compras públicas sob a nova lei." },
  { type: "web", title: "Participação Cidadã (GO)", url: "https://goias.gov.br/economia/participacao-cidada-na-formulacao-do-orcamento-publico-do-estado-de-goias/", desc: "Formulação do Orçamento Público Estadual." },
  { type: "web", title: "Orçamento Geral (GO)", url: "https://goias.gov.br/economia/orcamento-geral-do-estado/", desc: "Dados e portarias do Orçamento de Goiás." },
  { type: "web", title: "Portal de Transparência Peças (GO)", url: "https://transparencia.go.gov.br/orcamento-e-planejamento-pecas/", desc: "Pecas de planejamento (PPA, LDO, LOA)." },
  { type: "site", title: "Estratégia & O Tripé Acadêmico", url: "#estrategia", desc: "A indissociabilidade entre Ensino, Pesquisa e Extensão." },
  { type: "site", title: "Orçamento e Execução Financeira", url: "#orcamento", desc: "Entenda os estágios: Empenho, Liquidação e Pagamento." },
  { type: "site", title: "Terminologia de Custos", url: "#custos", desc: "Diferença técnica entre Custeio Direto, Variável e Absorção." },
  { type: "site", title: "Compras e Licitações", url: "#licitacoes", desc: "Modalidades e etapas: ETP, TR, Pregão e Diálogo Competitivo." },
  { type: "site", title: "Glossário Avançado", url: "#glossario", desc: "Dicionário expandido da gestão financeira pública." },
  { type: "site", title: "Jogo Goyases: Simulação", url: "#game", desc: "Teste seus conhecimentos atuando como gestor virtual." }
];

import { allGlossaryTerms } from './glossary';

export const glossaryTerms = allGlossaryTerms.map(term => ({
  id: term.id,
  title: term.title,
  desc: term.shortDesc
}));
