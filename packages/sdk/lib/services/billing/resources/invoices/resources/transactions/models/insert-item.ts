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
    InvoiceManualRefundTransactionInsertItemSchema,
    InvoiceAdjustmentTransactionInsertItemSchema,
  ],
};

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

export type InvoiceTransactionInsertItemInterface = ManualRefund | Adjustment;
