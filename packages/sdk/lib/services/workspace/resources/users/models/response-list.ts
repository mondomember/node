import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";

import { UserResponseItemSchema } from "./response-item";

export const UserResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: UserResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
