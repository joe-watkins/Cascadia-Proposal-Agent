import React, { useState, useEffect } from 'react';
import { STEPS } from './constants';
import { StorageKeys } from './types';
import { StepLayout } from './components/StepLayout';
import { ProgressBar } from './components/ProgressBar';
import { Navigation } from './components/Navigation';
import { Bot } from 'lucide-react';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from local storage on mount
  useEffect(() => {
    const savedStep = localStorage.getItem(StorageKeys.CURRENT_STEP);
    if (savedStep) {
      const stepIndex = parseInt(savedStep, 10);
      if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < STEPS.length) {
        setCurrentStep(stepIndex);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save state whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(StorageKeys.CURRENT_STEP, currentStep.toString());
    }
  }, [currentStep, isLoaded]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to restart the setup guide?")) {
        setCurrentStep(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isLoaded) return null; // Prevent flash of content

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">
              Proposal Agent <span className="text-indigo-600">Setup</span>
            </h1>
          </div>
          <div className="text-xs text-gray-500 hidden sm:block">
            Cascadia Partners • Version 2026.2
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 mt-8 md:mt-12">
        <ProgressBar steps={STEPS} currentStep={currentStep} />
        
        <StepLayout data={STEPS[currentStep]} />
        
        <Navigation 
          currentStep={currentStep} 
          totalSteps={STEPS.length} 
          onNext={handleNext} 
          onPrev={handlePrev} 
          onReset={handleReset}
        />
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 mt-16 text-center text-gray-400 text-sm">
        <p>© 2026 Cascadia Partners. Internal Use Only.</p>
      </footer>
    </div>
  );
};

export default App;