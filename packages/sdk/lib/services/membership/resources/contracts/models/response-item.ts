import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
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
  StatusPropertySchema,
  StatusPropertyInterface,
  ContractParentPropertySchema,
  ContractParentPropertyInterface,
  ContractChildPropertySchema,
  ContractChildPropertyInterface,
  ContactsPropertySchema,
  ContactsPropertyInterface,
  PeriodPropertySchema,
  PeriodPropertyInterface,
  LineItemsResponsePropertySchema,
  LineItemsResponsePropertyInterface,
  ResponseBillingPropertySchema,
  ResponseBillingPropertyInterface,
  ResponseRecurringPropertySchema,
  ResponseRecurringPropertyInterface,
  InvoicePropertySchema,
  InvoicePropertyInterface,
} from "./base";
import { UIDPrefix } from "../../../constants";

import {
  CustomerPropertyResponseSchema,
  CustomerPropertyResponseInterface,
} from "../../../../crm/models";

export const ContractResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "status", "customer", "period", "createdAt", "updatedAt"],
  properties: {
    ...constructUIDPropertySchema(UIDPrefix.CONTRACT),
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

export interface ContractResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    CustomerPropertyResponseInterface,
    PeriodPropertyInterface,
    Partial<ContractParentPropertyInterface>,
    Partial<ContractChildPropertyInterface>,
    Partial<LineItemsResponsePropertyInterface>,
    Partial<ResponseBillingPropertyInterface>,
    Partial<ResponseRecurringPropertyInterface>,
    Partial<ContactsPropertyInterface>,
    Partial<InvoicePropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface>,
    Partial<PropertiesPropertyInterface> {}
