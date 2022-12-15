import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import { InvoiceTransactionType } from "./interfaces";

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
    charge: {
      type: JsonSchemaType.STRING,
    },
    ...AmountProperty,
    ...NotesProperty,
  },
};

const InvoiceChargeTransactionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [InvoiceTransactionType.CHARGE],
    },
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

export const InvoiceTransactionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    InvoiceChargeRefundTransactionInsertItemSchema,
    InvoiceChargeTransactionInsertItemSchema,
    InvoiceManualRefundTransactionInsertItemSchema,
    InvoiceAdjustmentTransactionInsertItemSchema,
  ],
};

interface Charge {
  type: typeof InvoiceTransactionType.CHARGE;
  notes?: string;
}

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

interface Other {
  type: typeof InvoiceTransactionType.ADJUSTMENT;
  amount: number;
  notes?: string;
}

export type InvoiceTransactionInsertItemInterface =
  | Charge
  | ChargeRefund
  | ManualRefund
  | Other;
