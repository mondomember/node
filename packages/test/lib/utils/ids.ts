import KSUID from "ksuid";

export function generateTestKSUID(prefix: string) {
  return `${prefix}_${KSUID.randomSync().string}`;
}
