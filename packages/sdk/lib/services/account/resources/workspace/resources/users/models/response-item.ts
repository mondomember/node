import { JsonSchemaType } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";

import {
  UserIdPropertySchema,
  EmailPropertySchema,
  EmailPropertyInterface,
  FirstNamePropertySchema,
  FirstNamePropertyInterface,
  LastNamePropertySchema,
  LastNamePropertyInterface,
} from "./base";

export const WorkspaceUserResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "email", "createdAt", "updatedAt"],
  properties: {
    ...UserIdPropertySchema,
    ...EmailPropertySchema,
    ...FirstNamePropertySchema,
    ...LastNamePropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...MetadataPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface WorkspaceUserResponseItemInterface
  extends IdPropertyInterface,
    EmailPropertyInterface,
    Partial<FirstNamePropertyInterface>,
    Partial<LastNamePropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
