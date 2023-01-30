import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import { SubscriptionResponseItemSchema } from "./response-item";

export const SubscriptionResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: SubscriptionResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
