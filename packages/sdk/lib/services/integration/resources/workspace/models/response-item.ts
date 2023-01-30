import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../models";

import {
  IdPropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  AuthorizationsPropertySchema,
  TokenPropertySchema,
} from "./base";

export const WorkspaceTokenResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "jwt", "label", "createdAt", "updatedAt"],
  properties: {
    ...IdPropertySchema,
    ...TokenPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...AuthorizationsPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
