import { JsonSchemaType } from "../../../../../../../schema";
import { Billing } from "@mondomember/model";

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

const InvoiceManualRefundTransactionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoiceTransactionType.MANUAL_REFUND],
    },
    ...AmountProperty,
    ...NotesProperty,
  },
};

const InvoiceAdjustmentTransactionInsertItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "amount"],
  properties: {
    type: {
      type: JsonSchemaType.STRING,
      enum: [Billing.InvoiceTransactionType.ADJUSTMENT],
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
