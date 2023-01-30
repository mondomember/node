import { JsonSchemaType } from "../../../../../schema";
import { BrandingPropertySchema, IntegrationsPropertySchema } from "./base";

export const AppSettingsUpsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...BrandingPropertySchema,
    ...IntegrationsPropertySchema,
  },
};
