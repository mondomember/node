import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { GatewayResponseItemSchema } from "./response-item";

export const GatewayResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: GatewayResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
