import {
  ContactUpsertPropertySchema,
  ContactUpsertInterface,
  CompanyUpsertPropertySchema,
  CompanyUpsertInterface,
} from "./base";

import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";

export const CompanyContactImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["company", "contact"],
  properties: {
    ...CompanyUpsertPropertySchema,
    ...ContactUpsertPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface CompanyContactImportItemInterface
  extends Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {
  contact: ContactUpsertInterface;
  company: CompanyUpsertInterface;
}
