import { JsonSchemaType } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../models";
import { CustomerPropertyResponseSchema } from "../../../../../../customer";
import {
  DefaultPropertySchema,
  ReferencePropertySchema,
  LabelPropertySchema,
  GatewayPropertySchema,
  SourceIdPropertySchema,
} from "../../base";
import { StripeTypePropertySchema, StripeObjectPropertySchema } from "./base";

export const StripeSourceResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "gateway",
    "customer",
    "type",
    "object",
    "reference",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...SourceIdPropertySchema,
    ...ReferencePropertySchema,
    ...LabelPropertySchema,
    ...GatewayPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...DefaultPropertySchema,
    ...StripeTypePropertySchema,
    ...StripeObjectPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
