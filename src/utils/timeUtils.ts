export function getSalonOpenStatus(): {
  isOpen: boolean;
  statusText: string;
  nextChangeText: string;
  currentDay: string;
} {
  const now = new Date();
  // Using user local time or Malaysia time
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[now.getDay()];

  // Daily 9:00 AM to 8:00 PM (20:00)
  const currentTotalMinutes = currentHour * 60 + currentMinute;
  const openTotalMinutes = 9 * 60; // 9:00 AM
  const closeTotalMinutes = 20 * 60; // 8:00 PM

  const isOpen = currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes;

  if (isOpen) {
    const minutesUntilClose = closeTotalMinutes - currentTotalMinutes;
    const hoursLeft = Math.floor(minutesUntilClose / 60);
    const minsLeft = minutesUntilClose % 60;
    const closeTimeStr = hoursLeft > 0 ? `${hoursLeft}h ${minsLeft}m` : `${minsLeft}m`;
    return {
      isOpen: true,
      statusText: 'Open Now',
      nextChangeText: `Closes at 8:00 PM (${closeTimeStr} left today)`,
      currentDay,
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      nextChangeText: currentTotalMinutes < openTotalMinutes ? 'Opens today at 9:00 AM' : 'Opens tomorrow at 9:00 AM',
      currentDay,
    };
  }
}
