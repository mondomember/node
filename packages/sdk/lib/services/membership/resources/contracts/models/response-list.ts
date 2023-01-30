import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { ContractResponseItemSchema } from "./response-item";

export const ContractResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ContractResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
