import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
  PropertiesPropertySchema,
  PropertiesPropertyInterface,
} from "../../../../../models";
import {
  ContactsPropertySchema,
  ContactsPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  JoinedAtPropertySchema,
  JoinedAtPropertyInterface,
  ExpiresAtPropertySchema,
  ExpiresAtPropertyInterface,
} from "./base";

export const MembershipModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ContactsPropertySchema,
    ...DescriptionPropertySchema,
    ...JoinedAtPropertySchema,
    ...ExpiresAtPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface MembershipModifyItemInterface
  extends Partial<JoinedAtPropertyInterface>,
    Partial<ExpiresAtPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
