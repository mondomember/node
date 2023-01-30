import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  AuthorizationsPropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
} from "./base";

export const WorkspaceTokenModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...AuthorizationsPropertySchema,
  },
};
