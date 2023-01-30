import { JsonSchemaType } from "../../../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../../../models";
import {
  AmountPropertySchema,
  DescriptionPropertySchema,
  VersionPropertySchema,
} from "./base";

export const ProductTierPriceResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["version", "amount", "createdAt", "updatedAt"],
  properties: {
    ...VersionPropertySchema,
    ...AmountPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
