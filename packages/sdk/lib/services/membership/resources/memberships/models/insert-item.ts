import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";
import {
  CustomerPropertyRequestSchema,
  CustomerPropertyRequestInterface,
} from "../../../../../services/crm/models";
import {
  ContactsPropertySchema,
  ContactsPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  JoinedAtPropertySchema,
  JoinedAtPropertyInterface,
  ExpiresAtPropertySchema,
  ExpiresAtPropertyInterface,
  ProductPropertyRequestSchema,
  ProductPropertyRequestInterface,
} from "./base";

export const MembershipInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["customer", "product"],
  properties: {
    ...ProductPropertyRequestSchema,
    ...CustomerPropertyRequestSchema,
    ...ContactsPropertySchema,
    ...DescriptionPropertySchema,
    ...JoinedAtPropertySchema,
    ...ExpiresAtPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface MembershipInsertItemInterface
  extends ProductPropertyRequestInterface,
    CustomerPropertyRequestInterface,
    Partial<JoinedAtPropertyInterface>,
    Partial<ExpiresAtPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
