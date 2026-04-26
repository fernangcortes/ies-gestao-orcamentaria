import { GlossaryTerm } from '../../types/glossary';
import { orcamentoTerms } from './orcamento';
import { custosTerms } from './custos';
import { comprasTerms } from './compras';
import { auditoriaTerms } from './auditoria';
import { operacoesTerms } from './operacoes';

export const allGlossaryTerms: GlossaryTerm[] = [
  ...orcamentoTerms,
  ...custosTerms,
  ...comprasTerms,
  ...auditoriaTerms,
  ...operacoesTerms
];
