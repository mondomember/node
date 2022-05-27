import { JsonSchemaType } from "../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../models";
import {
  ActivityResponseItemSchema,
  ActivityResponseItemInterface,
} from "./response-item";

export const ActivityResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: ActivityResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface ActivityResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ActivityResponseItemInterface[];
}
