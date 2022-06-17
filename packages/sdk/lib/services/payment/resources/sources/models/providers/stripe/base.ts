import { JsonSchemaType } from "../../../../../../../schema";
import {
  StripeSourceObjectInterface,
  StripeSourceType,
  AnyStripeSourceType,
} from "./interfaces";

export const StripeTypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [StripeSourceType.CARD, StripeSourceType.US_BANK_ACCOUNT],
  },
};

export interface StripeTypePropertyInterface {
  type: AnyStripeSourceType;
}

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

export interface StripeObjectPropertyInterface {
  object: StripeSourceObjectInterface;
}
