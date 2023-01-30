import { JsonSchemaType } from "../../../../../schema";
import {
  MetadataPropertySchema,
  PropertiesPropertySchema,
  ExternalIdPropertySchema,
} from "../../../../../models";
import { CustomerPropertyRequestSchema } from "../../../../customer/models";
import {
  ContactsPropertySchema,
  DescriptionPropertySchema,
  PeriodPropertySchema,
  ProductPropertyRequestSchema,
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
    ...PeriodPropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...ExternalIdPropertySchema,
  },
};
