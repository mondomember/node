import { JsonSchemaType } from "../../../../../schema";
import {
  BrandingPropertySchema,
  BrandingPropertyInterface,
  IntegrationsPropertyInterface,
  IntegrationsPropertySchema,
} from "./base";

export const AppSettingsUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...BrandingPropertySchema,
    ...IntegrationsPropertySchema,
  },
};

export interface AppSettingsUpsertItemInterface
  extends Partial<BrandingPropertyInterface>,
    Partial<IntegrationsPropertyInterface> {}
