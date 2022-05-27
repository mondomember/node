import { JsonSchemaType } from "../../../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../../../models";

import {
  WorkspaceUserResponseItemSchema,
  WorkspaceUserResponseItemInterface,
} from "./response-item";

export const WorkspaceUserResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: WorkspaceUserResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};

export interface WorkspaceUserResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: WorkspaceUserResponseItemInterface[];
}
