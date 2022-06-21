import { JsonSchemaType } from "../../../../../../../schema";
import {
  CustomerPropertyRequestSchema,
  CustomerPropertyRequestInterface,
} from "../../../../../../crm";
import {
  GatewayPropertyInterface,
  GatewayPropertySchema,
  InvoicePropertySchema,
  InvoicePropertyInterface,
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

export interface ChargeSessionInsertItemInterface
  extends CustomerPropertyRequestInterface,
    GatewayPropertyInterface,
    InvoicePropertyInterface {
  options?: Record<string, string>;
}
