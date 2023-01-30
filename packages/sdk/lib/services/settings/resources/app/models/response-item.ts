import { JsonSchemaType } from "../../../../../schema";
import {
  NamePropertySchema,
  AppPropertySchema,
  BrandingPropertySchema,
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
