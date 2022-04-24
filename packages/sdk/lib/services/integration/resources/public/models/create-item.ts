import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  DeviceIdPropertySchema,
  DeviceIdPropertyInterface,
  InvoiceIdPropertyInterface,
  InvoiceIdPropertySchema,
} from "./base";

export const PublicTokenCreateItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["token"],
  properties: {
    ...DeviceIdPropertySchema,
    ...InvoiceIdPropertySchema,
    token: {
      type: JsonSchemaType.STRING,
    },
  },
};

export interface PublicTokenCreateItemInterface
  extends Partial<DeviceIdPropertyInterface>,
    Partial<InvoiceIdPropertyInterface> {
  token: string;
}
