import { JsonSchemaType } from "../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";
import { CustomerPropertyResponseSchema } from "../../../../customer/models";
import {
  StatusPropertySchema,
  ContactsPropertySchema,
  DescriptionPropertySchema,
  PeriodPropertySchema,
  ProductPropertyResponseSchema,
  MembershipIdPropertySchema,
  IsDelegatedPropertySchema,
} from "./base";

export const MembershipResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "customer",
    "product",
    "period",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...MembershipIdPropertySchema,
    ...StatusPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...ProductPropertyResponseSchema,
    ...ContactsPropertySchema,
    ...DescriptionPropertySchema,
    ...PeriodPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export const DelegatedMembershipResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "customer",
    "product",
    "delegated",
    "period",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...MembershipIdPropertySchema,
    ...StatusPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...ProductPropertyResponseSchema,
    ...IsDelegatedPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
