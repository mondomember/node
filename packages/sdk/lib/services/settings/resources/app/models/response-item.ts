import { JsonSchemaType } from "../../../../../schema";
import {
  NamePropertySchema,
  NamePropertyInterface,
  AppPropertySchema,
  AppPropertyInterface,
  BrandingPropertySchema,
  BrandingPropertyInterface,
} from "./base";

export const AppSettingsResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...NamePropertySchema,
    ...AppPropertySchema,
    ...BrandingPropertySchema,
  },
};

export interface AppSettingsResponseItemInterface
  extends NamePropertyInterface,
    AppPropertyInterface,
    BrandingPropertyInterface {}
