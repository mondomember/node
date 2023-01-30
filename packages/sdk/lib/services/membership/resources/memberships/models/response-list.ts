import { JsonSchemaType } from "../../../../../schema";
import { PaginationPropertySchema } from "../../../../../models";
import {
  MembershipResponseItemSchema,
  DelegatedMembershipResponseItemSchema,
} from "./response-item";

const AnyMembershipResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [MembershipResponseItemSchema, DelegatedMembershipResponseItemSchema],
};

export const MembershipResponseListSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: JsonSchemaType.ARRAY,
      items: AnyMembershipResponseItemSchema,
    },
    ...PaginationPropertySchema,
  },
};
