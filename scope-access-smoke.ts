// Dedicated preview review fixture. This PR is not intended to merge.
export function scopeSmokeTotal(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0)
}

export const scopeSmokeVersion = "edc3881306";
