import { JsonSchemaType } from "../../../../../schema";

import { ContactInsertItemSchema } from "./insert-item";
import { ContactModifyItemSchema } from "./modify-item";

const AnyIdPropertySchema = {
  id: {
    type: JsonSchemaType.STRING,
  },
};

export const ContactImportInsertItemSchema = {
  ...ContactInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...ContactInsertItemSchema.properties,
    ...AnyIdPropertySchema,
  },
};

export const ContactImportModifyItemSchema = {
  ...ContactModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...ContactModifyItemSchema.properties,
    ...AnyIdPropertySchema,
  },
};

export const ContactImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [ContactImportInsertItemSchema, ContactImportModifyItemSchema],
};
