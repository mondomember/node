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
  AmountPropertySchema,
  AmountPropertyInterface,
  SourcePropertySchema,
  SourcePropertyInterface,
  InvoicePropertySchema,
  InvoicePropertyInterface,
  ChargeIdPropertySchema,
} from "./base";

export const ChargeInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "amount", "invoice"],
  properties: {
    ...ChargeIdPropertySchema,
    ...AmountPropertySchema,
    ...SourcePropertySchema,
    ...CustomerPropertyRequestSchema,
    ...InvoicePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface ChargeInsertItemInterface
  extends Partial<IdPropertyInterface>,
    AmountPropertyInterface,
    CustomerPropertyRequestInterface,
    InvoicePropertyInterface,
    Partial<SourcePropertyInterface>,
    Partial<MetadataPropertyInterface> {}
