import { JsonSchemaType } from "../../../schema";
import { MetadataPropertySchema } from "../../../models";
import {
  NamePropertySchema,
  SlugPropertySchema,
  TenantIdPropertySchema,
  SandboxPropertySchema,
} from "./base";

export const TenantInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...TenantIdPropertySchema,
    ...NamePropertySchema,
    ...SlugPropertySchema,
    ...SandboxPropertySchema,
    ...MetadataPropertySchema,
  },
};
