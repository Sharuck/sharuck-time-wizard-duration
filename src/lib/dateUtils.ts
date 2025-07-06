
export const calculateDuration = (startDate: Date, endDate: Date) => {
  const diffMs = endDate.getTime() - startDate.getTime();
  
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
  
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  
  return {
    totalHours,
    totalMinutes,
    totalSeconds,
    days,
    hours,
    minutes,
    seconds
  };
};

export const formatDuration = (duration: ReturnType<typeof calculateDuration>) => {
  const parts = [];
  
  if (duration.days > 0) parts.push(`${duration.days} day${duration.days !== 1 ? 's' : ''}`);
  if (duration.hours > 0) parts.push(`${duration.hours} hour${duration.hours !== 1 ? 's' : ''}`);
  if (duration.minutes > 0) parts.push(`${duration.minutes} minute${duration.minutes !== 1 ? 's' : ''}`);
  if (duration.seconds > 0) parts.push(`${duration.seconds} second${duration.seconds !== 1 ? 's' : ''}`);
  
  return parts.join(', ');
};
