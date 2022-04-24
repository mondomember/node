import { JsonSchemaType, JsonSchema } from "../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../models";

export const SearchResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
    },
    ...PaginationPropertySchema,
  },
};

export interface SearchResponseListInterface<Item = any>
  extends Partial<PaginationPropertyInterface> {
  items?: Item[];
}
