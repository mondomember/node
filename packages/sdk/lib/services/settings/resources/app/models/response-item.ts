import { JsonSchemaType } from "../../../../../schema";
import {
  NamePropertySchema,
  NamePropertyInterface,
  AppPropertySchema,
  AppPropertyInterface,
  BrandingPropertySchema,
  BrandingPropertyInterface,
  IntegrationsPropertyInterface,
  IntegrationsPropertySchema,
} from "./base";

export const AppSettingsResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...NamePropertySchema,
    ...AppPropertySchema,
    ...BrandingPropertySchema,
    ...IntegrationsPropertySchema,
  },
};

export interface AppSettingsResponseItemInterface
  extends NamePropertyInterface,
    AppPropertyInterface,
    Partial<BrandingPropertyInterface>,
    Partial<IntegrationsPropertyInterface> {}
