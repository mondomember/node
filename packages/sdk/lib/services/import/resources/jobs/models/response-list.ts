import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  JobResponseItemSchema,
  JobResponseItemInterface,
} from "./response-item";

export const JobResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: JobResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface JobResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: JobResponseItemInterface[];
}
