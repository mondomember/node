import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";

import {
  CompanyInsertItemSchema,
  CompanyInsertItemInterface,
} from "./insert-item";
import {
  CompanyModifyItemSchema,
  CompanyModifyItemInterface,
} from "./modify-item";

const AnyIdPropertySchema = {
  id: {
    type: JsonSchemaType.STRING,
  },
};

export const CompanyImportInsertItemSchema = {
  ...CompanyInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...CompanyInsertItemSchema.properties,
    ...AnyIdPropertySchema,
  },
};

export const CompanyImportModifyItemSchema = {
  ...CompanyModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...CompanyModifyItemSchema.properties,
    ...AnyIdPropertySchema,
  },
};

export const CompanyImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
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
