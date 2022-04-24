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
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  AuthorizationsPropertyInterface,
  AuthorizationsPropertySchema,
  TokenPropertySchema,
  TokenPropertyInterface,
} from "./base";

export const ServerSideTokenResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["jwt", "label", "createdAt", "updatedAt"],
  properties: {
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

export interface ServerSideTokenResponseItemInterface
  extends TokenPropertyInterface,
    LabelPropertyInterface,
    AuthorizationsPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
