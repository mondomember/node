import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import { CompanyIdPropertySchema } from "./base";

import {
  CompanyInsertItemSchema,
  CompanyInsertItemInterface,
} from "./insert-item";
import {
  CompanyModifyItemSchema,
  CompanyModifyItemInterface,
} from "./modify-item";

export const CompanyImportInsertItemSchema = {
  ...CompanyInsertItemSchema,
  properties: {
    ...CompanyInsertItemSchema.properties,
    ...CompanyIdPropertySchema,
  },
};

export const CompanyImportModifyItemSchema = {
  ...CompanyModifyItemSchema,
  required: ["id"],
  properties: {
    ...CompanyModifyItemSchema.properties,
    ...CompanyIdPropertySchema,
  },
};

export const CompanyImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [CompanyImportInsertItemSchema, CompanyImportModifyItemSchema],
};

export interface CompanyImportInsertItemInterface
  extends CompanyInsertItemInterface {}

export interface CompanyImportModifyItemInterface
  extends CompanyModifyItemInterface,
    IdPropertyInterface {}

export type CompanyImportItemInterface =
  | CompanyImportInsertItemInterface
  | CompanyImportModifyItemInterface;
