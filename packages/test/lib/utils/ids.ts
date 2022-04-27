import { generateTempKSUID } from "@mondomember/sdk";

export function generateTestKSUID(prefix: string) {
  return `${generateTempKSUID(prefix)}`;
}
