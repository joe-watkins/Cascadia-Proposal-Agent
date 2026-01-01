import React from 'react';
import { motion } from 'framer-motion';
import { StepProps } from '../types';

export const StepLayout: React.FC<StepProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px] flex flex-col">
      <div className="bg-indigo-600 px-6 py-6 md:px-10 md:py-8">
        <h2 className="text-indigo-100 text-sm font-semibold tracking-wider uppercase mb-1">
          Step {data.id + 1}
        </h2>
        <h1 className="text-3xl font-bold text-white">
          {data.title}
        </h1>
        <p className="text-indigo-200 mt-2 text-lg">
          {data.description}
        </p>
      </div>
      
      <div className="p-6 md:p-10 flex-grow">
        {/* We assume standard React rendering is fast enough, simply fading in */}
        <div className="animate-fade-in-up">
          {data.content}
        </div>
      </div>
    </div>
  );
};