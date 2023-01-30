import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
  PropertiesPropertySchema,
} from "../../../../../models";

import {
  StatusPropertySchema,
  ContractParentPropertySchema,
  ContractChildPropertySchema,
  ContactsPropertySchema,
  PeriodPropertySchema,
  LineItemsResponsePropertySchema,
  ResponseBillingPropertySchema,
  ResponseRecurringPropertySchema,
  InvoicePropertySchema,
} from "./base";
import { Membership } from "@mondomember/model";
import { CustomerPropertyResponseSchema } from "../../../../customer/models";

export const ContractResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "status", "customer", "period", "createdAt", "updatedAt"],
  properties: {
    ...constructUIDPropertySchema(Membership.UIDPrefix.CONTRACT),
    ...StatusPropertySchema,
    ...ContractParentPropertySchema,
    ...ContractChildPropertySchema,
    ...CustomerPropertyResponseSchema,
    ...PeriodPropertySchema,
    ...LineItemsResponsePropertySchema,
    ...ResponseBillingPropertySchema,
    ...ResponseRecurringPropertySchema,
    ...ContactsPropertySchema,
    ...InvoicePropertySchema,
    ...PropertiesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
