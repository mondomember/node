export const UIDPrefix = {
  CONTACT: "cont",
  COMPANY: "comp",
} as const;

export const CustomerType = {
  COMPANY: "Company",
  CONTACT: "Contact",
} as const;

export type AnyCustomerType = typeof CustomerType[keyof typeof CustomerType];
