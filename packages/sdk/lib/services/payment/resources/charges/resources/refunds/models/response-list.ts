import { JsonSchemaType } from "../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../models";
import {
  RefundResponseItemSchema,
  RefundResponseItemInterface,
} from "./response-item";

export const RefundResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: RefundResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface RefundResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: RefundResponseItemInterface[];
}
