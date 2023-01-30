import { JsonSchemaType } from "../../schema";
import { NumericSchema, TextSchema, ToggleSchema } from "./types";

export const PropertiesSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": {
      type: JsonSchemaType.OBJECT,
      anyOf: [NumericSchema, TextSchema, ToggleSchema],
    },
  },
};

export const PropertiesPropertySchema = {
  properties: PropertiesSchema,
};
