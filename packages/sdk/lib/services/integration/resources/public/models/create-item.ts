import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import { DeviceIdPropertySchema, InvoiceIdPropertySchema } from "./base";

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
