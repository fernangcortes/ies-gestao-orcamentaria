import React, { useState, useEffect } from 'react';
import { Search, Globe, Layout, X, Zap } from 'lucide-react';
import { searchLinks, glossaryTerms } from '../data/search';
import { allGlossaryTerms } from '../data/glossary';
import { GlossaryTerm } from '../types/glossary';

interface SearchModalProps {
  onClose: () => void;
  onSelectTerm?: (term: GlossaryTerm) => void;
}

export default function SearchModal({ onClose, onSelectTerm }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Combine links and glossary for universal search
  const combinedData = [
    ...searchLinks,
    ...allGlossaryTerms.map(term => ({
      type: 'glossary',
      title: term.title,
      url: '#glossario',
      desc: term.shortDesc,
      termObj: term
    }))
  ];

  const trimmedQuery = query.trim().toLowerCase();

  const filteredData = trimmedQuery.length > 0 
    ? combinedData.filter(item => 
        item.title.toLowerCase().includes(trimmedQuery) || 
        item.desc.toLowerCase().includes(trimmedQuery)
      )
    : [];

  const siteResults = filteredData.filter(l => l.type === 'site' || l.type === 'glossary');
  const webResults = filteredData.filter(l => l.type === 'web');

  const handleResultClick = (item: any, e: React.MouseEvent) => {
    if (item.type === 'glossary' && onSelectTerm && item.termObj) {
      e.preventDefault();
      onSelectTerm(item.termObj);
      onClose();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 bg-slate-900/60 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]">
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 shrink-0">
          <Search className="text-slate-400 w-5 h-5" />
          <input
            autoFocus
            type="text"
            className="w-full outline-none text-lg text-slate-800 placeholder-slate-400 font-medium bg-transparent"
            placeholder="Pesquise por licitações, LDO, Empenho, Estágios..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
          {trimmedQuery.length === 0 ? (
            <div className="py-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" /> Acessos Rápidos
                </h3>
                <div className="flex flex-wrap gap-2">
                    <button onClick={() => setQuery("Licitações")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition">Licitações 14.133</button>
                    <button onClick={() => setQuery("Empenho")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition">Empenho / Liquidação</button>
                    <button onClick={() => setQuery("Custeio")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition">Sistemas de Custeio</button>
                    <button onClick={() => setQuery("Orçamento")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition">PPA, LDO e LOA</button>
                    <button onClick={() => setQuery("RP")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition">Restos a Pagar</button>
                    <button onClick={() => setQuery("ETP")} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition">ETP e TR</button>
                </div>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p>Nenhum resultado encontrado para "{query}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
              {/* Site & Glossary Results */}
              <div>
                <h3 className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layout className="w-4 h-4" /> Dicionário e Módulos
                </h3>
                <ul className="space-y-4">
                  {siteResults.length === 0 && <span className="text-slate-400 text-sm">Sem resultados internos.</span>}
                  {siteResults.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} onClick={(e) => handleResultClick(item, e)} className="block group">
                        <h4 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">
                            {item.title} 
                            {item.type === 'glossary' && <span className="ml-2 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Glossário</span>}
                        </h4>
                        <p className="text-sm text-slate-500 leading-snug mt-1">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Web Results */}
              <div>
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Leis e Portais Externos
                </h3>
                <ul className="space-y-4">
                  {webResults.length === 0 && <span className="text-slate-400 text-sm">Sem resultados externos.</span>}
                  {webResults.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                        <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                          {item.title}
                          <Globe className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-slate-500 leading-snug mt-1">{item.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 text-xs text-slate-500 flex justify-between shrink-0">
          <span>Resultados agrupados na base geral.</span>
          <span>Pressione ESC para fechar.</span>
        </div>
      </div>
    </div>
  );
}
