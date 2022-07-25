import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";

import {
  ContactInsertItemSchema,
  ContactInsertItemInterface,
} from "./insert-item";
import {
  ContactModifyItemSchema,
  ContactModifyItemInterface,
} from "./modify-item";

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

export interface ContactImportInsertItemInterface
  extends ContactInsertItemInterface {}

export interface ContactImportModifyItemInterface
  extends ContactModifyItemInterface,
    IdPropertyInterface {}

export type ContactImportItemInterface =
  | ContactImportInsertItemInterface
  | ContactImportModifyItemInterface;
