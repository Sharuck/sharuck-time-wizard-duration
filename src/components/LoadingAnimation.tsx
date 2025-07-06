
import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 sm:py-12 space-y-6 animate-fade-in-up">
      {/* Animated Clock with Floating Effect */}
      <div className="relative animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse-glow"></div>
        <div className="relative bg-white rounded-full p-6 sm:p-8 shadow-2xl border border-indigo-100">
          <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 animate-wiggle" />
          <div className="absolute -top-2 -right-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 animate-bounce-gentle" />
          </div>
        </div>
      </div>

      {/* Loading Text with Gradient Animation */}
      <div className="text-center space-y-2 px-4">
        <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
          Calculating Duration...
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">
          Crunching the numbers with precision ✨
        </p>
      </div>

      {/* Enhanced Progress Dots */}
      <div className="flex space-x-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-bounce-gentle shadow-lg"
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Progress Bar with Glow */}
      <div className="w-48 sm:w-64 h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse transform origin-left">
          <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-gradient-x opacity-75"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300 rounded-full animate-float opacity-60"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
