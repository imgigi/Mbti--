
import React, { useEffect, useState, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { PROFILES } from '../constants';
import { MBTIProfile, ResultData } from '../types';
import { generatePersonalityTip } from '../services/geminiService';
import { Loader2, RefreshCw, User, Zap, Map, Heart, Briefcase, Sprout, Sparkles, ExternalLink, Download, Target, Moon, BarChart2 } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ResultPageProps {
  resultData: ResultData;
  onRetake: () => void;
}

const ContentItem = ({ title, desc, colorClass = "text-slate-800" }: { title: string, desc: string, colorClass?: string }) => (
  <div className="mb-4 last:mb-0">
    <h4 className={`text-sm font-bold ${colorClass} mb-1`}>{title}</h4>
    <p className="text-sm text-slate-600 leading-relaxed text-justify">{desc}</p>
  </div>
);

export const ResultPage: React.FC<ResultPageProps> = ({ resultData, onRetake }) => {
  const profile: MBTIProfile = PROFILES[resultData.mainCode];
  const subProfile: MBTIProfile = PROFILES[resultData.subCode]; 
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTip = async () => {
      if (profile) {
        const tip = await generatePersonalityTip(profile);
        setAiTip(tip);
        setLoadingTip(false);
      }
    };
    fetchTip();
  }, [profile]);

  const handleShare = async () => {
    if (!resultRef.current) return;
    setIsSharing(true);
    const scrollPos = window.scrollY;
    try {
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 300));
      const element = resultRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        height: element.scrollHeight,
        windowHeight: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        ignoreElements: (element) => element.id === 'footer-actions',
      });
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement('a');
      link.href = image;
      link.download = `MBTI-SpeedRun-${profile.code}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Screenshot failed:', error);
      alert('生成图片失败，请尝试手动截屏保存');
    } finally {
      window.scrollTo(0, scrollPos);
      setIsSharing(false);
    }
  };

  if (!profile) return <div>Error loading result</div>;

  const radarData = [
    { subject: '理性逻辑', A: profile.radarStats.logic, fullMark: 100 },
    { subject: '计划掌控', A: profile.radarStats.control, fullMark: 100 },
    { subject: '社群联结', A: profile.radarStats.social, fullMark: 100 },
    { subject: '宏观抽象', A: profile.radarStats.abstract, fullMark: 100 },
  ];

  const ProgressRow = ({ leftLabel, rightLabel, leftVal, rightVal, colorClass }: any) => (
    <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
      <div className="w-6 flex justify-center">
        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${leftVal >= rightVal ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400'}`}>
          {leftLabel}
        </span>
      </div>
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden flex relative">
        <div className={`h-full ${colorClass} transition-all duration-1000`} style={{ width: `${leftVal}%` }}></div>
        <div className="h-full bg-slate-200 transition-all duration-1000" style={{ width: `${rightVal}%` }}></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/50 -translate-x-1/2"></div>
      </div>
      <div className="w-6 flex justify-center">
        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${rightVal > leftVal ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400'}`}>
          {rightLabel}
        </span>
      </div>
    </div>
  );

  return (
    <div ref={resultRef} className="flex flex-col bg-white relative min-h-screen">
      
      {/* 1. Hero Section */}
      <div className="relative bg-white pt-12 pb-10 px-6 rounded-b-[2.5rem] shadow-xl shadow-slate-100 overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50/50 via-white to-white pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
           <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-wider mb-6 uppercase">
                <Target className="w-3 h-3" /> Main Personality
              </div>
              <h1 className="text-8xl font-black text-slate-900 tracking-tighter mb-2 leading-none filter drop-shadow-sm">
                {profile.code}
              </h1>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{profile.name}</h2>
              <div className="flex flex-wrap justify-center gap-2 mb-5 px-4">
                  {profile.keywords.map((kw, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white border border-slate-100 shadow-sm text-slate-500 text-[10px] rounded-md font-bold">
                      #{kw}
                    </span>
                  ))}
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed italic max-w-xs mx-auto">
                “{profile.slogan}”
              </p>
           </div>

           <div className="w-full bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left shadow-inner">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200/60 border-dashed">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-purple-600">
                      <Moon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">潜意识 / 副人格</div>
                      <div className="text-sm font-bold text-slate-700">
                        {resultData.subCode} <span className="text-slate-400 font-normal mx-1">·</span> {subProfile?.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                     <div className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-md">
                       Secondary
                     </div>
                  </div>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center gap-2 mb-1">
                    <BarChart2 className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">维度分析</span>
                 </div>
                 <ProgressRow leftLabel="I" rightLabel="E" leftVal={resultData.percentages.I} rightVal={resultData.percentages.E} colorClass="bg-indigo-500" />
                 <ProgressRow leftLabel="N" rightLabel="S" leftVal={resultData.percentages.N} rightVal={resultData.percentages.S} colorClass="bg-purple-500" />
                 <ProgressRow leftLabel="F" rightLabel="T" leftVal={resultData.percentages.F} rightVal={resultData.percentages.T} colorClass="bg-pink-500" />
                 <ProgressRow leftLabel="J" rightLabel="P" leftVal={resultData.percentages.J} rightVal={resultData.percentages.P} colorClass="bg-rose-500" />
              </div>
           </div>
        </div>
      </div>

      <div className="bg-slate-50 pt-6 pb-6 px-6 space-y-6 flex-1">
          
          {/* 2. Archetype */}
          <SectionCard icon={<User className="w-4 h-4 text-white" />} title="人格原型" color="bg-pink-500">
             <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex-1 min-w-[120px] bg-pink-50/50 p-4 rounded-xl text-center border border-pink-100">
                   <p className="text-[10px] text-pink-400 font-bold mb-2 uppercase tracking-wider">Fictional</p>
                   <a href={`https://baike.baidu.com/item/${profile.archetype.fictional}`} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 text-sm hover:text-pink-600 flex items-center justify-center gap-1.5 transition-colors group">
                     {profile.archetype.fictional}
                     <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-pink-500" />
                   </a>
                </div>
                <div className="flex-1 min-w-[120px] bg-pink-50/50 p-4 rounded-xl text-center border border-pink-100">
                   <p className="text-[10px] text-pink-400 font-bold mb-2 uppercase tracking-wider">Real World</p>
                   <a href={`https://baike.baidu.com/item/${profile.archetype.historical}`} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 text-sm hover:text-pink-600 flex items-center justify-center gap-1.5 transition-colors group">
                     {profile.archetype.historical}
                     <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-pink-500" />
                   </a>
                </div>
             </div>
          </SectionCard>

          {/* 3. Mind Map */}
          <SectionCard icon={<Map className="w-4 h-4 text-white" />} title="心灵地图" color="bg-purple-500">
            <div className="h-[220px] w-full -ml-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Talent" dataKey="A" stroke="#8b5cf6" strokeWidth={3} fill="#8b5cf6" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                {profile.drivers.map((d,i) => (
                    <div key={i} className="text-[10px] bg-purple-50 text-purple-700 px-2 py-1.5 rounded-md text-center font-bold border border-purple-100">
                        🔥 {d}
                    </div>
                ))}
            </div>
          </SectionCard>

          {/* 4. Ability Analysis (Superpowers & Blindspots) */}
          <SectionCard icon={<Zap className="w-4 h-4 text-white" />} title="能力分析" color="bg-yellow-500">
             <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-4 bg-green-400 rounded-full"></div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Superpowers</h4>
                  </div>
                  <div className="space-y-3">
                    {profile.superpowers.map((sp, i) => (
                      <ContentItem key={i} title={`${i+1}. ${sp.title}`} desc={sp.desc} colorClass="text-slate-700" />
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-4 bg-red-400 rounded-full"></div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Blind Spots</h4>
                  </div>
                  <div className="space-y-3">
                    {profile.blindspots.map((bs, i) => (
                      <ContentItem key={i} title={`${i+1}. ${bs.title}`} desc={bs.desc} colorClass="text-slate-700" />
                    ))}
                  </div>
                </div>
             </div>
          </SectionCard>

          {/* 5. Relationship Galaxy */}
          <SectionCard icon={<Heart className="w-4 h-4 text-white" />} title="关系星系" color="bg-red-500">
             <div className="flex flex-col gap-3">
                <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold border border-green-200 shadow-sm">
                      合
                   </div>
                   <div>
                     <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider mb-1">Best Match</p>
                     <p className="text-base font-bold text-slate-800">{profile.relationships.strong.join(' · ')}</p>
                   </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold border border-orange-200 shadow-sm">
                      磨
                   </div>
                   <div>
                     <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-1">Challenge</p>
                     <p className="text-base font-bold text-slate-800">{profile.relationships.weak.join(' · ')}</p>
                   </div>
                </div>
             </div>
          </SectionCard>

          {/* 6. Career Path */}
          <SectionCard icon={<Briefcase className="w-4 h-4 text-white" />} title="天命职业" color="bg-blue-500">
            <div className="space-y-4">
              {profile.careers.map((career, i) => (
                <div key={i} className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                  <h4 className="text-sm font-bold text-blue-800 mb-1">{career.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{career.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

           {/* 7. Growth Guide */}
           <SectionCard icon={<Sprout className="w-4 h-4 text-white" />} title="成长指南" color="bg-emerald-500">
             <div className="space-y-4">
               {profile.growth.map((g, i) => (
                 <div key={i} className="flex items-start gap-3">
                   <div className="w-5 h-5 rounded-full border-2 border-emerald-400 flex items-center justify-center flex-shrink-0 bg-white mt-0.5">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-slate-700 mb-1">{g.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">{g.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </SectionCard>

           {/* AI Extension */}
           <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[1px] rounded-2xl shadow-lg shadow-purple-100">
              <div className="bg-white rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                   <Sparkles className="w-4 h-4 text-purple-500" />
                   <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase tracking-wider">AI Fortune Cookie</span>
                </div>
                {loadingTip ? (
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Loader2 className="w-3 h-3 animate-spin" /> 正在读取宇宙信号...
                   </div>
                ) : (
                  <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                    "{aiTip || "保持真实，做你自己！"}"
                  </p>
                )}
              </div>
           </div>

      </div>

      {/* Footer Actions */}
      <div id="footer-actions" className="p-6 border-t border-slate-100 bg-white sticky bottom-0 z-50">
        <div className="flex gap-4">
          <button 
            onClick={onRetake}
            disabled={isSharing}
            className="flex-1 py-3.5 border-2 border-slate-100 rounded-xl text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-200 flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            <RefreshCw className="w-4 h-4" /> 再测一次
          </button>
          <button 
            className="flex-1 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 flex items-center justify-center gap-2 shadow-lg shadow-slate-200 transition-all active:scale-95 disabled:opacity-70 disabled:scale-100"
            onClick={handleShare}
            disabled={isSharing}
          >
             {isSharing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
             {isSharing ? '生成中...' : '保存长图'}
          </button>
        </div>
      </div>
    </div>
  );
};

const SectionCard = ({ icon, title, color, children }: { icon: React.ReactNode, title: string, color: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-transform hover:scale-[1.01] duration-300">
    <div className="px-5 py-4 border-b border-slate-50 flex items-center gap-3 bg-gradient-to-r from-slate-50/50 to-white">
      <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center shadow-sm text-white`}>
        {icon}
      </div>
      <h3 className="font-bold text-slate-800 text-sm tracking-tight">{title}</h3>
    </div>
    <div className="p-5">
      {children}
    </div>
  </div>
);
