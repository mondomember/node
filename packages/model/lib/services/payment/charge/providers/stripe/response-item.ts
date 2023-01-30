import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../../../common";
import { CustomerPropertyResponse } from "../../../../customer";
import {
  StatusProperty,
  RefundableAmountProperty,
  AmountProperty,
  PaymentResponseProperty,
  InvoiceProperty,
  ReferenceProperty,
  GatewayProperty,
} from "../../base";
import { ChargeType } from "../../interfaces";
import { StripeObjectProperty } from "./base";

interface BaseStripeChargeResponseItem
  extends IdProperty,
    StatusProperty,
    PaymentResponseProperty,
    CustomerPropertyResponse,
    GatewayProperty,
    AmountProperty,
    StripeObjectProperty,
    ReferenceProperty,
    RefundableAmountProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}

interface StripeInvoiceChargeResponseItem
  extends BaseStripeChargeResponseItem,
    InvoiceProperty {
  type: typeof ChargeType.INVOICE;
}

export interface StripeChargeResponseItem
  extends StripeInvoiceChargeResponseItem {}
