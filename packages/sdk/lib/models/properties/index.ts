import { JsonSchemaType } from "../../schema";
import {
  NumericSchema,
  TextSchema,
  ToggleSchema,
  NumericInterface,
  TextInterface,
  ToggleInterface,
} from "./types";

export * from "./base";
export * from "./map";
export * from "./factory";

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

export type PropertiesInterface = {
  [k: string]: NumericInterface | TextInterface | ToggleInterface;
};

export type PropertiesType = PropertiesInterface;

export interface PropertiesPropertyInterface {
  properties: PropertiesType;
}
