import { Provider } from "../../../interfaces";

export interface StripeCodeProperty {
  code: string;
}

export interface StripeProviderProperty {
  provider: typeof Provider.STRIPE;
}

export interface StripeSettingsProperty {
  settings: {
    publishableKey: string;
  };
}
