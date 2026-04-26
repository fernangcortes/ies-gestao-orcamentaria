import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Play, CheckCircle, ShieldAlert, Award, ArrowRight, DollarSign, Target, User, Sparkles, AlertTriangle, BookOpen, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getGameScenarios, GameState } from '../data/game';
import { GameMap } from './GameMap';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const DialogBox = ({ npcAvatar, npcName, text, children }: { npcAvatar?: string, npcName?: string, text: string | React.ReactNode, children?: React.ReactNode }) => (
  <div className="bg-[#fcd34d] border-[8px] border-[#b45309] rounded-xl w-full relative shadow-[0_10px_0_rgba(0,0,0,0.4)] flex flex-col-reverse md:flex-row gap-6 p-6 text-[#78350f]">
    <div className="absolute top-0 bottom-0 left-0 right-0 border-4 border-[#d97706] pointer-events-none rounded"></div>
    {/* Body */}
    <div className="md:w-3/4 relative z-10 flex flex-col justify-between">
       <div className="font-bold text-lg leading-relaxed mb-6 whitespace-pre-wrap">
         {text}
       </div>
       <div className="mt-auto">
         {children}
       </div>
    </div>
    {/* Portrait */}
    <div className="md:w-1/4 flex flex-col items-center justify-start relative z-10 md:border-l-4 md:border-[#d97706] md:pl-6">
      <div className="w-28 h-28 bg-[#fef3c7] border-[6px] border-[#b45309] rounded-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] flex items-center justify-center text-6xl relative overflow-hidden">
         <span className="drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] z-10 relative">{npcAvatar}</span>
         {/* Checkerboard Pattern */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(45deg, #d97706 25%, transparent 25%, transparent 75%, #d97706 75%, #d97706), linear-gradient(45deg, #d97706 25%, transparent 25%, transparent 75%, #d97706 75%, #d97706)',
            backgroundSize: '12px 12px',
            backgroundPosition: '0 0, 6px 6px'
         }}></div>
      </div>
      <div className="mt-4 bg-[#fef3c7] border-4 border-[#b45309] px-2 py-2 font-black text-center w-full shadow-[0_4px_0_#92400e] text-sm md:text-base uppercase tracking-wider break-words max-w-[140px]">
         {npcName}
      </div>
    </div>
  </div>
);

const AVATARS = [
  '😀', '😎', '🤓', '🤠', '🦊', '🦉', '🐶', '🐈', '🐢', '🐼', '🦁', '🐻'
];

const TOPIC_TO_TERM_IDS: Record<string, string[]> = {
  "Licitações e Compras": ["srp", "etp", "lei14133"],
  "Princípios Constitucionais": ["governanca", "accountability"],
  "Custos no Setor Público": ["custeio_variavel", "margem_contribuicao"],
  "Fundações de Apoio": ["fundacoes"],
  "Orçamento Público": ["matriz_occ", "rap"],
  "Auditoria Governamental": ["auditoria_operacional", "tce"],
  "Planejamento e Orçamento": ["ldo", "loa"]
};

interface GoyasesGameProps {
  onGlossarySelect?: (termId: string) => void;
}

