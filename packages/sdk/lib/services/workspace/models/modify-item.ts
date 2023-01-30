import { JsonSchemaType } from "../../../schema";
import { MetadataPropertySchema } from "../../../models";
import { NamePropertySchema, SlugPropertySchema } from "./base";

export const TenantModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...MetadataPropertySchema,
  },
};
