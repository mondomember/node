import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";

import {
  SaveSourcePropertySchema,
  SaveSourcePropertyInterface,
  TokenPropertySchema,
  TokenPropertyInterface,
  GatewayPropertySchema,
  GatewayPropertyInterface,
  SourcePropertySchema,
  SourcePropertyInterface,
  InvoicePropertySchema,
  InvoicePropertyInterface,
  TypePropertyInterface,
} from "./base";
import { ChargeType } from "./interfaces";

// Invoice + Token (new source to pay invoice)
const TokenChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["token", "invoice"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ChargeType.TOKEN],
    },
    ...TokenPropertySchema,
    ...GatewayPropertySchema,
    ...InvoicePropertySchema,
    ...SaveSourcePropertySchema,
    ...MetadataPropertySchema,
  },
};

interface TokenChargeInsertItemInterface
  extends TokenPropertyInterface,
    InvoicePropertyInterface,
    Partial<GatewayPropertyInterface>,
    Partial<SaveSourcePropertyInterface>,
    Partial<MetadataPropertyInterface> {
  type: typeof ChargeType.TOKEN;
}

// Invoice + Source (use source on file to pay invoice)
const SourceChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "source", "invoice"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [ChargeType.SOURCE],
    },
    ...SourcePropertySchema,
    ...InvoicePropertySchema,
    ...MetadataPropertySchema,
  },
};

interface SourceChargeInsertItemInterface
  extends InvoicePropertyInterface,
    SourcePropertyInterface,
    Partial<MetadataPropertyInterface> {
  type: typeof ChargeType.SOURCE;
}

export const ChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [SourceChargeInsertItemSchema, TokenChargeInsertItemSchema],
};

export type ChargeInsertItemInterface =
  | SourceChargeInsertItemInterface
  | TokenChargeInsertItemInterface;
