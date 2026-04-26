import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Search, BookOpen, BrainCircuit, Users, 
  Settings, GraduationCap, LineChart, ShieldAlert,
  MapPin, CheckCircle, ExternalLink, Scale, Target, Lightbulb, Lock, FileText, Briefcase
} from 'lucide-react';
import SearchModal from './components/SearchModal';
import GoyasesGame from './components/GoyasesGame';
import { GlossaryModal } from './components/GlossaryModal';
import { coursesData } from './data/courses';
import { allGlossaryTerms } from './data/glossary';
import { GlossaryTerm } from './types/glossary';

function GlossaryLink({ termId, children, onSelect }: { termId: string, children: React.ReactNode, onSelect: (term: GlossaryTerm) => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const term = allGlossaryTerms.find(t => t.id === termId);
  return (
    <span className="relative inline-block" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button onClick={() => term && onSelect(term)} className="text-teal-700 font-bold border-b-2 border-dashed border-teal-600/50 cursor-help hover:text-teal-900 transition-colors">
        {children}
      </button>
      <AnimatePresence>
        {isHovered && term && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-slate-800 text-white text-xs rounded-xl shadow-xl z-50 pointer-events-none text-left leading-relaxed"
          >
            <div className="font-bold text-sm mb-2 text-teal-400">{term.title}</div>
            <div className="line-clamp-4">{term.shortDesc}</div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [activeSummaryTab, setActiveSummaryTab] = useState('estrategia');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  // Close search on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <NavItem 
                href="#" 
                icon={Building2} 
                label="" 
                tooltip="Início / Home" 
                align="left"
              />
              <span className="font-bold text-xl text-slate-800">IES<span className="text-teal-600">Gestão</span></span>
            </div>
            
            {/* Search Bar Trigger */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  onMouseEnter={() => setIsSearchHovered(true)}
                  onMouseLeave={() => setIsSearchHovered(false)}
                  className="w-full flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-500 px-4 py-2.5 rounded-full transition-colors border border-slate-200"
                >
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Pesquisar Orçamento, Leis, RPG...</span>
                  <span className="ml-auto text-xs border border-slate-300 rounded px-1.5 py-0.5">⌘K</span>
                </button>
                <AnimatePresence>
                  {isSearchHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-slate-800 text-white text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap z-[100] pointer-events-none"
                    >
                      Pesquisa Global (Termos, Leis e RPG)
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden lg:flex space-x-2">
              <NavItem 
                href="#estrategia" 
                icon={Target} 
                label="Estratégia" 
                tooltip="Ir para a seção de Estratégia e Tripé Acadêmico" 
              />
              <NavItem 
                href="#orcamento" 
                icon={FileText} 
                label="Orçamento" 
                tooltip="Ir para a seção de Orçamento e Execução (Lei 4.320)" 
              />
              <NavItem 
                href="#custos" 
                icon={Scale} 
                label="Custos" 
                tooltip="Ir para a seção de Gestão de Custos e Alocação" 
                align="right"
              />
              <NavItem 
                href="#licitacoes" 
                icon={Briefcase} 
                label="Licitações" 
                tooltip="Ir para a seção de Licitações e Contratos (Lei 14.133)" 
                align="right"
              />
              <NavItem 
                href="#cursos" 
                icon={GraduationCap} 
                label="Cursos" 
                tooltip="Ir para a seção de Trilhas de Capacitação" 
                isHighlight
                align="right"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Administração Pública na Educação</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Jogue, pesquise e estude. Domine os conceitos de orçamentação, custos, compras públicas e auditoria aplicados à realidade das Universidades Públicas.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setIsSearchOpen(true)} className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg shadow-teal-500/30 flex items-center gap-2">
              <Search className="w-5 h-5" /> Fazer Pesquisa Global
            </button>
            <a href="#game" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition backdrop-blur-sm flex items-center gap-2">
              <BrainCircuit className="w-5 h-5" /> Jogar Simulador Goyases
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Strategy Section */}
        <section id="estrategia" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                <BookOpen className="text-teal-600 w-8 h-8" /> Estratégia e o Tripé Acadêmico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-800">A Indissociabilidade Constitucional</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        A Constituição exige no Art. 207 que uma universidade integre três pilares sem hierarquia. Uma IES não é apenas uma escola de transmissão de dados; ela deve ser um motor de transformação regional guiada por um <GlossaryLink termId="pdi" onSelect={setSelectedTerm}>PDI (Plano de Desenvolvimento Institucional)</GlossaryLink> robusto.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg mt-1"><GraduationCap className="w-5 h-5"/></div>
                            <div><strong className="text-slate-800">Ensino:</strong> A formação teórica e prática.</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-purple-100 text-purple-700 p-2 rounded-lg mt-1"><Lightbulb className="w-5 h-5"/></div>
                            <div><strong className="text-slate-800">Pesquisa:</strong> A investigação científica e tecnológica.</div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg mt-1"><Users className="w-5 h-5"/></div>
                            <div><strong className="text-slate-800">Extensão:</strong> O retorno social e serviços à comunidade.</div>
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-100 p-8 rounded-2xl w-full border border-slate-200">
                    <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2"><Scale className="w-6 h-6 text-slate-600"/> <GlossaryLink termId="bsc" onSelect={setSelectedTerm}>BSC</GlossaryLink> no Setor Público</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-1 text-sm flex items-center gap-1"><Users className="w-4 h-4 text-teal-600"/> Sociedade</h4>
                            <p className="text-xs text-slate-600">Relevância regional.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-1 text-sm flex items-center gap-1"><Settings className="w-4 h-4 text-teal-600"/> Processos</h4>
                            <p className="text-xs text-slate-600">Eficiência e licitações.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-1 text-sm flex items-center gap-1"><GraduationCap className="w-4 h-4 text-teal-600"/> Aprendizado</h4>
                            <p className="text-xs text-slate-600">Capacitação docente.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-1 text-sm flex items-center gap-1"><LineChart className="w-4 h-4 text-teal-600"/> Orçamento</h4>
                            <p className="text-xs text-slate-600">Sustentabilidade LOA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Budgets & Flow */}
        <section id="orcamento" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                <FileText className="text-teal-600 w-8 h-8"/> Orçamento e Execução: Lei 4.320
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white border-2 border-blue-500 p-6 rounded-2xl shadow-sm w-full">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><Lock className="w-6 h-6"/></div>
                  <h4 className="font-bold mb-2">1. <GlossaryLink termId="empenho" onSelect={setSelectedTerm}>Empenho</GlossaryLink></h4>
                  <p className="text-sm text-slate-600">Reserva oficial do recurso financeiro. Impede gastos diversificados.</p>
              </div>
              <div className="bg-white border-2 border-orange-500 p-6 rounded-2xl shadow-sm w-full">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6"/></div>
                  <h4 className="font-bold mb-2">2. <GlossaryLink termId="liquidacao" onSelect={setSelectedTerm}>Liquidação</GlossaryLink></h4>
                  <p className="text-sm text-slate-600">Ateste da entrega do bem garantindo a qualidade exigida (Nota Fiscal).</p>
              </div>
              <div className="bg-white border-2 border-emerald-500 p-6 rounded-2xl shadow-sm w-full">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"><Briefcase className="w-6 h-6"/></div>
                  <h4 className="font-bold mb-2">3. Pagamento</h4>
                  <p className="text-sm text-slate-600">Transferência via <GlossaryLink termId="siafi" onSelect={setSelectedTerm}>SIAFI</GlossaryLink> quitando a obrigação financeira na <GlossaryLink termId="lrf" onSelect={setSelectedTerm}>LRF</GlossaryLink>.</p>
              </div>
            </div>
        </section>

        {/* Costs & Efficiency */}
        <section id="custos" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                <Scale className="text-teal-600 w-8 h-8"/> Gestão de Custos e Eficiência
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <p className="text-slate-600 mb-6 italic">"A educação não tem preço, mas tem custo."</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <LineChart className="w-5 h-5 text-teal-600 mb-2"/>
                        <h4 className="font-bold text-sm"><GlossaryLink termId="custo_direto" onSelect={setSelectedTerm}>Diretos</GlossaryLink></h4>
                        <p className="text-xs text-slate-500">Insumos de laboratório, reagentes e bolsas.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Users className="w-5 h-5 text-teal-600 mb-2"/>
                        <h4 className="font-bold text-sm"><GlossaryLink termId="custo_indireto" onSelect={setSelectedTerm}>Indiretos</GlossaryLink></h4>
                        <p className="text-xs text-slate-500">Energia elétrica, vigilância e manutenção predial.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Target className="w-5 h-5 text-teal-600 mb-2"/>
                        <h4 className="font-bold text-sm">Fixos</h4>
                        <p className="text-xs text-slate-500">Folha de pagamento (efetivos) e aluguéis.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Settings className="w-5 h-5 text-teal-600 mb-2"/>
                        <h4 className="font-bold text-sm"><GlossaryLink termId="custeio_variavel" onSelect={setSelectedTerm}>Variáveis</GlossaryLink></h4>
                        <p className="text-xs text-slate-500">Diárias, passagens e materiais de consumo.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Procurement & Law */}
        <section id="licitacoes" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
                <Briefcase className="text-teal-600 w-8 h-8"/> Licitações: <GlossaryLink termId="lei14133" onSelect={setSelectedTerm}>Lei 14.133/2021</GlossaryLink>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
                    <div className="bg-teal-50 p-3 rounded-xl"><ShieldAlert className="w-6 h-6 text-teal-600"/></div>
                    <div>
                        <h4 className="font-bold mb-1">Planejamento Prévio</h4>
                        <p className="text-sm text-slate-600"><GlossaryLink termId="etp" onSelect={setSelectedTerm}>ETP (Estudo Técnico Preliminar)</GlossaryLink></p>
                        <p className="text-xs text-slate-500 mt-2">A nova lei exige que o gestor justifique a necessidade antes mesmo de orçar no mercado.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
                    <div className="bg-teal-50 p-3 rounded-xl"><Scale className="w-6 h-6 text-teal-600"/></div>
                    <div>
                        <h4 className="font-bold mb-1">Critérios de Julgamento</h4>
                        <p className="text-sm text-slate-600">Menor Preço ou Maior Desconto</p>
                        <p className="text-xs text-slate-500 mt-2">O <GlossaryLink termId="pregao" onSelect={setSelectedTerm}>pregão eletrônico</GlossaryLink> continua sendo a modalidade preferencial para bens e serviços comuns.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Games Section */}
        <section id="game" className="scroll-mt-24">
          <GoyasesGame onGlossarySelect={(termId) => {
            const term = allGlossaryTerms.find(t => t.id === termId);
            if (term) setSelectedTerm(term);
          }} />
        </section>

        {/* Courses Section Expanded */}
        <section id="cursos" className="scroll-mt-24 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                        <GraduationCap className="text-teal-600 w-8 h-8" /> Trilhas de Capacitação
                    </h2>
                    <p className="text-slate-600 mt-2">Cursos gratuitos mapeados nas principais Escolas de Governo.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coursesData.map(course => (
                <div key={course.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider bg-${course.color}-100 text-${course.color}-800`}>
                          {course.provider.split(' - ')[0]}
                        </span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 leading-tight">{course.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{course.descShort}</p>
                    <a href={course.url} target="_blank" rel="noreferrer" className="mt-auto pt-4 border-t border-slate-200 text-teal-600 font-semibold text-sm flex items-center justify-between group-hover:text-teal-700">
                        <span>Acessar Curso</span>
                        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
              ))}
            </div>
        </section>

        {/* Glossary / Dictionary simple version */}
        <section id="glossario" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
              <BookOpen className="text-teal-600 w-8 h-8"/> Dicionário do Gestor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allGlossaryTerms.map(term => (
              <button 
                key={term.id} 
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 text-left hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group"
                onClick={() => setSelectedTerm(term)}
              >
                <Target className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"/>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{term.title}</h4>
                  <p className="text-slate-600 text-sm mt-1 line-clamp-2">{term.shortDesc}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Sites Úteis (Goiás)</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://goias.gov.br/economia/participacao-cidada-na-formulacao-do-orcamento-publico-do-estado-de-goias/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Participação Cidadã (Orçamento)</a></li>
                <li><a href="https://goias.gov.br/economia/orcamento-geral-do-estado/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Orçamento Geral do Estado</a></li>
                <li><a href="https://transparencia.go.gov.br/orcamento-e-planejamento-pecas/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Portal de Transparência Peças (<GlossaryLink termId="ppa" onSelect={setSelectedTerm}><span className="text-current border-b-0 font-normal">PPA</span></GlossaryLink>, <GlossaryLink termId="ldo" onSelect={setSelectedTerm}><span className="text-current border-b-0 font-normal">LDO</span></GlossaryLink>, <GlossaryLink termId="loa" onSelect={setSelectedTerm}><span className="text-current border-b-0 font-normal">LOA</span></GlossaryLink>)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Governo Federal e Legislação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://pncp.gov.br/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Portal Nacional de Contratações Públicas (PNCP)</a></li>
                <li><a href="https://www.tesourotransparente.gov.br/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Tesouro Transparente</a></li>
                <li><a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">Lei 14.133/2021 (Nova Lei de Licitações)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col items-center justify-center text-center space-y-2">
            <div className="text-sm">
              desenvolvido por <span className="font-bold text-red-700 drop-shadow-[0_0_8px_rgba(185,28,28,0.8)]">FGC</span>
            </div>
            <a href="mailto:fernandocortes@ueg.br" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              fernandocortes@ueg.br
            </a>
            <button 
              onClick={() => {
                navigator.clipboard.writeText('00833238132');
                const btn = document.getElementById('pix-btn');
                if (btn) {
                  const originalText = btn.innerHTML;
                  btn.innerHTML = 'pix copiado! ✓';
                  setTimeout(() => btn.innerHTML = originalText, 2000);
                }
              }}
              id="pix-btn"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 group"
              title="Copiar chave PIX"
            >
              pix: 00833238132
            </button>
          </div>
        </div>
      </footer>

      {/* Global Search Modal */}
      {isSearchOpen && (
        <SearchModal 
          onClose={() => setIsSearchOpen(false)} 
          onSelectTerm={setSelectedTerm} 
        />
      )}
      
      {/* Glossary Modal */}
      {selectedTerm && (
        <GlossaryModal term={selectedTerm} onClose={() => setSelectedTerm(null)} />
      )}
      
    </div>
  );
}

function NavItem({ href, icon: Icon, label, tooltip, isHighlight, align = 'center' }: { href: string; icon: any; label: string; tooltip: string; isHighlight?: boolean; align?: 'left' | 'center' | 'right' }) {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipAlignClasses = {
    left: 'left-0 translate-x-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-0 translate-x-0'
  };

  const arrowAlignClasses = {
    left: 'left-4 translate-x-0',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-4 translate-x-0'
  };

  return (
    <div className="relative">
      <a 
        href={href} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all ${
          isHighlight 
            ? 'text-teal-600 hover:text-teal-800 font-bold bg-teal-50' 
            : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50 font-medium'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span className="hidden xl:inline text-sm">{label}</span>
      </a>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute top-full mt-3 px-3 py-1.5 bg-slate-800 text-white text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap z-[100] pointer-events-none ${tooltipAlignClasses[align]}`}
          >
            {tooltip}
            <div className={`absolute -top-1 w-2 h-2 bg-slate-800 rotate-45 ${arrowAlignClasses[align]}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

