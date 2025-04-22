export const formatDateToInput = (date: Date): string => {
  return String(date).split('T')[0];
};
