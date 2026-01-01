import React from 'react';
import { StepData } from '../types';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  steps: StepData[];
  currentStep: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full mb-8 md:mb-12 px-2">
      <div className="flex items-center justify-between relative">
        {/* Connecting Line */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full" />
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-indigo-600 -z-10 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step.id} className="relative flex flex-col items-center">
              <div 
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white
                  ${isCompleted || isCurrent ? 'border-indigo-600 text-indigo-600' : 'border-gray-300 text-gray-400'}
                  ${isCurrent ? 'ring-4 ring-indigo-100 scale-110' : ''}
                  ${isCompleted ? 'bg-indigo-600 !text-white !border-indigo-600' : ''}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <span className="text-sm md:text-base font-semibold">{index + 1}</span>
                )}
              </div>
              
              {/* Step Label */}
              <div className={`absolute top-full mt-2 hidden md:block text-xs font-medium text-center w-24 left-1/2 -translate-x-1/2
                ${isCurrent ? 'text-indigo-700' : 'text-gray-500'}
              `}>
                {step.shortTitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};