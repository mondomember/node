export function generateTestKSUID(prefix: string) {
  return `${prefix}_${Math.random()
    .toString(36)
    .substring(2, 10)}${Math.random()
    .toString(36)
    .substring(2, 15)}${Math.random().toString(36).substring(2, 10)}`;
}
