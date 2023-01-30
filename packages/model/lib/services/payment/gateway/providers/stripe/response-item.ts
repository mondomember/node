import {
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../../../common";
import { StripeProviderProperty, StripeSettingsProperty } from "./base";
import {
  GatewayIdProperty,
  IntegrationIdProperty,
  DefaultProperty,
  LiveProperty,
  LabelProperty,
  DescriptionProperty,
} from "../../base";

export interface StripeGatewayResponseItem
  extends GatewayIdProperty,
    IntegrationIdProperty,
    StripeProviderProperty,
    LabelProperty,
    StripeSettingsProperty,
    Partial<DefaultProperty>,
    Partial<LiveProperty>,
    Partial<DescriptionProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
