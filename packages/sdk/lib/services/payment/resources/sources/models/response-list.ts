import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  SourceResponseItemSchema,
  SourceResponseItemInterface,
} from "./response-item";

export const SourceResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: SourceResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface SourceResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: SourceResponseItemInterface[];
}
