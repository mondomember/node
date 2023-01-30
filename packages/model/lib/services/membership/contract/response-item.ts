import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
  PropertiesProperty,
} from "../../../common";

import {
  StatusProperty,
  ContractParentProperty,
  ContractChildProperty,
  ContactsProperty,
  PeriodProperty,
  LineItemsResponseProperty,
  ResponseBillingProperty,
  ResponseRecurringProperty,
  InvoiceProperty,
} from "./base";

import { CustomerPropertyResponse } from "../../customer";

export interface ContractResponseItem
  extends IdProperty,
    StatusProperty,
    CustomerPropertyResponse,
    PeriodProperty,
    Partial<ContractParentProperty>,
    Partial<ContractChildProperty>,
    Partial<LineItemsResponseProperty>,
    Partial<ResponseBillingProperty>,
    Partial<ResponseRecurringProperty>,
    Partial<ContactsProperty>,
    Partial<InvoiceProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
