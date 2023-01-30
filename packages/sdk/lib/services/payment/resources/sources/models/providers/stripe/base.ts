import { JsonSchemaType } from "../../../../../../../schema";
import { Payment } from "@mondomember/model";

export const StripeTypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [
      Payment.StripeSourceType.CARD,
      Payment.StripeSourceType.US_BANK_ACCOUNT,
    ],
  },
};

export const StripeObjectPropertySchema = {
  object: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    patternProperties: {
      "^.*$": {
        type: [
          JsonSchemaType.STRING,
          JsonSchemaType.NUMBER,
          JsonSchemaType.NULL,
          JsonSchemaType.OBJECT,
          JsonSchemaType.BOOLEAN,
          JsonSchemaType.ARRAY,
        ],
      },
    },
  },
};
