import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import { InvoiceTransactionType } from "./interfaces";

const TypeProperty = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [
      InvoiceTransactionType.MANUAL_REFUND,
      InvoiceTransactionType.ADJUSTMENT,
    ],
  },
};

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

export const InvoiceTransactionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "amount"],
  properties: {
    ...TypeProperty,
    ...AmountProperty,
    ...NotesProperty,
  },
};

interface ManualRefund {
  type: typeof InvoiceTransactionType.MANUAL_REFUND;
  amount: number;
  notes?: string;
}

interface Other {
  type: typeof InvoiceTransactionType.ADJUSTMENT;
  amount: number;
  notes?: string;
}

export type InvoiceTransactionInsertItemInterface = ManualRefund | Other;
