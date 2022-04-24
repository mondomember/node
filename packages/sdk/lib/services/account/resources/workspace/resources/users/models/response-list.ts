import { JsonSchemaType } from "../../../../../../../schema";
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
  },
};

export interface WorkspaceUserResponseListInterface {
  items?: WorkspaceUserResponseItemInterface[];
}
