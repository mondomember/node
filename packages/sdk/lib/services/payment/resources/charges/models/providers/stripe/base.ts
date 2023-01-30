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
        type: [JsonSchemaType.STRING, JsonSchemaType.NULL],
      },
      receipt_email: {
        type: [JsonSchemaType.NUMBER, JsonSchemaType.NULL],
      },
      receipt_number: {
        type: [JsonSchemaType.NUMBER, JsonSchemaType.NULL],
      },
      receipt_url: {
        type: [JsonSchemaType.NUMBER, JsonSchemaType.NULL],
      },
    },
  },
};
