import { JsonSchemaType } from "../../../../../schema";
import { ViewsSchema, ViewsItemInterface } from "./base";

export const PreferencesResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ViewsSchema,
  },
};

export interface PreferencesResponseItemInterface
  extends Partial<ViewsItemInterface> {}
