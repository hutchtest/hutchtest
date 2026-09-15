/** Dedicated Hutch smoke fixture. Arithmetic mean of a non-empty number list. */
export function arithmeticMean(values: readonly number[]): number {
  if (values.length === 0) throw new Error("At least one value is required");
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}
