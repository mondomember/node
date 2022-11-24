import { JsonSchemaType } from "../../../../../schema";
import {
  IdentityWorkspaceResponseItemSchema,
  IdentityWorkspaceResponseItemInterface,
} from "./response-item";

export const IdentityWorkspaceResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: IdentityWorkspaceResponseItemSchema,
    },
  },
};

export interface IdentityWorkspaceResponseListInterface {
  items?: IdentityWorkspaceResponseItemInterface[];
}
