import { JsonSchemaType } from "../../../../../../../schema";
import { Provider } from "../../../../../models";

export const StripeCodePropertySchema = {
  code: {
    type: JsonSchemaType.STRING,
  },
};

export interface StripeCodePropertyInterface {
  code: string;
}

export const StripeProviderPropertySchema = {
  provider: {
    type: JsonSchemaType.STRING,
    enum: [Provider.STRIPE],
  },
};

export interface StripeProviderPropertyInterface {
  provider: typeof Provider.STRIPE;
}

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

export interface StripeSettingsPropertyInterface {
  settings: {
    publishableKey: string;
  };
}
