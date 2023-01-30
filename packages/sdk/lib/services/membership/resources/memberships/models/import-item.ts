import { JsonSchemaType } from "../../../../../schema";

import { MembershipInsertItemSchema } from "./insert-item";
import { MembershipModifyItemSchema } from "./modify-item";

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
