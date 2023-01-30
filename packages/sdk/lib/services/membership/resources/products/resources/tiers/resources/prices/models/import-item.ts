import { JsonSchemaType } from "../../../../../../../../../schema";
import { VersionPropertySchema } from "./base";
import { ProductIdSchema } from "../../../../../models/base";
import { ProductTierIdSchema } from "../../../models/base";

import { ProductTierPriceInsertItemSchema } from "./insert-item";
import { ProductTierPriceModifyItemSchema } from "./modify-item";

export const ProductTierPriceImportInsertItemSchema = {
  ...ProductTierPriceInsertItemSchema,
  additionalProperties: true,
  required: [...ProductTierPriceInsertItemSchema.required, "product"],

  properties: {
    ...ProductTierPriceInsertItemSchema.properties,
    product: ProductIdSchema,
    tier: ProductTierIdSchema,
  },
};

export const ProductTierPriceImportModifyItemSchema = {
  ...ProductTierPriceModifyItemSchema,
  additionalProperties: true,
  required: ["version", "tier", "product"],
  properties: {
    ...ProductTierPriceModifyItemSchema.properties,
    ...VersionPropertySchema,
    product: ProductIdSchema,
    tier: ProductTierIdSchema,
  },
};

export const ProductTierPriceImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [
    ProductTierPriceImportInsertItemSchema,
    ProductTierPriceImportModifyItemSchema,
  ],
};
