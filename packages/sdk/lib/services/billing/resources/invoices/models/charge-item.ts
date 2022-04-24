import { JsonSchemaType, JsonSchema } from "../../../../../schema";

export const TokenPropertySchema = {
  token: {
    type: JsonSchemaType.STRING,
  },
};

export interface TokenInterface {
  token: string;
}

const NotesPropertySchema = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};

export const InvoiceChargeItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["token"],
  properties: {
    ...TokenPropertySchema,
    ...NotesPropertySchema,
  },
};

export interface InvoiceChargeItemInterface {
  notes?: string;
  token: string;
}
