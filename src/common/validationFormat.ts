export function isValidDateFormat(date: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return false;
  }
  const [year, day, month] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  if (
    dateObj.getFullYear() !== year ||
    dateObj.getDate() !== day ||
    dateObj.getMonth() !== month - 1
  ) {
    return false; // Invalid date
  }
  return true;
}
