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
} from "./base";
import {
  GatewayIdPropertySchema,
  GatewayIdPropertyInterface,
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
  required: ["id", "provider", "label", "createdAt", "updatedAt"],
  properties: {
    ...GatewayIdPropertySchema,
    ...DefaultPropertySchema,
    ...LivePropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...StripeProviderPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface StripeGatewayResponseItemInterface
  extends GatewayIdPropertyInterface,
    StripeProviderPropertyInterface,
    LabelPropertyInterface,
    Partial<DefaultPropertyInterface>,
    Partial<LivePropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
