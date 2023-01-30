import { JsonSchemaType, JsonSchema } from "../../../../schema";
import { PaginationPropertySchema } from "../../../../models";

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
