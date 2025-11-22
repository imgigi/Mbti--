
import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { QuizPage } from './components/QuizPage';
import { ResultPage } from './components/ResultPage';
import { ResultData, Language } from './types';

export type ViewState = 'landing' | 'quiz' | 'result';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [language, setLanguage] = useState<Language>('zh');

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans text-slate-800">
      <main className="w-full max-w-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col relative transition-all duration-300">
        {currentView === 'landing' && (
          <LandingPage 
            onStart={handleStartQuiz} 
            language={language} 
            onToggleLanguage={toggleLanguage} 
          />
        )}
        {currentView === 'quiz' && (
          <QuizPage 
            onFinish={handleFinishQuiz} 
            language={language}
          />
        )}
        {currentView === 'result' && resultData && (
          <ResultPage 
            resultData={resultData} 
            onRetake={handleRetake} 
            language={language}
          />
        )}
      </main>
    </div>
  );
}
