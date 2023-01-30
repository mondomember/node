import { JsonSchemaType } from "../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../models";
import { StripeProviderPropertySchema, StripeCodePropertySchema } from "./base";
import {
  GatewayIdPropertySchema,
  DefaultPropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
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
