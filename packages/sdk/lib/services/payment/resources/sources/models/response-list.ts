import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { SourceResponseItemSchema } from "./response-item";

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
