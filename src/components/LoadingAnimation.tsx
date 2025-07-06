
import React from 'react';
import { Clock } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-fade-in">
      {/* Animated Clock */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse"></div>
        <div className="relative bg-white rounded-full p-8 shadow-lg">
          <Clock className="w-12 h-12 text-indigo-600 animate-pulse" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-700">
          Calculating Duration...
        </h3>
        <p className="text-gray-500">
          Crunching the numbers with precision
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-indigo-400 animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse transform origin-left scale-x-0 animate-[scale-x_1.5s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
