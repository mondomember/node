import { JsonSchemaType } from "../../../../../../../schema";
import { ViewsSchema, ViewsItemInterface } from "./base";

export const WorkspacePreferencesResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ViewsSchema,
  },
};

export interface WorkspacePreferencesResponseItemInterface
  extends Partial<ViewsItemInterface> {}
