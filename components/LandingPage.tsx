
import React from 'react';
import { ArrowRight, Timer, FileText, Target, Moon, Lightbulb, Heart, Zap, MessageCircle, RefreshCw, Globe } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface LandingPageProps {
  onStart: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, language, onToggleLanguage }) => {
  const t = UI_TEXT[language];

  return (
    <div className="bg-white min-h-full flex flex-col relative overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button 
          onClick={onToggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-purple-600 transition-colors shadow-sm"
        >
          <Globe className="w-3.5 h-3.5" />
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-50 to-white pointer-events-none" />
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col flex-1 px-6 pt-10 pb-6">
        
        {/* ① Hero Section */}
        <div className="text-center mb-8 mt-6">
          {/* Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-wider mb-6 uppercase shadow-lg shadow-slate-200">
            {t.heroTag}
          </div>
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
            {t.heroTitle} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              {t.heroSubtitle}
            </span>
          </h1>
          {/* Question Subtext */}
          <p className="text-amber-500 font-bold text-sm mb-5 tracking-wide">
             {t.heroQuestion}
          </p>
        </div>

        {/* ② Intro Section */}
        <div className="mb-8 text-center">
          <p 
            className="text-xs leading-relaxed text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 text-left"
            dangerouslySetInnerHTML={{ __html: t.intro }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">{t.statsQuestion}</div>
              <div className="text-sm font-bold text-slate-800">{t.statsQValue}</div>
            </div>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
              <Timer className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">{t.statsTime}</div>
              <div className="text-sm font-bold text-slate-800">{t.statsTValue}</div>
            </div>
          </div>
        </div>

        {/* Selling Points */}
        <div className="grid grid-cols-1 gap-3 mb-8">
           <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{t.sellPoint1Title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{t.sellPoint1Desc}</p>
              </div>
           </div>
           
           <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{t.sellPoint2Title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{t.sellPoint2Desc}</p>
              </div>
           </div>

           <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{t.sellPoint3Title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{t.sellPoint3Desc}</p>
              </div>
           </div>
        </div>

        {/* ③ Preview Section */}
        <div className="flex-1">
           <div className="flex items-center gap-2 mb-3 px-1">
             <div className="w-1 h-4 bg-purple-600 rounded-full"></div>
             <h4 className="font-bold text-slate-800 text-sm">{t.previewTitle}</h4>
           </div>
           
           <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 shadow-xl shadow-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
              
              <div className="space-y-3 relative z-10">
                 <PreviewItem 
                    icon={<Target className="w-3.5 h-3.5 text-purple-600" />} 
                    bg="bg-purple-50"
                    text={t.preview1} 
                 />
                 <PreviewItem 
                    icon={<Moon className="w-3.5 h-3.5 text-indigo-600" />} 
                    bg="bg-indigo-50"
                    text={t.preview2} 
                 />
                 <PreviewItem 
                    icon={<Lightbulb className="w-3.5 h-3.5 text-amber-600" />} 
                    bg="bg-amber-50"
                    text={t.preview3} 
                 />
                 <PreviewItem 
                    icon={<Heart className="w-3.5 h-3.5 text-rose-600" />} 
                    bg="bg-rose-50"
                    text={t.preview4} 
                 />
              </div>
           </div>
        </div>

        {/* ⑦ CTA Section */}
        <div className="mt-8">
          <button 
            onClick={onStart}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-purple-200 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            {t.startBtn} <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* ⑧ Footer Disclaimer */}
          <p className="text-[10px] text-slate-400 text-center mt-4 leading-tight px-4">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};

const PreviewItem = ({ icon, text, bg }: { icon: React.ReactNode, text: string, bg: string }) => (
  <div className="flex items-center gap-3 group">
    <div className={`w-6 h-6 rounded-full ${bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <span className="text-sm font-bold text-slate-700">{text}</span>
  </div>
);
