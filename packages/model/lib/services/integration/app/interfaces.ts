export const AppType = {
  HUBSPOT: "HubSpot",
} as const;

export type AnyAppType = typeof AppType[keyof typeof AppType];
