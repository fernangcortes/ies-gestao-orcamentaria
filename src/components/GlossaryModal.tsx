import React from 'react';
import { X, CheckCircle2, RefreshCw, ArrowDown, Scale, LayoutTemplate, FileText, AlertTriangle, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GlossaryTerm, VisualType } from '../types/glossary';

interface GlossaryModalProps {
  term: GlossaryTerm;
  onClose: () => void;
}

export function GlossaryModal({ term, onClose }: GlossaryModalProps) {
  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const renderVisualData = () => {
    if (!term.visualData || term.visualData.length === 0) return null;
    const data = term.visualData;

    switch (term.visualType) {
      case 'cycle':
        return (
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-6">
            {data.map((v, i) => (
              <React.Fragment key={i}>
                <div className={`px-4 py-3 rounded-xl shadow-sm text-center font-medium bg-${v.color}-100 text-${v.color}-800 border border-${v.color}-200 w-full md:w-auto flex items-center justify-center`}>
                  {v.label}
                </div>
                {i < data.length - 1 && (
                  <div className="text-slate-400">
                    <RefreshCw className="w-5 h-5 hidden md:block" />
                    <ArrowDown className="w-5 h-5 md:hidden" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        );
      case 'balance':
        return (
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-6 relative">
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none opacity-[0.05]">
               <Scale className="w-48 h-48 text-slate-800" />
            </div>
            {data.map((v, i) => (
              <React.Fragment key={i}>
                <div className={`z-10 px-6 py-4 rounded-xl shadow-md text-center font-bold bg-${v.color}-100 text-${v.color}-800 border-2 border-${v.color}-300 flex-1 w-full flex items-center justify-center transform hover:-translate-y-1 transition-transform`}>
                  {v.label}
                </div>
                {i < data.length - 1 && (
                  <div className="text-slate-400 z-10 bg-white rounded-full p-2 shadow-sm border border-slate-100 hidden md:block">
                    <Scale className="w-6 h-6" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        );
      case 'hierarchy':
        return (
           <div className="flex flex-col items-center py-6 w-full">
             {data.length > 0 && (
                <div className={`px-6 py-3 rounded-xl shadow-md text-center font-bold bg-${data[0].color}-100 text-${data[0].color}-800 border-2 border-${data[0].color}-300 mb-0 z-10`}>
                   {data[0].label}
                </div>
             )}
             {data.length > 1 && (
                <>
                  <div className="w-px h-6 bg-slate-300"></div>
                  <div className="w-3/4 h-px bg-slate-300"></div>
                  <div className="flex w-full justify-center gap-4">
                    {data.slice(1).map((v, i) => (
                      <div key={i} className="flex flex-col items-center flex-1 max-w-[200px]">
                        <div className="w-px h-6 bg-slate-300 mb-2"></div>
                        <div className={`px-4 py-3 rounded-xl shadow-sm text-center font-medium bg-${v.color}-50 text-${v.color}-700 border border-${v.color}-200 w-full h-full flex items-center justify-center text-[13px] leading-tight`}>
                          {v.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
             )}
           </div>
        );
      case 'process':
        return (
          <div className="flex flex-col md:flex-row gap-0 items-stretch justify-center py-6 rounded-xl overflow-hidden w-full">
             {data.map((v, i) => (
                <div key={i} className={`flex-1 flex flex-col pt-4 pb-4 px-4 items-center justify-center bg-${v.color}-100 text-${v.color}-800 ${i !== 0 ? 'md:border-l-4 md:border-t-0 border-t-4' : ''} border-white relative`}>
                   <div className={`w-8 h-8 rounded-full bg-${v.color}-200 text-${v.color}-800 font-bold flex items-center justify-center mb-2 z-10 text-sm`}>
                      {i + 1}
                   </div>
                   <div className="text-center font-medium z-10 text-sm">{v.label}</div>
                </div>
             ))}
          </div>
        );
      case 'structure':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 w-full">
            {data.map((v, i) => (
               <div key={i} className={`px-4 py-5 rounded-xl shadow-sm bg-${v.color}-50 text-${v.color}-800 border-l-4 border-${v.color}-500 flex items-center gap-3`}>
                  <LayoutTemplate className={`w-6 h-6 text-${v.color}-500 opacity-70 flex-shrink-0`} />
                  <span className="font-semibold text-sm leading-tight">{v.label}</span>
               </div>
            ))}
          </div>
        )
      case 'document':
        return (
          <div className="flex flex-col items-center justify-center py-6 w-full">
             <div className="bg-amber-50 border border-amber-200 shadow-md w-full max-w-md rounded-lg p-6 relative">
                 <div className="absolute top-0 right-8 w-8 h-12 bg-amber-200/50 -translate-y-2 opacity-50"></div>
                 {data.map((v, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                       <FileText className={`w-5 h-5 mt-0.5 text-${v.color}-500 flex-shrink-0`} />
                       <div>
                          <div className={`font-bold text-${v.color}-800 leading-tight text-sm`}>{v.label}</div>
                       </div>
                    </div>
                 ))}
             </div>
          </div>
        )
      case 'alert':
         return (
            <div className="py-6 px-0 w-full">
              {data.map((v, i) => (
                <div key={i} className={`bg-red-50 border border-red-200 shadow-sm rounded-xl p-4 flex items-center gap-4 mb-3 last:mb-0`}>
                   <div className="bg-red-100 p-3 rounded-full flex-shrink-0 text-red-500">
                      <AlertTriangle className="w-6 h-6" />
                   </div>
                   <div className="font-bold text-red-800 text-sm">{v.label}</div>
                </div>
              ))}
            </div>
         );
      case 'metric':
         return (
            <div className="py-6 flex flex-wrap gap-4 justify-center w-full">
               {data.map((v, i) => (
                 <div key={i} className={`flex-1 min-w-[200px] bg-slate-50 border border-slate-200 p-5 rounded-2xl flex flex-col items-center justify-center`}>
                    <div className={`text-4xl font-black text-${v.color}-600 mb-2`}>
                       <TrendingUp className="w-8 h-8 inline-block mr-2" />
                    </div>
                    <div className="text-center font-bold text-slate-700 text-sm">{v.label}</div>
                 </div>
               ))}
            </div>
         )
      default:
        return (
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-6 w-full">
            {data.map((v, i) => (
              <React.Fragment key={i}>
                <div className={`px-4 py-3 rounded-xl shadow-sm text-center font-medium bg-${v.color}-100 text-${v.color}-800 border border-${v.color}-200 flex-1 w-full md:w-auto flex items-center justify-center`}>
                  {v.label}
                </div>
                {i < data.length - 1 && (
                  <div className="text-slate-300 hidden md:block">
                    +
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100000] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white border-b border-slate-100 p-6 flex justify-between items-start z-10 flex-shrink-0">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-teal-100 text-teal-800 rounded-full uppercase tracking-wider mb-2 inline-block">
                {term.category}
              </span>
              <h2 className="text-2xl font-bold text-slate-800">{term.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors mt-[-0.5rem] mr-[-0.5rem]"
            >
              <X className="w-6 h-6 text-slate-500" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto custom-scrollbar w-full space-y-8">
            <div className="w-full">
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                {term.shortDesc}
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed whitespace-pre-wrap">
                {term.longDesc}
              </p>
            </div>

            {/* Visual Resource Section */}
            {term.visualData && term.visualData.length > 0 && (
              <div className="w-full relative">
                {renderVisualData()}
              </div>
            )}

            {/* Examples Section */}
            {term.examples && term.examples.length > 0 && (
              <div className="w-full border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  Aplicações Práticas na IES
                </h3>
                <div className="space-y-3">
                  {term.examples.map((ex, idx) => (
                    <div key={idx} className="bg-teal-50 border border-teal-100 p-4 rounded-xl flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-700 leading-relaxed text-sm">{ex}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
