import { JsonSchemaType } from "../../../../../../../schema";
import { Payment } from "@mondomember/model";

export const StripeCodePropertySchema = {
  code: {
    type: JsonSchemaType.STRING,
  },
};

export const StripeProviderPropertySchema = {
  provider: {
    type: JsonSchemaType.STRING,
    enum: [Payment.Provider.STRIPE],
  },
};

export const StripeSettingsPropertySchema = {
  settings: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      publishableKey: {
        type: JsonSchemaType.STRING,
      },
    },
  },
};
