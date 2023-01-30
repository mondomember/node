import { MetadataProperty } from "../../../../../common";
import { LabelProperty } from "../../base";

interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface BillingDetailsProperty {
  billingDetails: {
    address?: Address;
    email?: string;
    fullName?: string;
    phoneNumber?: string;
  };
}

interface CardProperty {
  card: {
    expirationMonth?: string | number;
    expirationYear?: string | number;
  };
}

export interface StripeSourceModifyItem
  extends Partial<LabelProperty>,
    Partial<BillingDetailsProperty>,
    Partial<CardProperty>,
    Partial<MetadataProperty> {}
