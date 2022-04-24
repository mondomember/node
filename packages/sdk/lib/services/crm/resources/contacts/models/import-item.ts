import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import { ContactIdPropertySchema } from "./base";

import {
  ContactInsertItemSchema,
  ContactInsertItemInterface,
} from "./insert-item";
import {
  ContactModifyItemSchema,
  ContactModifyItemInterface,
} from "./modify-item";

export const ContactImportInsertItemSchema = {
  ...ContactInsertItemSchema,
  properties: {
    ...ContactInsertItemSchema.properties,
    ...ContactIdPropertySchema,
  },
};

export const ContactImportModifyItemSchema = {
  ...ContactModifyItemSchema,
  required: ["id"],
  properties: {
    ...ContactModifyItemSchema.properties,
    ...ContactIdPropertySchema,
  },
};

export const ContactImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "id" },
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
