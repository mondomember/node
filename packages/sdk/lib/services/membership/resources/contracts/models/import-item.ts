import { JsonSchemaType } from "../../../../../schema";
import { StatusPropertySchema } from "./base";
import { ContractInsertItemSchema, ContractModifyItemSchema } from "../models";

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
