import KSUID from "ksuid";

export function generateTempKSUID(prefix = "TEMP") {
  return `${prefix}_${KSUID.randomSync().string}`;
}
