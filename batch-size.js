/** Parse the batch size supplied to the worker. */
export function parseBatchSize(value) {
  if (!Number.isInteger(value) || value < 1 || value > 100) {
    throw new RangeError("Invalid batch size");
  }
  return value;
}
