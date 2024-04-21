export const getNumericPart = (str: string): string => {
  return str.replace(/\D/g, '');
};
