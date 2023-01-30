import { JsonSchemaType } from "../../../../../schema";

import { CompanyInsertItemSchema } from "./insert-item";
import { CompanyModifyItemSchema } from "./modify-item";

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
