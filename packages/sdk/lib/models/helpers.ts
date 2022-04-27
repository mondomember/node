export function generateTempKSUID(prefix = "TEMP") {
  return `${prefix}_${
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(0, 11) +
    Math.random().toString(36).substring(2, 10)
  }`;
}
