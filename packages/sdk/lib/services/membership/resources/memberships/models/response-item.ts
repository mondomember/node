import { JsonSchemaType } from "../../../../../schema";
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
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";
import {
  CustomerPropertyResponseSchema,
  CustomerPropertyResponseInterface,
} from "../../../../crm/models";
import {
  StatusPropertySchema,
  StatusPropertyInterface,
  ContactsPropertySchema,
  ContactsPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  PeriodPropertyInterface,
  PeriodPropertySchema,
  ProductPropertyResponseSchema,
  ProductPropertyResponseInterface,
  MembershipIdPropertySchema,
  IsDelegatedPropertyInterface,
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

export interface MembershipResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    CustomerPropertyResponseInterface,
    ProductPropertyResponseInterface,
    PeriodPropertyInterface,
    Partial<ContactsPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}

export interface DelegatedMembershipResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    CustomerPropertyResponseInterface,
    ProductPropertyResponseInterface,
    PeriodPropertyInterface,
    IsDelegatedPropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
