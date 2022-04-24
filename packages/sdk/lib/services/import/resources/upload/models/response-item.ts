import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  UrlPropertyInterface,
  UrlPropertySchema,
  FieldsPropertyInterface,
  FieldsPropertySchema,
} from "./base";

export const UploadResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["url", "fields"],
  properties: {
    ...UrlPropertySchema,
    ...FieldsPropertySchema,
  },
};

export interface UploadResponseItemInterface
  extends UrlPropertyInterface,
    FieldsPropertyInterface {}
