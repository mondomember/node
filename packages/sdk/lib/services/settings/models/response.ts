import { JsonSchemaType, JsonSchema } from "../../../schema";
import { FieldGroupsSchema } from "./base";
import { FieldGroupsInterface } from "./interfaces";

export const SettingsResponseSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": FieldGroupsSchema,
  },
};

export interface SettingsResponseInterface {
  [resource: string]: FieldGroupsInterface;
}
