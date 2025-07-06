
import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Timer } from 'lucide-react';

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
    <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-lg animate-scale-in">
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <Timer className="w-6 h-6 text-indigo-600" />
              Duration Result
            </h2>
            <p className="text-gray-600">
              From {format(startDate, 'MMM d, yyyy h:mm a')} to {format(endDate, 'MMM d, yyyy h:mm a')}
            </p>
          </div>

          {/* Main Result */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100">
            <div className="text-center space-y-3">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {result.totalHours.toLocaleString()}
              </div>
              <div className="text-xl text-gray-600 font-medium">Total Hours</div>
              <div className="text-sm text-gray-500">
                ({result.totalMinutes.toLocaleString()} minutes • {result.totalSeconds.toLocaleString()} seconds)
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-gray-600">Days</span>
              </div>
              <div className="text-2xl font-bold text-indigo-600">{result.days}</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Hours</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">{result.hours}</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Timer className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-600">Minutes</span>
              </div>
              <div className="text-2xl font-bold text-emerald-600">{result.minutes}</div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Timer className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-600">Seconds</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">{result.seconds}</div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Duration Summary</h3>
            <p className="text-indigo-100">
              {result.days > 0 && `${result.days} day${result.days !== 1 ? 's' : ''}, `}
              {result.hours > 0 && `${result.hours} hour${result.hours !== 1 ? 's' : ''}, `}
              {result.minutes > 0 && `${result.minutes} minute${result.minutes !== 1 ? 's' : ''}, `}
              {result.seconds > 0 && `${result.seconds} second${result.seconds !== 1 ? 's' : ''}`}
            </p>
          </div>

          {/* Fun Facts */}
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <Badge variant="secondary" className="p-3 text-center">
              📅 That's {Math.ceil(result.totalHours / 24)} calendar days
            </Badge>
            <Badge variant="secondary" className="p-3 text-center">
              ⏰ Or {Math.ceil(result.totalHours / 8)} work days (8h each)
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultDisplay;
