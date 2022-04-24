import { JsonSchemaType } from "../../../../../schema";
import { NameSchema, NameInterface } from "./base";

export const SettingsResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...NameSchema,
  },
};

export interface SettingsResponseItemInterface extends NameInterface {}
