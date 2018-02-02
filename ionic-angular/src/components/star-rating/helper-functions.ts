// helper functions for Ionic Star Rating component

export function normalizeNumberOfStars(inputToNormalize: number, defaultValue: number): number {
    let normalized = 0;
    if ( !(typeof inputToNormalize === 'undefined') && !(Number.isNaN(inputToNormalize)) && inputToNormalize >= 0 && inputToNormalize <= 5) {
        normalized = Math.floor(inputToNormalize);
      } else {
        normalized = defaultValue;
      }
    return normalized;
}

export function normalizeString(stringToNormalize: string, defaultValue: string): string {
  let normalized = '';
  if (stringToNormalize && typeof normalized === 'string') {
    normalized = stringToNormalize;
  } else {
    normalized = defaultValue;
  }
  return normalized;
}