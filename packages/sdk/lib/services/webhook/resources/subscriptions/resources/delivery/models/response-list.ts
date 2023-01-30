import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import { PaginationPropertySchema } from "../../../../../../../models";
import { DeliveryResponseItemSchema } from "./response-item";

export const DeliveryResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: DeliveryResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
