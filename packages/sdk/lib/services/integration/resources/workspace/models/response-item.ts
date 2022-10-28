import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../models";

import {
  IdPropertyInterface,
  IdPropertySchema,
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  AuthorizationsPropertyInterface,
  AuthorizationsPropertySchema,
  TokenPropertySchema,
  TokenPropertyInterface,
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

export interface WorkspaceTokenResponseItemInterface
  extends IdPropertyInterface,
    TokenPropertyInterface,
    LabelPropertyInterface,
    AuthorizationsPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
