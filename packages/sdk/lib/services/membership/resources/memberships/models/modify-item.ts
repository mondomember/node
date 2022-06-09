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
  PeriodPropertyInterface,
  PeriodPropertySchema,
} from "./base";

export const MembershipModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ContactsPropertySchema,
    ...DescriptionPropertySchema,
    ...PeriodPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface MembershipModifyItemInterface
  extends Partial<PeriodPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
