
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DateTimePickerProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  className?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  value,
  onChange,
  className
}) => {
  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      const updatedDate = new Date(value);
      updatedDate.setFullYear(newDate.getFullYear());
      updatedDate.setMonth(newDate.getMonth());
      updatedDate.setDate(newDate.getDate());
      onChange(updatedDate);
    }
  };

  const handleTimeChange = (timeString: string) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const updatedDate = new Date(value);
    updatedDate.setHours(hours, minutes);
    onChange(updatedDate);
  };

  const timeString = format(value, 'HH:mm');

  return (
    <div className={cn("space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/90 to-gray-50/90 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm", className)}>
      <Label className="text-base sm:text-lg font-medium text-gray-700 flex items-center gap-2">
        <span>{label}</span>
      </Label>
      
      <div className="space-y-3">
        {/* Date Picker */}
        <div>
          <Label className="text-xs sm:text-sm text-gray-600 mb-2 block flex items-center gap-1">
            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base h-10 sm:h-11",
                  !value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-indigo-600" />
                {value ? format(value, 'MMM d, yyyy') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={value}
                onSelect={handleDateChange}
                initialFocus
                className="p-2 sm:p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Time Picker */}
        <div>
          <Label className="text-xs sm:text-sm text-gray-600 mb-2 block flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            Time
          </Label>
          <Input
            type="time"
            value={timeString}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="w-full hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base h-10 sm:h-11"
          />
        </div>
      </div>

      {/* Enhanced Preview */}
      <div className="mt-3 sm:mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 hover:border-indigo-300 transition-all duration-300">
        <p className="text-xs sm:text-sm text-indigo-700 font-medium text-center">
          {format(value, 'EEEE, MMM do, yyyy \'at\' h:mm a')}
        </p>
      </div>
    </div>
  );
};

export default DateTimePicker;
