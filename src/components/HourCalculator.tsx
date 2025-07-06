
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, Download, Sparkles } from "lucide-react";
import DateTimePicker from './DateTimePicker';
import LoadingAnimation from './LoadingAnimation';
import ResultDisplay from './ResultDisplay';
import { calculateDuration, formatDuration } from '@/lib/dateUtils';
import { exportToPDF, shareResult } from '@/lib/exportUtils';
import { toast } from "@/hooks/use-toast";

const HourCalculator = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = async () => {
    if (endDate <= startDate) {
      toast({
        title: "Invalid Date Range",
        description: "End date must be after start date",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    setShowResult(false);
    
    // Simulate calculation delay for smooth animation
    setTimeout(() => {
      const duration = calculateDuration(startDate, endDate);
      setResult(duration);
      setIsCalculating(false);
      setShowResult(true);
    }, 2000);
  };

  const handleExportPDF = () => {
    if (result) {
      exportToPDF(startDate, endDate, result);
      toast({
        title: "PDF Exported",
        description: "Duration calculation has been exported to PDF",
      });
    }
  };

  const handleShare = async () => {
    if (result) {
      const shared = await shareResult(startDate, endDate, result);
      if (!shared) {
        toast({
          title: "Share Failed",
          description: "Your browser doesn't support sharing, but result is copied to clipboard",
        });
      }
    }
  };

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header with Enhanced Animation */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="relative p-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-xl shadow-2xl animate-pulse-glow">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-wiggle" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 animate-bounce-gentle" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Shaoli's Calculator
            </h1>
          </div>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            Calculate precise duration between any two dates and times
          </p>
          <Badge variant="secondary" className="px-3 sm:px-4 py-2 text-xs sm:text-sm animate-bounce-gentle">
            By yours truly, Sharuck ✨
          </Badge>
        </div>

        {/* Enhanced Calculator Card */}
        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 animate-scale-in hover:scale-[1.02] mx-2 sm:mx-0">
          <CardHeader className="text-center pb-4 sm:pb-6">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2 flex-wrap">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 animate-bounce-gentle" />
              Duration Calculator
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6">
            {/* Enhanced Date Time Pickers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <DateTimePicker
                label="Start Date & Time"
                value={startDate}
                onChange={setStartDate}
                className="animate-slide-in-left"
              />
              <DateTimePicker
                label="End Date & Time"
                value={endDate}
                onChange={setEndDate}
                className="animate-slide-in-right"
              />
            </div>

            {/* Enhanced Calculate Button */}
            <div className="flex justify-center px-4">
              <Button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl animate-pulse-glow"
              >
                {isCalculating ? (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="hidden sm:inline">Calculating...</span>
                    <span className="sm:hidden">...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Calculate Duration</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Loading Animation */}
            {isCalculating && <LoadingAnimation />}

            {/* Result Display */}
            {showResult && result && (
              <div className="animate-fade-in-up space-y-4 sm:space-y-6">
                <ResultDisplay result={result} startDate={startDate} endDate={endDate} />
                
                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share Result</span>
                  </Button>
                  <Button
                    onClick={handleExportPDF}
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export PDF</span>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center text-gray-500 text-xs sm:text-sm animate-fade-in px-4">
          <p>Made with ❤️ for precise time calculations</p>
        </div>
      </div>
    </div>
  );
};

export default HourCalculator;
