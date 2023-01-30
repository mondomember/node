import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import { UrlPropertySchema, FieldsPropertySchema } from "./base";

export const UploadResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["url", "fields"],
  properties: {
    ...UrlPropertySchema,
    ...FieldsPropertySchema,
  },
};
