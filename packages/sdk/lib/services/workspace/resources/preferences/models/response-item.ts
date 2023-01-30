import { JsonSchemaType } from "../../../../../schema";
import { ViewsSchema } from "./base";

export const PreferencesResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ViewsSchema,
  },
};
