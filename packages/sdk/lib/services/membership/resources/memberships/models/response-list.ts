import { JsonSchemaType } from "../../../../../schema";
import {
  PaginationPropertySchema,
  PaginationPropertyInterface,
} from "../../../../../models";
import {
  MembershipResponseItemSchema,
  MembershipResponseItemInterface,
  DelegatedMembershipResponseItemSchema,
  DelegatedMembershipResponseItemInterface,
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

type ResponseItemInterface =
  | MembershipResponseItemInterface
  | DelegatedMembershipResponseItemInterface;

export interface MembershipResponseListInterface
  extends Partial<PaginationPropertyInterface> {
  items?: ResponseItemInterface[];
}
