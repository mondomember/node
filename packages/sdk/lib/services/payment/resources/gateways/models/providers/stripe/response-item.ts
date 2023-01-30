import { JsonSchemaType } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../models";
import {
  StripeProviderPropertySchema,
  StripeSettingsPropertySchema,
} from "./base";
import {
  GatewayIdPropertySchema,
  IntegrationIdPropertySchema,
  DefaultPropertySchema,
  LivePropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
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
