import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  constructUIDSchema,
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  InvoiceTransactionIdPropertySchema,
  InvoicePropertyInterface,
  AmountPropertySchema,
  AmountPropertyInterface,
  NotesPropertySchema,
  NotesPropertyInterface,
  StatusPropertySchema,
  StatusPropertyInterface,
} from "./base";
import { InvoiceTransactionType } from "./interfaces";
import { InvoiceIdSchema } from "../../../models/base";
import * as Payment from "../../../../../../../services/payment";

const ChargeIdSchema = constructUIDSchema([Payment.UIDPrefix.CHARGE]);
const RefundIdSchema = constructUIDSchema([Payment.UIDPrefix.REFUND]);

export const BasicInvoiceTransactionResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "invoice",
    "type",
    "amount",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...InvoiceTransactionIdPropertySchema,
    ...{
      type: {
        type: JsonSchemaType.STRING,
        enum: [
          InvoiceTransactionType.CHARGE,
          InvoiceTransactionType.CHARGE_REFUND,
          InvoiceTransactionType.MANUAL_REFUND,
          InvoiceTransactionType.ADJUSTMENT,
        ],
      },
      invoice: InvoiceIdSchema,
    },
    ...StatusPropertySchema,
    ...AmountPropertySchema,
    ...NotesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface BasicInvoiceTransactionResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    InvoicePropertyInterface,
    AmountPropertyInterface,
    Partial<NotesPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {
  type:
    | typeof InvoiceTransactionType.MANUAL_REFUND
    | typeof InvoiceTransactionType.ADJUSTMENT;
}

export const ChargeInvoiceTransactionResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "invoice",
    "type",
    "charge",
    "amount",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...InvoiceTransactionIdPropertySchema,
    ...{
      type: {
        type: JsonSchemaType.STRING,
        enum: [InvoiceTransactionType.CHARGE],
      },
      invoice: InvoiceIdSchema,
      charge: ChargeIdSchema,
    },
    ...StatusPropertySchema,
    ...AmountPropertySchema,
    ...NotesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface ChargeInvoiceTransactionResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    InvoicePropertyInterface,
    AmountPropertyInterface,
    Partial<NotesPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {
  charge: string;
  type: typeof InvoiceTransactionType.CHARGE;
}

export const ChargeRefundInvoiceTransactionResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: [
    "id",
    "status",
    "invoice",
    "type",
    "charge",
    "refund",
    "amount",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    ...InvoiceTransactionIdPropertySchema,
    ...{
      type: {
        type: JsonSchemaType.STRING,
        enum: [InvoiceTransactionType.CHARGE_REFUND],
      },
      invoice: InvoiceIdSchema,
      charge: ChargeIdSchema,
      refund: RefundIdSchema,
    },
    ...StatusPropertySchema,
    ...AmountPropertySchema,
    ...NotesPropertySchema,
    ...MetadataPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface ChargeRefundInvoiceTransactionResponseItemInterface
  extends IdPropertyInterface,
    StatusPropertyInterface,
    InvoicePropertyInterface,
    AmountPropertyInterface,
    Partial<NotesPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<LastUpdatedPropertyInterface>,
    Partial<MetadataPropertyInterface> {
  charge: string;
  refund: string;
  type: typeof InvoiceTransactionType.CHARGE_REFUND;
}

/**
 * COMBINED / UNIONS
 */
export type InvoiceTransactionResponseItemInterface =
  | BasicInvoiceTransactionResponseItemInterface
  | ChargeRefundInvoiceTransactionResponseItemInterface
  | ChargeInvoiceTransactionResponseItemInterface;

export const InvoiceTransactionResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    BasicInvoiceTransactionResponseItemSchema,
    ChargeRefundInvoiceTransactionResponseItemSchema,
    ChargeInvoiceTransactionResponseItemSchema,
  ],
};
