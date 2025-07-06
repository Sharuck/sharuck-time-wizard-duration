
import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Timer, Sparkles } from 'lucide-react';

interface ResultDisplayProps {
  result: {
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  startDate: Date;
  endDate: Date;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, startDate, endDate }) => {
  return (
    <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-indigo-200 shadow-2xl animate-scale-in hover:shadow-3xl transition-all duration-700 mx-2 sm:mx-0">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Enhanced Header */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center justify-center gap-2 flex-wrap">
              <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 animate-bounce-gentle" />
              <span>Duration Result</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 animate-wiggle" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm px-2">
              From <span className="font-medium">{format(startDate, 'MMM d, yyyy h:mm a')}</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> to </span>
              <span className="sm:hidden">To </span>
              <span className="font-medium">{format(endDate, 'MMM d, yyyy h:mm a')}</span>
            </p>
          </div>

          {/* Enhanced Main Result */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-500 animate-pulse-glow">
            <div className="text-center space-y-2 sm:space-y-3">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                {result.totalHours.toLocaleString()}
              </div>
              <div className="text-lg sm:text-xl text-gray-600 font-medium">Total Hours</div>
              <div className="text-xs sm:text-sm text-gray-500">
                ({result.totalMinutes.toLocaleString()} minutes • {result.totalSeconds.toLocaleString()} seconds)
              </div>
            </div>
          </div>

          {/* Enhanced Breakdown Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left">
              <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">Days</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-indigo-600">{result.days}</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">Hours</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-purple-600">{result.hours}</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">Minutes</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-600">{result.minutes}</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                <span className="text-xs sm:text-sm font-medium text-gray-600">Seconds</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-orange-600">{result.seconds}</div>
            </div>
          </div>

          {/* Enhanced Summary */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white rounded-xl p-4 sm:p-6 shadow-xl animate-gradient-x">
            <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Duration Summary
            </h3>
            <p className="text-indigo-100 text-sm sm:text-base">
              {result.days > 0 && `${result.days} day${result.days !== 1 ? 's' : ''}, `}
              {result.hours > 0 && `${result.hours} hour${result.hours !== 1 ? 's' : ''}, `}
              {result.minutes > 0 && `${result.minutes} minute${result.minutes !== 1 ? 's' : ''}, `}
              {result.seconds > 0 && `${result.seconds} second${result.seconds !== 1 ? 's' : ''}`}
            </p>
          </div>

          {/* Enhanced Fun Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
            <Badge variant="secondary" className="p-3 text-center hover:scale-105 transition-all duration-300 animate-bounce-gentle">
              📅 That's {Math.ceil(result.totalHours / 24)} calendar days
            </Badge>
            <Badge variant="secondary" className="p-3 text-center hover:scale-105 transition-all duration-300 animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
              ⏰ Or {Math.ceil(result.totalHours / 8)} work days (8h each)
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
