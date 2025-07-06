
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, Download } from "lucide-react";
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
    }, 1500);
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
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Shaoli's Calculator
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Calculate precise duration between any two dates and times
          </p>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            By yours truly, Sharuck ✨
          </Badge>
        </div>

        {/* Calculator Card */}
        <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-scale-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-600" />
              Duration Calculator
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Date Time Pickers */}
            <div className="grid md:grid-cols-2 gap-6">
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

            {/* Calculate Button */}
            <div className="flex justify-center">
              <Button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isCalculating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Calculating...
                  </div>
                ) : (
                  <>
                    <Clock className="w-5 h-5 mr-2" />
                    Calculate Duration
                  </>
                )}
              </Button>
            </div>

            {/* Loading Animation */}
            {isCalculating && <LoadingAnimation />}

            {/* Result Display */}
            {showResult && result && (
              <div className="animate-fade-in space-y-6">
                <ResultDisplay result={result} startDate={startDate} endDate={endDate} />
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Result
                  </Button>
                  <Button
                    onClick={handleExportPDF}
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                  >
                    <Download className="w-4 h-4" />
                    Export PDF
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm animate-fade-in">
          <p>Made with ❤️ for precise time calculations</p>
        </div>
      </div>
    </div>
  );
};

export default HourCalculator;
