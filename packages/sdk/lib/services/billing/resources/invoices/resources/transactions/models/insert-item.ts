import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import { InvoiceTransactionType } from "./interfaces";
import { constructUIDSchema } from "../../../../../../../models";
import * as Payment from "../../../../../../../services/payment";

const AmountProperty = {
  amount: {
    type: JsonSchemaType.NUMBER,
  },
};

const NotesProperty = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};

const InvoiceChargeRefundTransactionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "charge"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceTransactionType.CHARGE_REFUND],
    },
    charge: constructUIDSchema([Payment.UIDPrefix.CHARGE]),
    ...AmountProperty,
    ...NotesProperty,
  },
};

const InvoiceManualRefundTransactionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceTransactionType.MANUAL_REFUND],
    },
    ...AmountProperty,
    ...NotesProperty,
  },
};

const InvoiceAdjustmentTransactionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceTransactionType.ADJUSTMENT],
    },
    ...AmountProperty,
    ...NotesProperty,
  },
};

export const InvoiceTransactionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  discriminator: { propertyName: "type" },
  oneOf: [
    InvoiceChargeRefundTransactionInsertItemSchema,
    InvoiceManualRefundTransactionInsertItemSchema,
    InvoiceAdjustmentTransactionInsertItemSchema,
  ],
};

interface ChargeRefund {
  type: typeof InvoiceTransactionType.CHARGE_REFUND;
  charge: string;
  amount?: number;
  notes?: string;
}

interface ManualRefund {
  type: typeof InvoiceTransactionType.MANUAL_REFUND;
  amount?: number;
  notes?: string;
}

interface Adjustment {
  type: typeof InvoiceTransactionType.ADJUSTMENT;
  amount: number;
  notes?: string;
}

export type InvoiceTransactionInsertItemInterface =
  | ChargeRefund
  | ManualRefund
  | Adjustment;
