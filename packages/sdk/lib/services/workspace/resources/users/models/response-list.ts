import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";

import {
  UserResponseItemSchema,
  UserResponseItemInterface,
} from "./response-item";

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

export interface UserResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: UserResponseItemInterface[];
}
