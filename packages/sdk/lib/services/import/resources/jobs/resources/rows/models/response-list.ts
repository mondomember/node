import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import { PaginationPropertySchema } from "../../../../../../../models";
import { RowResponseItemSchema } from "./response-item";

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
