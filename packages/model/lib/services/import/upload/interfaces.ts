export const ImportType = {
  Contact: "Contact",
  Company: "Company",
  CompanyContact: "CompanyContact",

  Membership: "Membership",
  Contract: "Contract",
  Product: "Product",
  ProductTier: "Product-Tier",
  ProductTierPrice: "Product-Tier-Price",
} as const;

export type AnyImportType = typeof ImportType[keyof typeof ImportType];
