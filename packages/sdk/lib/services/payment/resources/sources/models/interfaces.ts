export const SourceType = {
  CARD: "Card",
} as const;

export type AnySourceType = typeof SourceType[keyof typeof SourceType];

export interface SourceCardInterface {
  brand: string;
  lastFour: number;
  expirationYear: number;
  expirationMonth: number;
}
