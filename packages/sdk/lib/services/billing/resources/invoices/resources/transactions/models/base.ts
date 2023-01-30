import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../../models";
import { Billing } from "@mondomember/model";

export const InvoiceTransactionIdSchema = constructUIDSchema([
  Billing.UIDPrefix.INVOICE_TRANSACTION,
]);

export const InvoiceTransactionIdPropertySchema = constructUIDPropertySchema(
  Billing.UIDPrefix.INVOICE_TRANSACTION
);

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: [
      Billing.InvoiceTransactionStatus.PENDING,
      Billing.InvoiceTransactionStatus.SUCCESS,
      Billing.InvoiceTransactionStatus.FAIL,
    ],
    minLength: 1,
  },
};

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.NUMBER,
  },
};

export const NotesPropertySchema = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};
