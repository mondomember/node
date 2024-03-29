import { JsonSchemaType } from "../../../../../../../schema";

import { ProductTierIdPropertySchema } from "./base";
import { ProductIdSchema } from "../../../models/base";

import { ProductTierInsertItemSchema } from "./insert-item";
import { ProductTierModifyItemSchema } from "./modify-item";

export const ProductTierImportInsertItemSchema = {
  ...ProductTierInsertItemSchema,
  additionalProperties: true,
  required: ["label", "product"],
  properties: {
    ...ProductTierInsertItemSchema.properties,
    ...ProductTierIdPropertySchema,
    product: ProductIdSchema,
  },
};

const PriceVersion = {
  type: JsonSchemaType.OBJECT,
  required: ["version"],
  properties: {
    version: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

const PriceAmount = {
  type: JsonSchemaType.OBJECT,
  required: ["amount"],
  properties: {
    amount: {
      type: JsonSchemaType.NUMBER,
    },
  },
};

export const ProductTierImportModifyItemSchema = {
  ...ProductTierModifyItemSchema,
  additionalProperties: true,
  required: ["id", "product"],
  properties: {
    ...ProductTierModifyItemSchema.properties,
    ...ProductTierIdPropertySchema,
    product: ProductIdSchema,
    price: {
      type: JsonSchemaType.OBJECT,
      oneOf: [PriceVersion, PriceAmount],
    },
  },
};

export const ProductTierImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [ProductTierImportInsertItemSchema, ProductTierImportModifyItemSchema],
};
