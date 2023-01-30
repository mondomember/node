import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { JobResponseItemSchema } from "./response-item";

export const JobResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: JobResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
