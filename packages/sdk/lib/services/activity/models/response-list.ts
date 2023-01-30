import { JsonSchemaType } from "../../../schema";
import { PaginationPropertySchema } from "../../../models";
import { ActivityResponseItemSchema } from "./response-item";

export const ActivityResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ActivityResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
