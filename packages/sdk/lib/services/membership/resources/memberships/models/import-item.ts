import { JsonSchemaType } from "../../../../../schema";
import { IdPropertyInterface } from "../../../../../models";

import {
  MembershipInsertItemSchema,
  MembershipInsertItemInterface,
} from "./insert-item";
import {
  MembershipModifyItemSchema,
  MembershipModifyItemInterface,
} from "./modify-item";

const AnyIdPropertySchema = {
  id: {
    type: JsonSchemaType.STRING,
  },
};

export const MembershipImportInsertItemSchema = {
  ...MembershipInsertItemSchema,
  additionalProperties: true,
  properties: {
    ...MembershipInsertItemSchema?.properties,
    ...AnyIdPropertySchema,
  },
};

export const MembershipImportModifyItemSchema = {
  ...MembershipModifyItemSchema,
  additionalProperties: true,
  required: ["id"],
  properties: {
    ...MembershipModifyItemSchema?.properties,
    ...AnyIdPropertySchema,
  },
};

export const MembershipImportItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  oneOf: [MembershipImportInsertItemSchema, MembershipImportModifyItemSchema],
};

export interface MembershipImportInsertItemInterface
  extends MembershipInsertItemInterface {}

export interface MembershipImportModifyItemInterface
  extends MembershipModifyItemInterface,
    IdPropertyInterface {}

export type MembershipImportItemInterface =
  | MembershipImportInsertItemInterface
  | MembershipImportModifyItemInterface;
