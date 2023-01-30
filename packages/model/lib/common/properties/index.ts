import { NumericInterface, TextInterface, ToggleInterface } from "./types";

export * from "./map";
export * from "./factory";

export type Properties = {
  [k: string]: NumericInterface | TextInterface | ToggleInterface;
};

export type PropertiesType = Properties;

export interface PropertiesProperty {
  properties: PropertiesType;
}
