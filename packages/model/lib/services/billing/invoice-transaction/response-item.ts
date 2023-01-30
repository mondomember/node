import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../common";
import {
  InvoiceProperty,
  AmountProperty,
  NotesProperty,
  StatusProperty,
} from "./base";
import { InvoiceTransactionType } from "./interfaces";

export interface BasicInvoiceTransactionResponseItem
  extends IdProperty,
    StatusProperty,
    InvoiceProperty,
    AmountProperty,
    Partial<NotesProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {
  type:
    | typeof InvoiceTransactionType.MANUAL_REFUND
    | typeof InvoiceTransactionType.ADJUSTMENT;
}

export interface ChargeInvoiceTransactionResponseItem
  extends IdProperty,
    StatusProperty,
    InvoiceProperty,
    AmountProperty,
    Partial<NotesProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {
  charge: string;
  type: typeof InvoiceTransactionType.CHARGE;
}

export interface ChargeRefundInvoiceTransactionResponseItem
  extends IdProperty,
    StatusProperty,
    InvoiceProperty,
    AmountProperty,
    Partial<NotesProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {
  charge: string;
  refund: string;
  type: typeof InvoiceTransactionType.CHARGE_REFUND;
}

/**
 * COMBINED / UNIONS
 */
export type InvoiceTransactionResponseItem =
  | BasicInvoiceTransactionResponseItem
  | ChargeRefundInvoiceTransactionResponseItem
  | ChargeInvoiceTransactionResponseItem;
