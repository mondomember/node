import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import { StatusPropertySchema, StatusPropertyInterface } from "./base";

import {
  ContractInsertItemSchema,
  ContractInsertItemInterface,
  ContractModifyItemSchema,
  ContractModifyItemInterface,
} from "../models";

const AnyIdPropertySchema = {
  id: {
    type: JsonSchemaType.STRING,
  },
};

export const ContractImportInsertItemSchema = {
  ...ContractInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...ContractInsertItemSchema?.properties,
    ...AnyIdPropertySchema,
    ...StatusPropertySchema,
  },
};

export const ContractImportModifyItemSchema = {
  ...ContractModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...ContractModifyItemSchema?.properties,
    ...AnyIdPropertySchema,
    ...StatusPropertySchema,
  },
};

export const ContractImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [ContractImportInsertItemSchema, ContractImportModifyItemSchema],
};

export interface ContractImportInsertItemInterface
  extends ContractInsertItemInterface,
    Partial<StatusPropertyInterface> {}

export interface ContractImportModifyItemInterface
  extends ContractModifyItemInterface,
    IdPropertyInterface {}

export type ContractImportItemInterface =
  | ContractImportInsertItemInterface
  | ContractImportModifyItemInterface;
