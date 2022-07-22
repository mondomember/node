import {
  ContactUpsertPropertySchema,
  ContactUpsertPropertyInterface,
  CompanyUpsertPropertySchema,
  CompanyUpsertPropertyInterface,
} from "./base";

import {
  CompanyContactUpsertItemSchema,
  CompanyContactUpsertItemInterface,
} from "./upsert-item";

export const CompanyContactImportItemSchema = {
  ...CompanyContactUpsertItemSchema,
  properties: {
    ...CompanyContactUpsertItemSchema.properties,
    ...CompanyUpsertPropertySchema,
    ...ContactUpsertPropertySchema,
  },
};

export interface CompanyContactImportItemInterface
  extends CompanyContactUpsertItemInterface,
    ContactUpsertPropertyInterface,
    CompanyUpsertPropertyInterface {}
