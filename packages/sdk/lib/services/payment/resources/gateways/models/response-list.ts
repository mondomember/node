import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  GatewayResponseItemSchema,
  GatewayResponseItemInterface,
} from "./response-item";

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

export interface GatewayResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: GatewayResponseItemInterface[];
}
