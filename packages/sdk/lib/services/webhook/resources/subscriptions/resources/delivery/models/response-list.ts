import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../models";
import {
  DeliveryResponseItemSchema,
  DeliveryResponseItemInterface,
} from "./response-item";

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

export interface DeliveryResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: DeliveryResponseItemInterface[];
}
