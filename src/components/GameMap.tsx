import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trees, MapPin, PackageOpen, MonitorCog, PiggyBank, BriefcaseBusiness, FlaskConical, Zap, HardHat, ScrollText, Tent, Landmark, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Scenario } from '../data/game';
import mapBackgroundImage from '../fundo-jogo-orcamento.webp';

interface GameMapProps {
  currentLevel: number;
  onReachTarget: () => void;
  avatar: string;
  scenarios: Scenario[];
  isMaximized?: boolean;
}

const IconMap: Record<string, React.ElementType> = {
  PackageOpen, MonitorCog, PiggyBank, BriefcaseBusiness, FlaskConical, Zap, HardHat, ScrollText, Tent, Landmark
};

export function GameMap({ currentLevel, onReachTarget, avatar, scenarios, isMaximized }: GameMapProps) {
  const [playerPos, setPlayerPos] = useState({ x: 50, y: 90 });
  const [isNearTarget, setIsNearTarget] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isNearTargetRef = useRef(false);
  const keys = useRef<{ [key: string]: boolean }>({});
  
  const targetScenario = scenarios.find(s => s.id === currentLevel);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = mapBackgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    if (!imageLoaded) return;
    if (currentLevel > 1) {
      const prevScenario = scenarios.find(s => s.id === currentLevel - 1);
      if (prevScenario) {
        setPlayerPos({ x: prevScenario.mapX, y: prevScenario.mapY + 5 });
      }
    } else {
        setPlayerPos({ x: 15, y: 95 });
    }
  }, [currentLevel, scenarios]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for arrow keys and space
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      keys.current[e.key] = true;
      if (e.key === 'Enter' && isNearTargetRef.current) {
        // Clear keys to stop movement
        keys.current = {};
        onReachTarget();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };
    
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp);
    
    let animationFrame: number;
    let lastTime = performance.now();

    const gameLoop = (time: number) => {
      const deltaTime = (time - lastTime) / 1000; // in seconds
      lastTime = time;
      
      const speed = 25; // units per second (independent of framerate)

      setPlayerPos(prev => {
        let newX = prev.x;
        let newY = prev.y;
        
        let dx = 0;
        let dy = 0;
        
        if (keys.current['ArrowUp'] || keys.current['w'] || keys.current['W']) dy -= 1;
        if (keys.current['ArrowDown'] || keys.current['s'] || keys.current['S']) dy += 1;
        if (keys.current['ArrowLeft'] || keys.current['a'] || keys.current['A']) dx -= 1;
        if (keys.current['ArrowRight'] || keys.current['d'] || keys.current['D']) dx += 1;
        
        // Normalize vector for diagonal movement
        if (dx !== 0 && dy !== 0) {
          const length = Math.sqrt(dx * dx + dy * dy);
          dx /= length;
          dy /= length;
        }

        newX += dx * speed * deltaTime;
        newY += dy * speed * deltaTime;
        
        newX = Math.max(2, Math.min(98, newX));
        newY = Math.max(2, Math.min(98, newY));

        if (targetScenario) {
          const dist = Math.hypot(newX - targetScenario.mapX, newY - targetScenario.mapY);
          const near = dist < 6;
          if (near !== isNearTargetRef.current) {
             isNearTargetRef.current = near;
             setIsNearTarget(near);
          }
        }

        return { x: newX, y: newY };
      });
      animationFrame = requestAnimationFrame(gameLoop);
    };
    animationFrame = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrame);
    };
  }, [targetScenario, onReachTarget, imageLoaded]);

  useEffect(() => {
    // No longer scrolling since the map fits the screen
  }, [playerPos.x, playerPos.y]);

  if (!imageLoaded) {
    return (
      <div className={`w-full h-full min-h-[550px] mb-8 bg-[#4a752c] rounded-2xl border-[6px] border-[#2e4a1b] flex flex-col items-center justify-center shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]`}>
        <div className="w-16 h-16 border-4 border-[#2e4a1b] border-t-[#a8e6cf] rounded-full animate-spin mb-6"></div>
        <h3 className="text-2xl font-black text-[#a8e6cf] mb-2 drop-shadow-[0_2px_0_#1e3610] tracking-widest uppercase">Gerando Orçamento...</h3>
        <p className="text-[#a8e6cf]/80 font-bold uppercase tracking-widest animate-pulse text-sm">Carregando Mapa do Campus</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div 
        className={`relative mx-auto ${isMaximized ? 'mb-4' : 'w-full mb-8'} border-[6px] border-[#2e4a1b] rounded-2xl p-0.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-[#4a752c] overflow-hidden shrink-0`}
      style={{
        aspectRatio: '1000 / 600',
        width: isMaximized ? '100%' : undefined,
        maxWidth: isMaximized ? 'calc(60vh * 1.666)' : '100%',
      }}
    >
      <div 
        className="w-full h-full relative cursor-crosshair rounded-xl overflow-hidden"
        style={{ 
          backgroundImage: `url(${mapBackgroundImage})`, 
          backgroundSize: '100% 100%', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Grass Texture Pattern */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#3a6020 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#2a4010 3px, transparent 3px)', backgroundSize: '32px 32px', backgroundPosition: '8px 8px' }}></div>
      
      <div className="absolute top-4 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="bg-black/90 text-white/90 text-xs md:text-sm uppercase font-bold tracking-widest px-6 py-3 rounded-full border border-white/20 shadow-lg backdrop-blur-sm animate-pulse">
           Mova no mapa (WASD ou Setas) até o seu objetivo
        </div>
      </div>

      {/* Buildings / POIs */}
      {scenarios.map((scenario) => {
        const isTarget = currentLevel === scenario.id;
        const isCompleted = currentLevel > scenario.id;
        const IconComponent = IconMap[scenario.iconName] || Landmark;
        
        return (
          <div
            key={scenario.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
            style={{ left: `${scenario.mapX}%`, top: `${scenario.mapY}%` }}
          >
            {/* Target Beacon */}
            {isTarget && (
               <div className="absolute -top-12 animate-bounce text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)] z-20">
                  <MapPin size={32} fill="currentColor" stroke="#78350f" strokeWidth={1.5} />
               </div>
            )}

            {/* Building Sprite Container */}
            <div className={`relative flex items-center justify-center group z-10
                ${isTarget ? 'scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]' : isCompleted ? 'opacity-80' : 'opacity-60 grayscale scale-90'}
            `}>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-xl flex items-center justify-center border-[3px] md:border-4
                    ${isCompleted ? 'bg-sky-800 border-sky-950' : isTarget ? 'bg-amber-500 border-[#78350f]' : 'bg-slate-700 border-slate-900'}
                `}>
                    <IconComponent size={28} className={`${isTarget ? 'text-[#78350f]' : 'text-white'}`} strokeWidth={isTarget ? 2.5 : 2} />
                </div>
            </div>

            {/* Label */}
            <div className={`mt-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center px-2 py-1 flex items-center justify-center rounded shadow-xl shadow-black/50 border z-10 w-fit min-w-[80px] max-w-[140px] break-words whitespace-normal
              ${isTarget ? 'bg-amber-900/90 text-amber-200 border-amber-500' : isCompleted ? 'bg-slate-800/90 text-sky-300 border-sky-700' : 'bg-slate-900/90 text-slate-400 border-slate-800 hidden group-hover:flex'}
            `}>
              {scenario.id}. {scenario.buildingName}
            </div>
          </div>
        );
      })}

      {/* Player Character */}
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ left: `${playerPos.x}%`, top: `${playerPos.y}%` }}
      >
        <div className="relative">
            <motion.div
               animate={{ 
                 y: [0, -4, 0], 
                 rotate: Object.values(keys.current).some(k => k) ? [-5, 5, -5] : 0 
               }}
               transition={{ repeat: Infinity, duration: 0.6 }} // Slower bounce
               className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] border-[3px] border-white rounded-full bg-slate-800 w-12 h-12 flex items-center justify-center text-3xl z-20 relative overflow-hidden shadow-inner"
            >
               {avatar}
            </motion.div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/40 rounded-[100%] blur-[2px] z-10"></div>
        </div>
      </div>


      {/* Interaction Prompt Overlay */}
      <AnimatePresence>
        {isNearTarget && targetScenario && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 border-2 border-amber-500 rounded-xl p-4 shadow-2xl z-50 flex flex-col items-center backdrop-blur-md min-w-[250px]"
          >
            <h3 className="text-amber-400 font-bold text-lg mb-1">{targetScenario.buildingName}</h3>
            <p className="text-white text-sm mb-3">Você chegou ao seu destino.</p>
            <button 
              onClick={onReachTarget}
              className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-black px-6 py-2 rounded shadow-[0_4px_0_#b45309] hover:translate-y-[2px] hover:shadow-[0_2px_0_#b45309] transition-all uppercase tracking-wider w-full"
            >
               Acessar Local (ENTER)
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
      </div>

      {/* Mobile D-Pad Controls - Now positioned below the map */}
      <div className="md:hidden flex flex-col items-center gap-2 mt-2 mb-8 opacity-90 active:opacity-100">
        <button 
          onPointerDown={(e) => { e.preventDefault(); keys.current['ArrowUp'] = true; }}
          onPointerUp={(e) => { e.preventDefault(); keys.current['ArrowUp'] = false; }}
          onPointerLeave={(e) => { e.preventDefault(); keys.current['ArrowUp'] = false; }}
          onContextMenu={(e) => e.preventDefault()}
          className="bg-slate-800 text-white p-4 rounded-2xl border-2 border-slate-600 active:bg-amber-500 active:border-amber-400 active:scale-95 transition-all select-none touch-none shadow-lg"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <ChevronUp size={28} strokeWidth={3} />
        </button>
        <div className="flex gap-2">
          <button 
            onPointerDown={(e) => { e.preventDefault(); keys.current['ArrowLeft'] = true; }}
            onPointerUp={(e) => { e.preventDefault(); keys.current['ArrowLeft'] = false; }}
            onPointerLeave={(e) => { e.preventDefault(); keys.current['ArrowLeft'] = false; }}
            onContextMenu={(e) => e.preventDefault()}
            className="bg-slate-800 text-white p-4 rounded-2xl border-2 border-slate-600 active:bg-amber-500 active:border-amber-400 active:scale-95 transition-all select-none touch-none shadow-lg"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </button>
          <button 
            onPointerDown={(e) => { e.preventDefault(); keys.current['ArrowDown'] = true; }}
            onPointerUp={(e) => { e.preventDefault(); keys.current['ArrowDown'] = false; }}
            onPointerLeave={(e) => { e.preventDefault(); keys.current['ArrowDown'] = false; }}
            onContextMenu={(e) => e.preventDefault()}
            className="bg-slate-800 text-white p-4 rounded-2xl border-2 border-slate-600 active:bg-amber-500 active:border-amber-400 active:scale-95 transition-all select-none touch-none shadow-lg"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronDown size={28} strokeWidth={3} />
          </button>
          <button 
            onPointerDown={(e) => { e.preventDefault(); keys.current['ArrowRight'] = true; }}
            onPointerUp={(e) => { e.preventDefault(); keys.current['ArrowRight'] = false; }}
            onPointerLeave={(e) => { e.preventDefault(); keys.current['ArrowRight'] = false; }}
            onContextMenu={(e) => e.preventDefault()}
            className="bg-slate-800 text-white p-4 rounded-2xl border-2 border-slate-600 active:bg-amber-500 active:border-amber-400 active:scale-95 transition-all select-none touch-none shadow-lg"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <ChevronRight size={28} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
