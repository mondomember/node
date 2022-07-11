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
  PartialPeriodPropertySchema,
} from "./base";

import { DeepPartial } from "utility-types";

export const MembershipModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...ContactsPropertySchema,
    ...DescriptionPropertySchema,
    ...PartialPeriodPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface MembershipModifyItemInterface
  extends DeepPartial<PeriodPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
