import { JsonSchemaType } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  StripeProviderPropertySchema,
  StripeProviderPropertyInterface,
  StripeSettingsPropertySchema,
  StripeSettingsPropertyInterface,
} from "./base";
import {
  GatewayIdPropertySchema,
  GatewayIdPropertyInterface,
  IntegrationIdPropertySchema,
  IntegrationIdPropertyInterface,
  DefaultPropertySchema,
  DefaultPropertyInterface,
  LivePropertySchema,
  LivePropertyInterface,
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "../../base";

export const StripeGatewayResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "integrationId",
    "provider",
    "label",
    "settings",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...GatewayIdPropertySchema,
    ...IntegrationIdPropertySchema,
    ...DefaultPropertySchema,
    ...LivePropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...StripeProviderPropertySchema,
    ...StripeSettingsPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface StripeGatewayResponseItemInterface
  extends GatewayIdPropertyInterface,
    IntegrationIdPropertyInterface,
    StripeProviderPropertyInterface,
    LabelPropertyInterface,
    StripeSettingsPropertyInterface,
    Partial<DefaultPropertyInterface>,
    Partial<LivePropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
