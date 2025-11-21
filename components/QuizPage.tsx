
import React, { useState, useRef } from 'react';
import { QUESTION_TREE } from '../constants';
import { OptionNode, QuestionNode, ResultData } from '../types';

interface QuizPageProps {
  onFinish: (data: ResultData) => void;
}

interface OptionButtonProps {
  option: OptionNode;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ option, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 bg-white hover:border-purple-500 hover:bg-purple-50 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
    >
      <div className="relative z-10">
        <span className="font-bold text-base text-slate-700 group-hover:text-purple-700 leading-relaxed block">
          {option.label}
        </span>
      </div>
    </button>
  );
};

export const QuizPage: React.FC<QuizPageProps> = ({ onFinish }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('Q1');
  const [history, setHistory] = useState<string[]>([]);
  const [animating, setAnimating] = useState(false);
  // Initialize scores with a tiny bit of bias to avoid 50/50 deadlocks if answered purely neutral, though pathing usually fixes this.
  // We'll handle 0 scores in calculation.
  const [scores, setScores] = useState<Record<string, number>>({
    I: 0, E: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentQuestion: QuestionNode = QUESTION_TREE[currentQuestionId];

  const calculateResults = (finalScores: Record<string, number>): ResultData => {
    // Helper to get percentage
    const getPct = (a: number, b: number) => {
      const total = a + b;
      return total === 0 ? 50 : Math.round((a / total) * 100);
    };

    const pct = {
      I: getPct(finalScores.I, finalScores.E),
      E: getPct(finalScores.E, finalScores.I),
      N: getPct(finalScores.N, finalScores.S),
      S: getPct(finalScores.S, finalScores.N),
      T: getPct(finalScores.T, finalScores.F),
      F: getPct(finalScores.F, finalScores.T),
      J: getPct(finalScores.J, finalScores.P),
      P: getPct(finalScores.P, finalScores.J),
    };

    // Determine Main Code
    // For the first letter (E/I), we strongly prefer the path taken (via scores), 
    // but if scores are equal we can default to the path start. 
    // However, our logic ensures Q1 gives points to E or I.
    const l1 = finalScores.E > finalScores.I ? 'E' : 'I';
    const l2 = finalScores.N > finalScores.S ? 'N' : 'S';
    const l3 = finalScores.T > finalScores.F ? 'T' : 'F';
    const l4 = finalScores.J > finalScores.P ? 'J' : 'P';
    const mainCode = `${l1}${l2}${l3}${l4}`;

    // Determine Sub Code
    // Find the dimension with the smallest margin and flip it.
    const margins = [
      { dim: 'I', margin: Math.abs(finalScores.I - finalScores.E), flip: l1 === 'E' ? 'I' : 'E', idx: 0 },
      { dim: 'N', margin: Math.abs(finalScores.N - finalScores.S), flip: l2 === 'N' ? 'S' : 'N', idx: 1 },
      { dim: 'T', margin: Math.abs(finalScores.T - finalScores.F), flip: l3 === 'T' ? 'F' : 'T', idx: 2 },
      { dim: 'J', margin: Math.abs(finalScores.J - finalScores.P), flip: l4 === 'J' ? 'P' : 'J', idx: 3 },
    ];
    
    // Sort by margin (ascending). 
    // We usually don't flip I/E if the user explicitly chose that path, 
    // but if the scores are actually super close, we could. 
    // However, typically N/S, T/F, J/P are the "sub" variations.
    // Let's just take the absolute smallest margin.
    margins.sort((a, b) => a.margin - b.margin);
    
    const flipTarget = margins[0];
    const subCodeChars = mainCode.split('');
    subCodeChars[flipTarget.idx] = flipTarget.flip;
    const subCode = subCodeChars.join('');

    return {
      mainCode,
      subCode,
      percentages: pct
    };
  };

  const handleOptionClick = (option: OptionNode) => {
    // Accumulate scores
    const newScores = { ...scores };
    if (option.scores) {
      Object.entries(option.scores).forEach(([key, value]) => {
        newScores[key] = (newScores[key] || 0) + value;
      });
    }
    setScores(newScores);

    if (option.nextId) {
      // Continue Quiz
      setAnimating(true);
      setTimeout(() => {
        setHistory(prev => [...prev, currentQuestionId]);
        setCurrentQuestionId(option.nextId!);
        setAnimating(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
    } else {
      // Finish Quiz
      const resultData = calculateResults(newScores);
      onFinish(resultData);
    }
  };

  const stepCount = history.length + 1;

  return (
    <div className="flex flex-col min-h-[600px] bg-slate-50 relative">
      {/* Progress Header */}
      <div className="pt-8 pb-4 px-6 flex justify-between items-center">
        <div className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 shadow-sm border border-slate-100">
          Question {stepCount}
        </div>
        <div className="text-xs text-slate-400 font-medium">
          MBTI 速通版
        </div>
      </div>

      <div ref={containerRef} className="flex-1 px-6 py-4">
        <div className={`transition-all duration-300 ${animating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
          
          {/* Question Card */}
          <div className="mb-8">
             <h2 className="text-2xl font-extrabold text-slate-900 leading-snug">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <OptionButton
                key={idx}
                option={option}
                onClick={() => handleOptionClick(option)}
              />
            ))}
          </div>

        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
    </div>
  );
};
