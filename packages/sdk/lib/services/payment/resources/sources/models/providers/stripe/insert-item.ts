import { JsonSchemaType } from "../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../models";
import { CustomerPropertyRequestSchema } from "../../../../../../customer";
import {
  DefaultPropertySchema,
  LabelPropertySchema,
  TokenPropertySchema,
  GatewayPropertySchema,
  SourceIdPropertySchema,
} from "../../base";

export const StripeSourceInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["token", "customer", "gateway"],
  properties: {
    ...SourceIdPropertySchema,
    ...CustomerPropertyRequestSchema,
    ...GatewayPropertySchema,
    ...DefaultPropertySchema,
    ...LabelPropertySchema,
    ...TokenPropertySchema,
    ...MetadataPropertySchema,
  },
};
