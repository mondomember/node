import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  LabelPropertyInterface,
  LabelPropertySchema,
  DescriptionPropertyInterface,
  DescriptionPropertySchema,
  AuthorizationsPropertyInterface,
  AuthorizationsPropertySchema,
} from "./base";

export const ServerSideTokenInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...AuthorizationsPropertySchema,
  },
};

export interface ServerSideTokenInsertItemInterface
  extends LabelPropertyInterface,
    DescriptionPropertyInterface,
    AuthorizationsPropertyInterface {}
