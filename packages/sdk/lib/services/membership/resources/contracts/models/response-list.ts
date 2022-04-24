import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  ContractResponseItemSchema,
  ContractResponseItemInterface,
} from "./response-item";

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

export interface ContractResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ContractResponseItemInterface[];
}
