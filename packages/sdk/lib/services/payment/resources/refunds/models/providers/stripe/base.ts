import { JsonSchemaType } from "../../../../../../../schema";

export const StripeObjectSchema = {
  object: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["id"],
    properties: {
      id: {
        type: JsonSchemaType.STRING,
      },
      status: {
        type: JsonSchemaType.STRING,
      },
      reason: {
        type: JsonSchemaType.STRING,
      },
      receipt_number: {
        type: JsonSchemaType.STRING,
      },
    },
  },
};
