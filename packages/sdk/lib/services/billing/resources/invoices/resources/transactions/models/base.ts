import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../../models";
import { UIDPrefix } from "../../../../../constants";
import {
  AnyInvoiceTransactionStatus,
  InvoiceTransactionStatus,
} from "./interfaces";

export const InvoiceTransactionIdSchema = constructUIDSchema([
  UIDPrefix.INVOICE_TRANSACTION,
]);

export const InvoiceTransactionIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.INVOICE_TRANSACTION
);

export interface InvoicePropertyInterface {
  invoice: string;
}

export const StatusPropertySchema = {
  status: {
    type: JsonSchemaType.STRING,
    enum: [InvoiceTransactionStatus.SUCCESS, InvoiceTransactionStatus.FAIL],
    minLength: 1,
  },
};

export interface StatusPropertyInterface {
  status: AnyInvoiceTransactionStatus;
}

export const AmountPropertySchema = {
  amount: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface AmountPropertyInterface {
  amount: number;
}

export const NotesPropertySchema = {
  notes: {
    type: JsonSchemaType.STRING,
  },
};

export interface NotesPropertyInterface {
  notes: string;
}
