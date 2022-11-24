import { JsonSchemaType } from "../../../../../schema";
import { ViewsSchema, ViewsItemInterface } from "./base";

export const PreferencesUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ViewsSchema,
  },
};

export interface PreferencesUpsertItemInterface
  extends Partial<ViewsItemInterface> {}
