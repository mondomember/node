import { JsonSchemaType } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../models";
import {
  ProductTierIdPropertySchema,
  PricePropertyResponseSchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
} from "./base";

export const ProductTierResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "label", "price", "createdAt", "updatedAt"],
  properties: {
    ...ProductTierIdPropertySchema,
    ...LabelPropertySchema,
    ...PricePropertyResponseSchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
