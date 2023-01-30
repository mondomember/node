import { MetadataProperty } from "../../../../../common";
import { StripeProviderProperty, StripeCodeProperty } from "./base";
import {
  GatewayIdProperty,
  DefaultProperty,
  LabelProperty,
  DescriptionProperty,
} from "../../base";

export interface StripeGatewayInsertItem
  extends StripeProviderProperty,
    StripeCodeProperty,
    Partial<GatewayIdProperty>,
    Partial<LabelProperty>,
    Partial<DefaultProperty>,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty> {}
