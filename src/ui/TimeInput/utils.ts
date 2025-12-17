export const getSixty = (rowValue: string) => {
  if (Number(rowValue) > 59) {
    return 59;
  }

  return Number(rowValue);
};

export const getMilliseconds = (rowValue: string) => {
  if (Number(rowValue) > 999) {
    return 999;
  }

  return Number(rowValue);
};