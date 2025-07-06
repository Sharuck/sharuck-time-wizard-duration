
import { format } from 'date-fns';

export const exportToPDF = (startDate: Date, endDate: Date, result: any) => {
  // Create a simple HTML content for PDF
  const content = `
    <html>
      <head>
        <title>Shaoli's Calculator - Duration Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .header { text-align: center; margin-bottom: 40px; }
          .result { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .total { font-size: 2em; color: #4f46e5; font-weight: bold; }
          .breakdown { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px 0; }
          .breakdown div { text-align: center; padding: 10px; background: white; border-radius: 4px; }
          .footer { text-align: center; margin-top: 40px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Shaoli's Calculator</h1>
          <p>Duration Calculation Report</p>
          <p>By yours truly, Sharuck</p>
        </div>
        
        <div class="result">
          <h2>Calculation Details</h2>
          <p><strong>Start:</strong> ${format(startDate, 'EEEE, MMMM do, yyyy \'at\' h:mm a')}</p>
          <p><strong>End:</strong> ${format(endDate, 'EEEE, MMMM do, yyyy \'at\' h:mm a')}</p>
          
          <div class="total">${result.totalHours.toLocaleString()} Total Hours</div>
          
          <div class="breakdown">
            <div><strong>${result.days}</strong><br>Days</div>
            <div><strong>${result.hours}</strong><br>Hours</div>
            <div><strong>${result.minutes}</strong><br>Minutes</div>
            <div><strong>${result.seconds}</strong><br>Seconds</div>
          </div>
          
          <p><strong>Summary:</strong> ${result.totalMinutes.toLocaleString()} total minutes, ${result.totalSeconds.toLocaleString()} total seconds</p>
        </div>
        
        <div class="footer">
          <p>Generated on ${format(new Date(), 'PPpp')}</p>
          <p>Made with ❤️ for precise time calculations</p>
        </div>
      </body>
    </html>
  `;

  // Create and download the HTML file (since true PDF generation requires server-side processing)
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shaolis-calculator-${format(new Date(), 'yyyy-MM-dd')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const shareResult = async (startDate: Date, endDate: Date, result: any): Promise<boolean> => {
  const shareText = `🕐 Duration calculated with Shaoli's Calculator:

📅 From: ${format(startDate, 'MMM d, yyyy h:mm a')}
📅 To: ${format(endDate, 'MMM d, yyyy h:mm a')}

⏰ Total Duration: ${result.totalHours.toLocaleString()} hours
📊 Breakdown: ${result.days} days, ${result.hours} hours, ${result.minutes} minutes, ${result.seconds} seconds

✨ By yours truly, Sharuck`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Shaoli\'s Calculator - Duration Result',
        text: shareText,
      });
      return true;
    } catch (error) {
      console.log('Share cancelled or failed');
    }
  }
  
  // Fallback: copy to clipboard
  try {
    await navigator.clipboard.writeText(shareText);
    return false;
  } catch (error) {
    console.error('Failed to copy to clipboard');
    return false;
  }
};
