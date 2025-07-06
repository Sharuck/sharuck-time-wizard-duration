
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
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
    <div className={cn("space-y-4 p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300", className)}>
      <Label className="text-lg font-medium text-gray-700">{label}</Label>
      
      <div className="space-y-3">
        {/* Date Picker */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200",
                  !value && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-indigo-600" />
                {value ? format(value, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={value}
                onSelect={handleDateChange}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Time Picker */}
        <div>
          <Label className="text-sm text-gray-600 mb-2 block">Time</Label>
          <Input
            type="time"
            value={timeString}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="w-full hover:border-indigo-300 focus:border-indigo-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
        <p className="text-sm text-indigo-700 font-medium">
          {format(value, 'EEEE, MMMM do, yyyy \'at\' h:mm a')}
        </p>
      </div>
    </div>
  );
};

export default DateTimePicker;
