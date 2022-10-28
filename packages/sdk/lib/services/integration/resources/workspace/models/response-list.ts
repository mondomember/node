import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  WorkspaceTokenResponseItemSchema,
  WorkspaceTokenResponseItemInterface,
} from "./response-item";

export const WorkspaceTokenResponseListSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: WorkspaceTokenResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface WorkspaceTokenResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: WorkspaceTokenResponseItemInterface[];
}
