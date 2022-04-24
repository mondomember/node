import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import { ProductIdPropertySchema } from "./base";

import {
  ProductInsertItemSchema,
  ProductInsertItemInterface,
} from "./insert-item";
import {
  ProductModifyItemSchema,
  ProductModifyItemInterface,
} from "./modify-item";

export const ProductImportInsertItemSchema = {
  ...ProductInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...ProductInsertItemSchema.properties,
    ...ProductIdPropertySchema,
    default: {
      type: JsonSchemaType.BOOLEAN,
    },
  },
};

export const ProductImportModifyItemSchema = {
  ...ProductModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...ProductModifyItemSchema.properties,
    ...ProductIdPropertySchema,
    default: {
      type: JsonSchemaType.BOOLEAN,
    },
  },
};

export const ProductImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [ProductImportInsertItemSchema, ProductImportModifyItemSchema],
};

export interface ProductImportInsertItemInterface
  extends ProductInsertItemInterface,
    Partial<IdPropertyInterface> {
  default?: boolean;
}

export interface ProductImportModifyItemInterface
  extends ProductModifyItemInterface,
    IdPropertyInterface {
  default?: boolean;
}

export type ProductImportItemInterface =
  | ProductImportInsertItemInterface
  | ProductImportModifyItemInterface;
