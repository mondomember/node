import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";
import {
  ContactsPropertySchema,
  DescriptionPropertySchema,
  PartialPeriodPropertySchema,
} from "./base";

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
