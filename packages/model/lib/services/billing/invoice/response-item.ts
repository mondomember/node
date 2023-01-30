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
  ContractProperty,
  StatusProperty,
  LineItemsResponseProperty,
  PaymentIntentProperty,
  ResponseAutoPayProperty,
  PaymentPropertyResponse,
  ContactsProperty,
  AdjustmentsTotalProperty,
  LinesTotalProperty,
  PayableTotalProperty,
  AdjustedTotalProperty,
  DiscountProperty,
  DueAtProperty,
} from "./base";

import { CustomerPropertyResponse } from "../../customer";

export interface InvoiceResponseItem
  extends IdProperty,
    StatusProperty,
    CustomerPropertyResponse,
    Partial<ContractProperty>,
    Partial<LineItemsResponseProperty>,
    Partial<AdjustmentsTotalProperty>,
    LinesTotalProperty,
    PayableTotalProperty,
    AdjustedTotalProperty,
    DiscountProperty,
    DueAtProperty,
    Partial<PaymentIntentProperty>,
    Partial<ResponseAutoPayProperty>,
    Partial<PaymentPropertyResponse>,
    Partial<ContactsProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
