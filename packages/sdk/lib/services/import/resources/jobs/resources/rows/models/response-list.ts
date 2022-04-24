import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../models";
import {
  RowResponseItemSchema,
  RowResponseItemInterface,
} from "./response-item";

export const RowResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: RowResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface RowResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: RowResponseItemInterface[];
}
