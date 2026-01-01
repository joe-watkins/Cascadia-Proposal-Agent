import React from 'react';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentStep, totalSteps, onNext, onPrev, onReset }) => {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className="flex justify-between items-center mt-8 px-2">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-colors
          ${isFirst 
            ? 'text-gray-300 cursor-not-allowed' 
            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 shadow-sm'}
        `}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      {isLast ? (
        <button
          onClick={onReset}
          className="flex items-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 shadow-md transition-all hover:shadow-lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Restart Guide
        </button>
      ) : (
        <button
          onClick={onNext}
          className="flex items-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all hover:shadow-lg"
        >
          Next Step
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      )}
    </div>
  );
};