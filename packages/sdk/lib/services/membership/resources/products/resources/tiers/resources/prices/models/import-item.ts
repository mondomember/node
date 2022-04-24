import { JsonSchemaType } from "../../../../../../../../../schema";
import { VersionPropertySchema, VersionPropertyInterface } from "./base";
import { ProductIdSchema } from "../../../../../models/base";
import { ProductTierIdSchema } from "../../../models/base";

import {
  ProductTierPriceInsertItemSchema,
  ProductTierPriceInsertItemInterface,
} from "./insert-item";
import {
  ProductTierPriceModifyItemSchema,
  ProductTierPriceModifyItemInterface,
} from "./modify-item";

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

export interface ProductTierPriceImportInsertItemInterface
  extends ProductTierPriceInsertItemInterface {
  product: string;
  tier: string;
}

export interface ProductTierPriceImportModifyItemInterface
  extends ProductTierPriceModifyItemInterface,
    VersionPropertyInterface {
  product: string;
  tier: string;
}

export type ProductTierPriceImportItemInterface =
  | ProductTierPriceImportInsertItemInterface
  | ProductTierPriceImportModifyItemInterface;
