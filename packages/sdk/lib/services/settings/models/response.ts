import { JsonSchemaType } from "../../../schema";
import { FieldGroupsSchema } from "./base";

export const SettingsResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": FieldGroupsSchema,
  },
};
