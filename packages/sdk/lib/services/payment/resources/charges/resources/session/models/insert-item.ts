import { JsonSchemaType } from "../../../../../../../schema";
import { CustomerPropertyRequestSchema } from "../../../../../../customer";
import {
  GatewayPropertySchema,
  InvoicePropertySchema,
} from "../../../models/base";

export const ChargeSessionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "gateway", "invoice"],
  properties: {
    ...CustomerPropertyRequestSchema,
    ...GatewayPropertySchema,
    ...InvoicePropertySchema,
    options: {
      type: JsonSchemaType.OBJECT,
      additionalProperties: false,
      patternProperties: {
        "^.*$": {
          type: [
            JsonSchemaType.STRING,
            JsonSchemaType.NUMBER,
            JsonSchemaType.NULL,
            JsonSchemaType.OBJECT,
          ],
        },
      },
    },
  },
};
