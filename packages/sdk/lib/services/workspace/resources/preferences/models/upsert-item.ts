import { JsonSchemaType } from "../../../../../schema";
import { ViewsSchema } from "./base";

export const PreferencesUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ViewsSchema,
  },
};
