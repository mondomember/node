import { JsonSchemaType } from "../../../../../../../schema";
import { ViewsSchema, ViewsItemInterface } from "./base";

export const WorkspacePreferencesUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ViewsSchema,
  },
};

export interface WorkspacePreferencesUpsertItemInterface
  extends Partial<ViewsItemInterface> {}
