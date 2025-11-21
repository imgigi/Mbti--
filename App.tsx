
import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { QuizPage } from './components/QuizPage';
import { ResultPage } from './components/ResultPage';
import { ResultData } from './types';

export type ViewState = 'landing' | 'quiz' | 'result';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [resultData, setResultData] = useState<ResultData | null>(null);

  const handleStartQuiz = () => {
    setResultData(null);
    setCurrentView('quiz');
  };

  const handleFinishQuiz = (data: ResultData) => {
    setResultData(data);
    setCurrentView('result');
  };

  const handleRetake = () => {
    setResultData(null);
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans text-slate-800">
      <main className="w-full max-w-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative transition-all duration-300">
        {currentView === 'landing' && (
          <LandingPage onStart={handleStartQuiz} />
        )}
        {currentView === 'quiz' && (
          <QuizPage onFinish={handleFinishQuiz} />
        )}
        {currentView === 'result' && resultData && (
          <ResultPage resultData={resultData} onRetake={handleRetake} />
        )}
      </main>
    </div>
  );
}
