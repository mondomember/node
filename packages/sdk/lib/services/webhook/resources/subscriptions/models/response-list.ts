import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  SubscriptionResponseItemSchema,
  SubscriptionResponseItemInterface,
} from "./response-item";

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

export interface SubscriptionResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: SubscriptionResponseItemInterface[];
}
