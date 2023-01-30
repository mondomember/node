import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { ChargeResponseItemSchema } from "./response-item";

export const ChargeResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ChargeResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
