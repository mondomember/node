import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  LabelPropertySchema,
  DescriptionPropertySchema,
  AuthorizationsPropertySchema,
} from "./base";

export const WorkspaceTokenInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...AuthorizationsPropertySchema,
  },
};
