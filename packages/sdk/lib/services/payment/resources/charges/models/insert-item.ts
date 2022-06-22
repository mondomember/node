import { JsonSchemaType } from "../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../models";
import {
  CustomerPropertyRequestSchema,
  CustomerPropertyRequestInterface,
} from "../../../../crm";

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
  ChargeIdPropertySchema,
} from "./base";

// Invoice + Token (new source to pay invoice)
const TokenChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["token", "invoice"],
  properties: {
    ...ChargeIdPropertySchema,
    ...TokenPropertySchema,
    ...GatewayPropertySchema,
    ...InvoicePropertySchema,
    ...SaveSourcePropertySchema,
    ...MetadataPropertySchema,
  },
};

interface TokenChargeChargeInsertItemInterface
  extends Partial<IdPropertyInterface>,
    TokenPropertyInterface,
    InvoicePropertyInterface,
    Partial<GatewayPropertyInterface>,
    Partial<SaveSourcePropertyInterface>,
    Partial<MetadataPropertyInterface> {}

// Invoice + Source (use source on file to pay invoice)
const SourceChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["source", "invoice"],
  properties: {
    ...ChargeIdPropertySchema,
    ...SourcePropertySchema,
    ...InvoicePropertySchema,
    ...MetadataPropertySchema,
  },
};

interface SourceChargeInsertItemInterface
  extends Partial<IdPropertyInterface>,
    InvoicePropertyInterface,
    SourcePropertyInterface,
    Partial<MetadataPropertyInterface> {}

export const ChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [SourceChargeInsertItemSchema, TokenChargeInsertItemSchema],
};

export type ChargeInsertItemInterface =
  | SourceChargeInsertItemInterface
  | TokenChargeChargeInsertItemInterface;
