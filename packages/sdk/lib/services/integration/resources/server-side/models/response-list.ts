import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  ServerSideTokenResponseItemSchema,
  ServerSideTokenResponseItemInterface,
} from "./response-item";

export const ServerSideTokenResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ServerSideTokenResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface ServerSideTokenResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ServerSideTokenResponseItemInterface[];
}
