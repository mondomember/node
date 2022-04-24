import { JsonSchemaType } from "../../../../../../../../../schema";
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
} from "../../../../../../../../../models";
import {
  AmountPropertySchema,
  AmountPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  VersionPropertySchema,
  VersionPropertyInterface,
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

export interface ProductTierPriceResponseItemInterface
  extends VersionPropertyInterface,
    AmountPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
