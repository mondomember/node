import { JsonSchemaType, JsonSchema } from "../../../../../schema";

import {
  LabelPropertyInterface,
  LabelPropertySchema,
  DescriptionPropertyInterface,
  DescriptionPropertySchema,
  AuthorizationsPropertyInterface,
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

export interface WorkspaceTokenInsertItemInterface
  extends LabelPropertyInterface,
    DescriptionPropertyInterface,
    AuthorizationsPropertyInterface {}
