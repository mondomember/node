import { AnyPaymentProvider } from "../interfaces";

export interface LabelProperty {
  label: string;
}

export interface DefaultProperty {
  default: boolean;
}

export interface ReferenceProperty {
  reference: string;
}

export interface TokenProperty {
  token: string;
}

export interface GatewayProperty {
  gateway: {
    id: string;
    provider: AnyPaymentProvider;
  };
}
