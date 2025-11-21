
import React from 'react';
import { ArrowRight, Timer, FileText, Target, Moon, BarChart2, Lightbulb, Heart, Zap, MessageCircle, RefreshCw } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="bg-white min-h-full flex flex-col relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-50 to-white pointer-events-none" />
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col flex-1 px-6 pt-10 pb-6">
        
        {/* ① Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-wider mb-6 uppercase shadow-lg shadow-slate-200">
            MBTI Speed Run
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
            30秒 MBTI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">快速人格测评</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm mb-5">
            ✨我到底是什么样的人✨
          </p>
        </div>

        {/* ② Intro Section */}
        <div className="mb-8 text-center">
          <p className="text-xs leading-relaxed text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
            本测评基于 <span className="font-bold text-slate-700">MBTI 四大维度理论</span>，结合实际行为场景设定，让你用最自然的选择，在 <span className="font-bold text-slate-700">8题以内</span> 就能找到与你最接近的人格原型。
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">题目数量</div>
              <div className="text-sm font-bold text-slate-800">8 题</div>
            </div>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
              <Timer className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">预计时长</div>
              <div className="text-sm font-bold text-slate-800">30 秒</div>
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
                <h4 className="font-bold text-slate-800 text-sm mb-1">速通版简单直接</h4>
                <p className="text-xs text-slate-500 leading-relaxed">30 秒就能测完，不用答一大堆题。</p>
              </div>
           </div>
           
           <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">真实情境好选择</h4>
                <p className="text-xs text-slate-500 leading-relaxed">题目都是日常场景，不会卡住。</p>
              </div>
           </div>

           <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">可反复测试</h4>
                <p className="text-xs text-slate-500 leading-relaxed">随时重测、随时刷新。</p>
              </div>
           </div>
        </div>

        {/* ③ Preview Section (Updated to White Theme) */}
        <div className="flex-1">
           <div className="flex items-center gap-2 mb-3 px-1">
             <div className="w-1 h-4 bg-purple-600 rounded-full"></div>
             <h4 className="font-bold text-slate-800 text-sm">测评结果包含：</h4>
           </div>
           
           <div className="bg-white border-2 border-slate-100 rounded-2xl p-5 shadow-xl shadow-slate-100 relative overflow-hidden">
              {/* Decorative background blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
              
              <div className="space-y-3 relative z-10">
                 <PreviewItem 
                    icon={<Target className="w-3.5 h-3.5 text-purple-600" />} 
                    bg="bg-purple-50"
                    text="主人格类型" 
                 />
                 <PreviewItem 
                    icon={<Moon className="w-3.5 h-3.5 text-indigo-600" />} 
                    bg="bg-indigo-50"
                    text="副人格类型 / 潜意识" 
                 />
                 <PreviewItem 
                    icon={<Lightbulb className="w-3.5 h-3.5 text-amber-600" />} 
                    bg="bg-amber-50"
                    text="社交特质、思考模式" 
                 />
                 <PreviewItem 
                    icon={<Heart className="w-3.5 h-3.5 text-rose-600" />} 
                    bg="bg-rose-50"
                    text="职业建议 & 情感风格" 
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
            开始测试 <ArrowRight className="w-5 h-5" />
          </button>
          
          {/* ⑧ Footer Disclaimer */}
          <p className="text-[10px] text-slate-400 text-center mt-4 leading-tight px-4">
            本测试参考 MBTI 理论与行为心理学模型，仅供自我认知参考，不构成专业心理诊断。
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
