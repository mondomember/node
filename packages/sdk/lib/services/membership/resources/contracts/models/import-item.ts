import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";
import {
  ContractIdPropertySchema,
  StatusPropertySchema,
  StatusPropertyInterface,
} from "./base";

import {
  ContractInsertItemSchema,
  ContractInsertItemInterface,
  ContractModifyItemSchema,
  ContractModifyItemInterface,
} from "../models";

export const ContractImportInsertItemSchema = {
  ...ContractInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...ContractInsertItemSchema?.properties,
    ...ContractIdPropertySchema,
    ...StatusPropertySchema,
  },
};

export const ContractImportModifyItemSchema = {
  ...ContractModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...ContractModifyItemSchema?.properties,
    ...ContractIdPropertySchema,
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
