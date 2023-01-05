const monthConversionTable = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aag',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};
type MonthConversionTable = keyof typeof monthConversionTable;

export const convertDate = (date: string) => {
  const [year, month, dayAndOther] = date.split('-');
  const [day] = dayAndOther.split('T');
  const YYMMDD = `${year}.${month}.${day}`;
  const monthYear = `${convertMonthToString(
    month as MonthConversionTable
  )}, ${year}`;
  return { YYMMDD, monthYear };
};

const convertMonthToString = (value: MonthConversionTable) => {
  return value.replace(value, monthConversionTable[value]);
};
