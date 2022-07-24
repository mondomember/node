import { JsonSchemaType } from "../../../../../schema";
import { NameSchema, NameInterface } from "./base";

export const AppSettingsResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...NameSchema,
  },
};

export interface AppSettingsResponseItemInterface extends NameInterface {}
