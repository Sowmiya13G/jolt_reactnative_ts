export interface DateInfo {
  index: string;
  label: string;
  date: string;
}

export const getNextDates = (): DateInfo[] => {
  const today = new Date();

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const formatShortDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: '2-digit',
    };
    return date.toLocaleDateString('en-US', options).replace(',', '');
  };

  const formatFullDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
    };
    return date
      .toLocaleDateString('en-US', options)
      .replace(',', '')
      .replace(' ', ',');
  };

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const nextDay1 = new Date(tomorrow);
  nextDay1.setDate(tomorrow.getDate() + 1);

  const nextDay2 = new Date(nextDay1);
  nextDay2.setDate(nextDay1.getDate() + 1);

  const dates: DateInfo[] = [
    {index: '0', label: 'Today', date: formatDate(today)},
    {index: '1', label: 'Tomorrow', date: formatDate(tomorrow)},
    {index: '2', label: formatShortDate(nextDay1), date: formatDate(nextDay1)},
    {index: '3', label: formatFullDate(nextDay2), date: formatDate(nextDay2)},
  ];

  return dates;
};

export const getSessionText = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Good Afternoon';
  } else if (currentHour >= 17 && currentHour < 21) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
};

export const formatDateLabel = (
  date: string,
  isShortFormat = false,
): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  };

  const formattedDate = new Date(date)
    .toLocaleDateString('en-US', options)
    .replace(',', '')
    .replace(' ', ',');

  if (isShortFormat) {
    const [weekday, monthDay] = formattedDate.split(',');
    const [month, day] = monthDay.trim().split(' ');
    return `${weekday}, ${day} ${month}`;
  }

  return formattedDate;
};

export const formatDateText = (date: string, isShortFormat = false): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
  };

  const formattedDate = new Date(date)
    .toLocaleDateString('en-US', options)
    .replace(',', '')
    .replace(' ', ',');

  if (isShortFormat) {
    const [weekday, monthDay] = formattedDate.split(',');
    const [month, day] = monthDay.trim().split(' ');
    return ` ${month} ${day}`;
  }

  return formattedDate;
};