export default function GoyasesGame({ onGlossarySelect }: GoyasesGameProps) {
  const [playerName, setPlayerName] = useState('');
  const scenarios = React.useMemo(() => getGameScenarios(playerName), [playerName]);
  const [gameState, setGameState] = useState<GameState>({
    level: 0,
    budget: 50,
    reputation: 50,
    casesCompleted: 0,
    log: [],
    mistakesByLevel: []
  });

  const [gamePhase, setGamePhase] = useState<'start' | 'map' | 'scenario' | 'transition' | 'end' | 'gameover'>('start');
  const [selectedAvatar, setSelectedAvatar] = useState('🦊');

  const [activeQuizSelected, setActiveQuizSelected] = useState<number | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [quizPassed, setQuizPassed] = useState(false);
  const [currentMistakes, setCurrentMistakes] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  // Body overflow logic when maximized
  useEffect(() => {
    if (isMaximized) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('game-maximized');
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.classList.remove('game-maximized');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.classList.remove('game-maximized');
    };
  }, [isMaximized]);

  // Allocation State
  const [allocations, setAllocations] = useState<Record<string, number>>({});

  const scrollToGame = () => {
    setTimeout(() => {
        gameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const startLevel = () => {
    setGameState(prev => ({ ...prev, level: 1, mistakesByLevel: [] }));
    setQuizPassed(false);
    setActiveQuizSelected(null);
    setQuizFeedback(null);
    setCurrentMistakes(0);
    setGamePhase('map');
    scrollToGame();
  };

  const advanceLevel = () => {
    if (gameState.level >= scenarios.length) {
      setGamePhase('end');
    } else {
      setGamePhase('transition');
      setTimeout(() => {
        setGameState(prev => ({ ...prev, level: prev.level + 1 }));
        setQuizPassed(false);
        setActiveQuizSelected(null);
        setQuizFeedback(null);
        setCurrentMistakes(0);
        setGamePhase('map');
      }, 5000);
    }
  };

  const currentScenarioIndex = gameState.level - 1;
  const currentScenario = scenarios[currentScenarioIndex];

  // Initialize Allocations if level changes
  useEffect(() => {
      if (currentScenario?.type === 'allocation' && currentScenario.allocationTask) {
          const init: Record<string, number> = {};
          currentScenario.allocationTask.areas.forEach(a => {
              init[a.id] = a.min;
          });
          setAllocations(init);
      }
  }, [currentScenario]);

  const handleDecision = (impact: { budget: number, reputation: number }, feedback: string) => {
    setGameState(prev => {
      const newBudget = Math.min(100, Math.max(0, prev.budget + impact.budget));
      const newReputation = Math.min(100, Math.max(0, prev.reputation + impact.reputation));
      
      const nextState = {
        ...prev,
        budget: newBudget,
        reputation: newReputation,
        casesCompleted: prev.casesCompleted + 1,
        log: [...prev.log, feedback]
      };
      
      return nextState;
    });
    
    // Check if stats reached 0
    if (gameState.budget + impact.budget <= 0 || gameState.reputation + impact.reputation <= 0) {
        setGamePhase('gameover');
    }
  };

  let sumAllocations = 0;
  for (const key in allocations) {
    sumAllocations += allocations[key];
  }
  const totalBudget = currentScenario?.allocationTask?.totalBudget || 0;
  const remainingBudget = totalBudget - sumAllocations;

  const handleAllocationSubmit = () => {
      if (!currentScenario?.allocationTask) return;
      if (sumAllocations !== totalBudget) {
          alert('Você precisa alocar 100% da verba disponível! Faltam ' + remainingBudget + currentScenario.allocationTask.unit);
          return;
      }
      
      const result = currentScenario.allocationTask.evaluate(allocations);
      handleDecision(result.impact, result.feedback);
  };

  const handleQuiz = (idx: number, answerIndex: number) => {
    setActiveQuizSelected(idx);
    const correct = idx === answerIndex;
    if (correct) {
      setQuizFeedback("Exato! Você dominou o conceito.");
      setQuizPassed(true);
      if (currentScenario) {
        setGameState(prev => {
            const existingTopicIndex = prev.mistakesByLevel.findIndex(m => m.topic === currentScenario.quiz.topic);
            const newMistakes = [...prev.mistakesByLevel];
            if (existingTopicIndex >= 0) {
                newMistakes[existingTopicIndex].count += currentMistakes;
            } else {
                newMistakes.push({ level: currentScenario.id, topic: currentScenario.quiz.topic, count: currentMistakes });
            }
            return { ...prev, mistakesByLevel: newMistakes };
        });
      }
    } else {
      const newMistakes = currentMistakes + 1;
      setCurrentMistakes(newMistakes);
      setQuizFeedback("Incorreto. Leia com atenção.");
      setQuizPassed(false);
      
      if (newMistakes >= 3) {
          if (currentScenario) {
             setGameState(prev => {
                 const newMistakesList = [...prev.mistakesByLevel];
                 newMistakesList.push({ level: currentScenario.id, topic: currentScenario.quiz.topic, count: newMistakes });
                 return { ...prev, mistakesByLevel: newMistakesList };
             });
          }
          setGamePhase('gameover');
      }
    }
  };

  const renderMistakeReport = (isGameOver = false) => {
    if (gameState.mistakesByLevel.length === 0) return null;
    
    return (
        <div className="bg-[#1e3610]/90 p-6 rounded-xl border-2 border-[#4a752c] mb-8 relative z-10 shadow-xl w-full text-left">
            <h3 className="text-[#a8e6cf] font-bold uppercase text-base mb-4 flex items-center justify-center gap-2">
               <BookOpen size={20} /> Relatório de Aprimoramento
            </h3>
            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gameState.mistakesByLevel} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                      <XAxis dataKey="topic" stroke="#d1f2e6" tick={{fill: '#d1f2e6', fontSize: 10}} />
                      <YAxis allowDecimals={false} stroke="#d1f2e6" tick={{fill: '#d1f2e6', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#1e3610', borderColor: '#4a752c', color: '#fff'}} 
                        itemStyle={{color: '#f87171', fontWeight: 'bold'}}
                      />
                      <Bar dataKey="count" name="Erros" fill="#f87171" radius={[4, 4, 0, 0]} />
                  </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-[#a8e6cf] text-sm font-medium bg-[#2b4c17] p-3 rounded-lg border border-[#4a752c] mb-4 text-center">
              Recomendamos fortemente aprofundar seus estudos nos seguintes termos para evitar esses erros na próxima gestão:
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
               {Array.from(new Set(gameState.mistakesByLevel.flatMap(m => TOPIC_TO_TERM_IDS[m.topic] || []))).map(termId => {
                   return (
                       <button
                           key={termId}
                           onClick={() => onGlossarySelect?.(termId)}
                           className="text-xs bg-[#4a752c] hover:bg-[#3a6020] text-emerald-100 px-3 py-1.5 rounded-full border border-emerald-500/50 flex items-center gap-1 font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
                       >
                           <BookOpen size={14} /> {termId.replace(/_/g, ' ').toUpperCase()}
                       </button>
                   );
               })}
            </div>
        </div>
    );
  };

  const content = (
    <div ref={gameRef} className={`${isMaximized ? 'w-full min-h-screen flex flex-col border-0' : 'max-w-4xl mx-auto rounded-xl border-[8px] scroll-mt-24 overflow-hidden'} bg-[#2b4c17] p-4 md:p-8 border-[#1e3610] shadow-[inset_0_0_50px_rgba(0,0,0,0.8),0_10px_0_rgba(0,0,0,0.4)] relative text-[#d1f2e6]`} style={{
        backgroundImage: 'radial-gradient(#3a6020 2px, transparent 2px)',
        backgroundSize: '16px 16px'
    }}>
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className={`relative z-10 flex flex-col flex-1`}>
        <div className="flex flex-col md:flex-row justify-between items-center border-b-4 border-[#1e3610] pb-6 mb-8 gap-4 shrink-0">
          <div>
            <h2 className="text-3xl font-black text-[#a8e6cf] flex items-center justify-center md:justify-start gap-3 drop-shadow-[0_4px_0_#1e3610] uppercase tracking-widest text-center md:text-left">
              <Award className="w-8 h-8" /> Goyases RPG
            </h2>
            <p className="text-[#a8e6cf] mt-2 font-bold bg-black/40 px-3 py-1 rounded-lg border border-[#3a6020] inline-block text-sm">Simulador Público IES</p>
          </div>
          
          <div className="flex items-center gap-4">
            {gamePhase !== 'start' && (
              <div className="flex gap-4 bg-[#1e3610]/80 p-4 rounded-xl border-4 border-[#4a752c] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                <div className="text-center">
                  <span className="text-[10px] uppercase text-[#a8e6cf] font-bold tracking-wider">Tesouro / Caixa</span>
                  <div className={`text-2xl font-black drop-shadow-[0_2px_0_#000] ${gameState.budget < 30 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {gameState.budget}%
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-[10px] uppercase text-[#a8e6cf] font-bold tracking-wider">Aceitação Social</span>
                  <div className={`text-2xl font-black drop-shadow-[0_2px_0_#000] ${gameState.reputation < 30 ? 'text-red-400' : 'text-blue-400'}`}>
                    {gameState.reputation}%
                  </div>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-xl border border-white/20 shadow-lg backdrop-blur-sm transition-all focus:outline-none shrink-0"
              title={isMaximized ? "Minimizar Jogo" : "Maximizar Jogo"}
            >
              {isMaximized ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {gamePhase === 'start' && (
            <motion.div 
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 px-6 text-center max-w-2xl mx-auto relative overflow-hidden"
            >
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-4xl font-black mb-2 text-[#a8e6cf] drop-shadow-[0_4px_0_#1e3610] uppercase tracking-widest">
                    Universidade<br/>Goyases
                  </h3>
                  <p className="text-[#d1f2e6] font-medium max-w-md mx-auto text-sm bg-black/40 px-4 py-2 rounded-lg border border-[#3a6020]">
                    Inicie sua jornada como Técnico. Controle as finanças, avance até a Reitoria e não seja pego pelo TCE!
                  </p>
                </div>

                <div className="bg-[#1e3610]/80 p-4 rounded-xl border-2 border-[#4a752c]">
                  <p className="text-[#a8e6cf] font-bold text-sm mb-4 uppercase tracking-wider">Qual o seu nome?</p>
                  <input 
                    type="text" 
                    value={playerName} 
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Ex: Ana, João..." 
                    className="w-full max-w-sm px-4 py-3 bg-[#0f1b08] text-[#a8e6cf] font-bold text-lg border-2 border-[#4a752c] rounded-xl focus:border-amber-400 focus:outline-none text-center shadow-inner"
                    maxLength={20}
                  />
                </div>
                <div className="bg-[#1e3610]/80 p-4 rounded-xl border-2 border-[#4a752c]">
                  <p className="text-[#a8e6cf] font-bold text-sm mb-4 uppercase tracking-wider">Escolha seu Avatar</p>
                  <div className="flex justify-center flex-wrap gap-2 md:gap-4 overflow-y-auto custom-scrollbar p-2">
                    {AVATARS.map((avatar) => (
                      <button
                        key={avatar}
                        onClick={() => setSelectedAvatar(avatar)}
                        className={`text-3xl md:text-4xl w-14 h-14 md:w-16 md:h-16 rounded-xl border-4 transition-all hover:scale-110 flex items-center justify-center bg-slate-800 ${
                          selectedAvatar === avatar 
                            ? 'border-amber-400 scale-110 shadow-[0_0_15px_rgba(251,191,36,0.6)]' 
                            : 'border-slate-600 opacity-70 hover:opacity-100'
                        }`}
                      >
                        {avatar}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={startLevel}
                  className="bg-amber-600 hover:bg-amber-500 text-amber-50 px-8 py-4 rounded font-bold transition flex items-center gap-2 mx-auto uppercase tracking-wider text-lg border-b-4 border-amber-900 active:border-b-0 active:translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.4)]"
                >
                  <Play className="w-6 h-6" /> Iniciar Jogo
                </button>
              </div>
            </motion.div>
          )}

          {gamePhase === 'map' && (
            <motion.div 
              key="map"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className={`flex flex-col ${isMaximized ? 'flex-1 h-full' : ''}`}
            >
              <GameMap 
                currentLevel={gameState.level} 
                onReachTarget={() => setGamePhase('scenario')}
                avatar={selectedAvatar}
                scenarios={scenarios}
                isMaximized={isMaximized}
              />
            </motion.div>
          )}

          {gamePhase === 'transition' && (
            <motion.div 
              key="transition"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <Sparkles className="w-24 h-24 mx-auto text-amber-400 mb-6 animate-pulse drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
                <h3 className="text-3xl md:text-4xl font-black text-amber-400 mb-4 drop-shadow-[0_4px_0_#b45309]">
                  {gameState.level === 2 ? "Acesso à Coordenação Administrativa!" : 
                   gameState.level === 4 ? "Acesso à Pró-Reitoria!" : 
                   gameState.level === 6 ? "Acesso à Vice-Reitoria!" :
                   gameState.level === 8 ? "Destaque e Eleições à Vista!" :
                   "Avanço de Carreira!"}
                </h3>
                <p className="text-lg text-[#a8e6cf] font-bold uppercase tracking-widest drop-shadow-[0_2px_0_#1e3610] max-w-xl mx-auto bg-[#1e3610]/80 p-4 rounded-xl border border-[#4a752c]">
                  {gameState.level === 2 ? `Excelente trabalho, ${playerName || 'Você'}! A forma como geriu a crise na Faculdade te levou para o núcleo estratégico. Os valores agora são mais altos, mas a cobrança também.` : 
                   gameState.level === 4 ? `Impressionante! A reitoria viu seu potencial com os orçamentos e te quer na Fundação de Apoio como Pró-Reitor.` : 
                   gameState.level === 6 ? `Sua gestão de crise salvou os estudantes da fome e do escuro! O Reitor te chamou para assumir a Vice-Reitoria e blindar as contas do ano.` : 
                   gameState.level === 8 ? `Seu talento para a transparência e comunicação brilhou. A universidade inteira anseia por você no cargo máximo!` : 
                   `Sua eficiência rendeu frutos. Continue assim no Nível ${gameState.level + 1}!`}
                </p>
                <div className="mt-8 text-6xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] animate-bounce">{selectedAvatar}</div>
              </div>
            </motion.div>
          )}

          {gamePhase === 'scenario' && currentScenario && (
            <motion.div 
              key="scenario"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full flex justify-center py-4"
            >
              {gameState.casesCompleted === currentScenarioIndex ? (
                 <DialogBox 
                    npcAvatar={currentScenario.npcAvatar} 
                    npcName={currentScenario.npcName}
                    text={
                       <div>
                          <p>{currentScenario.intro}</p>
                          <div className="mt-4 p-3 bg-black/10 border-l-4 border-[#b45309] text-[#92400e] font-black italic">
                             {currentScenario.dilemma}
                          </div>
                       </div>
                    }
                 >
                    {currentScenario.type === 'choice' ? (
                       <div className="flex flex-col gap-3 mt-4">
                         {currentScenario.options?.map((opt, idx) => (
                           <button
                             key={idx}
                             onClick={() => handleDecision(opt.impact, opt.feedback)}
                             className="text-left bg-[#fef3c7] hover:bg-[#ffe4e6] border-4 border-[#d97706] hover:border-[#e11d48] p-4 rounded shadow-[0_4px_0_#b45309] hover:shadow-[0_2px_0_#9f1239] hover:translate-y-[2px] transition-all font-bold text-[#92400e]"
                           >
                             {opt.text}
                           </button>
                         ))}
                       </div>
                    ) : (
                       <div className="mt-4 bg-[#fef3c7] p-4 rounded border-4 border-[#d97706] shadow-inner text-[#92400e]">
                          <div className="flex justify-between items-end mb-4 border-b-2 border-[#d97706] pb-2">
                              <div>
                                  <h4 className="font-bold uppercase tracking-wider mb-1">Distribuição</h4>
                                  <p className="text-xs font-bold">Total disponível: R$ {totalBudget}</p>
                              </div>
                              <div className="text-right">
                                  <span className="text-xs uppercase tracking-wider block font-bold">Restante</span>
                                  <span className={`text-xl font-black ${remainingBudget === 0 ? 'text-emerald-700' : remainingBudget < 0 ? 'text-red-600' : 'text-[#d97706]'}`}>
                                      R$ {remainingBudget}
                                  </span>
                              </div>
                          </div>
                          
                          <div className="space-y-4">
                              {currentScenario.allocationTask?.areas.map(area => (
                                  <div key={area.id}>
                                      <div className="flex justify-between mb-1">
                                          <label className="text-sm font-black">{area.name}</label>
                                          <span className="text-sm font-bold">R$ {allocations[area.id]}</span>
                                      </div>
                                      <input 
                                          type="range" 
                                          min={area.min} max={area.max} step={area.step}
                                          value={allocations[area.id]}
                                          onChange={(e) => setAllocations(prev => ({...prev, [area.id]: parseInt(e.target.value)}))}
                                          className="w-full h-3 bg-[#d97706] rounded-lg appearance-none cursor-pointer accent-[#78350f]"
                                      />
                                  </div>
                              ))}
                          </div>

                          <div className="mt-6 text-right">
                              <button 
                                  onClick={handleAllocationSubmit}
                                  disabled={remainingBudget !== 0}
                                  className={`px-6 py-2 rounded font-black border-b-4 transition-all w-full uppercase tracking-wider ${remainingBudget === 0 ? 'bg-emerald-500 hover:bg-emerald-400 text-emerald-950 border-emerald-700 hover:border-emerald-600 hover:translate-y-1 shadow-[0_4px_0_rgba(4,120,87,1)]' : 'bg-[#d1d5db] text-[#9ca3af] border-[#9ca3af] cursor-not-allowed hidden'}`}
                              >
                                  Confirmar Diálogo
                              </button>
                          </div>
                       </div>
                    )}
                 </DialogBox>
              ) : (
                 <DialogBox
                    npcAvatar={currentScenario.npcAvatar} 
                    npcName={currentScenario.npcName}
                    text={
                       <div>
                          {/* Feedback of the action */}
                          {!quizPassed && (
                              <div className="mb-4 bg-white/40 p-3 rounded border-2 border-[#d97706] italic font-bold">
                                 {gameState.log[gameState.log.length - 1]}
                              </div>
                          )}
                          
                          {/* Quiz Question or Quiz Passed Feedback */}
                          {quizPassed ? (
                              <div className="space-y-4">
                                  <p className="text-emerald-700 font-black text-2xl uppercase tracking-widest">{quizFeedback}</p>
                                  <p className="font-medium bg-white/40 p-3 rounded border-2 border-emerald-500">{currentScenario.quiz.explanation}</p>
                                  <p className="font-black text-[#92400e] text-xl bg-[#fcd34d] p-3 border-l-4 border-[#b45309]">{currentScenario.nextLevelHint}</p>
                              </div>
                          ) : (
                              <p className="font-black text-xl border-l-4 border-[#b45309] pl-3 py-1">Pergunta: {currentScenario.quiz.question}</p>
                          )}
                       </div>
                    }
                 >
                    {!quizPassed ? (
                       <div className="flex flex-col gap-2 mt-4">
                         {currentScenario.quiz.options.map((opt, idx) => (
                           <button
                             key={idx}
                             onClick={() => handleQuiz(idx, currentScenario.quiz.answer)}
                             className={`text-left p-3 rounded font-bold border-4 transition-all ${
                               activeQuizSelected === idx 
                                 ? (idx === currentScenario.quiz.answer ? 'bg-emerald-200 border-emerald-500 text-emerald-800' : 'bg-red-200 border-red-500 text-red-800')
                                 : 'bg-[#fef3c7] hover:bg-white border-[#d97706] text-[#92400e] shadow-[0_4px_0_#b45309] hover:translate-y-[2px] hover:shadow-[0_2px_0_#b45309]'
                             }`}
                           >
                             {opt}
                           </button>
                         ))}
                       </div>
                    ) : (
                       <div className="mt-6 flex justify-end">
                           <button
                             onClick={advanceLevel}
                             className="bg-sky-500 hover:bg-sky-400 text-sky-950 font-black px-8 py-3 rounded border-4 border-sky-700 shadow-[0_4px_0_rgba(3,105,161,1)] hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wider text-xl"
                           >
                             Continuar
                           </button>
                       </div>
                    )}
                 </DialogBox>
              )}
            </motion.div>
          )}

          {gamePhase === 'end' && (
            <motion.div 
              key="end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 px-6 text-center relative overflow-hidden"
            >
              {(() => {
                const totalMistakes = gameState.mistakesByLevel.reduce((sum, m) => sum + m.count, 0);
                const isFlawless = totalMistakes === 0;
                const score = Math.max(0, 100 - (totalMistakes * 8));

                return (
                  <div className="relative z-10 w-full max-w-2xl mx-auto">
                    {isFlawless && (
                      <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-amber-400/20 z-0 pointer-events-none rounded-3xl"
                      />
                    )}
                    <div className="text-6xl mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] relative z-10">{selectedAvatar}</div>
                    <h3 className="text-3xl md:text-5xl font-black text-[#a8e6cf] mb-4 drop-shadow-[0_4px_0_#1e3610] uppercase tracking-widest relative z-10">
                      {isFlawless ? "Lenda Universitária!" : "Posse como Reitor(a)!"}
                    </h3>
                    <p className="text-[#d1f2e6] mb-8 font-medium bg-black/40 px-6 py-4 rounded-xl border border-[#3a6020] relative z-10">
                      {isFlawless 
                          ? "PERFEITO! Você enfrentou todos os dilemas sem errar. A universidade prosperará pelas próximas décadas graças a você!"
                          : "Você chegou ao topo da Universidade Goyases! Seu brilhantismo fez de você o novo líder eleito. Parabéns pela jornada!"}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
                      <div className="bg-[#1e3610]/80 px-4 py-4 rounded-xl border-2 border-[#4a752c] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                        <div className="text-[#a8e6cf] text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Nota Final</div>
                        <div className="text-2xl md:text-3xl font-black text-amber-400 drop-shadow-[0_2px_0_#000]">{score}</div>
                      </div>
                      <div className="bg-[#1e3610]/80 px-4 py-4 rounded-xl border-2 border-[#4a752c] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                        <div className="text-[#a8e6cf] text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Orçamento</div>
                        <div className="text-2xl md:text-3xl font-black text-emerald-400 drop-shadow-[0_2px_0_#000]">{gameState.budget}%</div>
                      </div>
                      <div className="bg-[#1e3610]/80 px-4 py-4 rounded-xl border-2 border-[#4a752c] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                        <div className="text-[#a8e6cf] text-[10px] md:text-xs uppercase tracking-widest font-bold mb-1">Reputação</div>
                        <div className="text-2xl md:text-3xl font-black text-blue-400 drop-shadow-[0_2px_0_#000]">{gameState.reputation}%</div>
                      </div>
                    </div>

                    {!isFlawless && renderMistakeReport(false)}
                    
                    <button 
                      onClick={() => {
                          setGameState({ level: 0, budget: 50, reputation: 50, casesCompleted: 0, log: [], mistakesByLevel: [] });
                          setGamePhase('start');
                          scrollToGame();
                      }}
                      className="bg-amber-600 hover:bg-amber-500 text-amber-50 px-8 py-3 rounded font-bold transition flex items-center justify-center gap-2 mx-auto uppercase tracking-wider border-b-4 border-amber-900 active:border-b-0 active:translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.4)] relative z-10 w-full md:w-auto"
                    >
                      Ver Novo Relatório do Mandato (Jogar Novamente)
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* GAME OVER SCREEN */}
          {gamePhase === 'gameover' && (
            <motion.div 
              key="gameover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-6 text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-black text-rose-500 mb-6 tracking-tight drop-shadow-[0_4px_0_#4c0519] uppercase">
                Fim de Jogo!
              </h2>
              <div className="flex justify-center mb-8">
                <div className="bg-rose-950 p-6 rounded-full border-4 border-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.4)]">
                  <AlertTriangle size={80} className="text-rose-400" />
                </div>
              </div>
              <p className="text-xl text-rose-200 mb-8 font-bold px-4 bg-rose-950/50 p-6 rounded-xl border border-rose-800">
                A universidade entrou em colapso devido à falta de recursos ou erros consecutivos graves durante a sua gestão.
              </p>

              {renderMistakeReport(true)}

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => {
                    setGameState({ level: 0, budget: 50, reputation: 50, casesCompleted: 0, log: [], mistakesByLevel: [] });
                    setGamePhase('start');
                    scrollToGame();
                  }}
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl shadow-[0_4px_0_#0f172a] hover:shadow-[0_2px_0_#0f172a] hover:translate-y-[2px] transition-all uppercase w-full md:w-auto border border-slate-600"
                >
                  <RotateCcw size={20} /> Tentar Novamente
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (isMaximized) {
    return createPortal(
      <div className="fixed inset-0 z-[99999] bg-black overflow-y-auto custom-scrollbar p-0 md:p-0">
        {content}
      </div>,
      document.body
    );
  }

  return content;
}
