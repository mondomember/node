import { generateTempKSUID } from "@mondomember/model";

export function generateTestKSUID(prefix: string) {
  return `${generateTempKSUID(prefix)}`;
}
