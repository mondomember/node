import { JsonSchemaType } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  MetadataPropertyInterface,
} from "../../../../../../../models";

import {
  ProductTierIdPropertySchema,
  DescriptionPropertyInterface,
  LabelPropertyInterface,
} from "./base";
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
      oneOf: [
        {
          type: JsonSchemaType.OBJECT,
          required: ["version"],
          properties: {
            version: {
              type: JsonSchemaType.NUMBER,
            },
          },
        },
        {
          type: JsonSchemaType.OBJECT,
          required: ["amount"],
          properties: {
            amount: {
              type: JsonSchemaType.NUMBER,
            },
          },
        },
      ],
    },
  },
};

export const ProductTierImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [ProductTierImportInsertItemSchema, ProductTierImportModifyItemSchema],
};

export interface ProductTierImportInsertItemInterface
  extends Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<IdPropertyInterface>,
    LabelPropertyInterface {
  price?: {
    amount: number;
  };
  product: string;
}

export interface ProductTierImportModifyItemInterface
  extends Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    IdPropertyInterface {
  price?:
    | {
        version: number;
      }
    | {
        amount: number;
      };
  product: string;
}

export type ProductTierImportItemInterface =
  | ProductTierImportInsertItemInterface
  | ProductTierImportModifyItemInterface;
