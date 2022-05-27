import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  ChargeResponseItemSchema,
  ChargeResponseItemInterface,
} from "./response-item";

export const ChargeResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ChargeResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface ChargeResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ChargeResponseItemInterface[];
}
