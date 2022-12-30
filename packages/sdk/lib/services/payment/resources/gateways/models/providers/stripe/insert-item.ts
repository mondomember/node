import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  StripeProviderPropertySchema,
  StripeProviderPropertyInterface,
  StripeCodePropertySchema,
  StripeCodePropertyInterface,
} from "./base";
import {
  GatewayIdPropertySchema,
  GatewayIdPropertyInterface,
  DefaultPropertySchema,
  DefaultPropertyInterface,
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "../../base";

export const StripeGatewayInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["provider", "code"],
  properties: {
    ...GatewayIdPropertySchema,
    ...DefaultPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...StripeProviderPropertySchema,
    ...StripeCodePropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface StripeGatewayInsertItemInterface
  extends StripeProviderPropertyInterface,
    StripeCodePropertyInterface,
    Partial<GatewayIdPropertyInterface>,
    Partial<LabelPropertyInterface>,
    Partial<DefaultPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
