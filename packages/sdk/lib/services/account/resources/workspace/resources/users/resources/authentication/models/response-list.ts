import { JsonSchemaType } from "../../../../../../../../../schema";
import {
  WorkspaceUserAuthenticationResponseItemSchema,
  WorkspaceUserAuthenticationResponseItemInterface,
} from "./response-item";

export const WorkspaceUserAuthenticationResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: WorkspaceUserAuthenticationResponseItemSchema,
    },
  },
};

export interface WorkspaceUserAuthenticationResponseListInterface {
  items?: WorkspaceUserAuthenticationResponseItemInterface[];
}
