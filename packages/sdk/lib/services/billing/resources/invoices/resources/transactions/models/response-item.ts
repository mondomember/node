import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  LastUpdatedPropertySchema,
  MetadataPropertySchema,
} from "../../../../../../../models";
import {
  InvoiceTransactionIdPropertySchema,
  AmountPropertySchema,
  NotesPropertySchema,
  StatusPropertySchema,
} from "./base";

import { InvoiceIdSchema } from "../../../models/base";
import { Billing, Payment } from "@mondomember/model";

const ChargeIdSchema = constructUIDSchema([Payment.UIDPrefix.CHARGE]);
const RefundIdSchema = constructUIDSchema([Payment.UIDPrefix.REFUND]);

export const BasicInvoiceTransactionResponseItemSchema = {
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
          Billing.InvoiceTransactionType.CHARGE,
          Billing.InvoiceTransactionType.CHARGE_REFUND,
          Billing.InvoiceTransactionType.MANUAL_REFUND,
          Billing.InvoiceTransactionType.ADJUSTMENT,
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

export const ChargeInvoiceTransactionResponseItemSchema = {
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
        enum: [Billing.InvoiceTransactionType.CHARGE],
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

export const ChargeRefundInvoiceTransactionResponseItemSchema = {
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
        enum: [Billing.InvoiceTransactionType.CHARGE_REFUND],
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

export const InvoiceTransactionResponseItemSchema = {
  type: JsonSchemaType.OBJECT,
  oneOf: [
    BasicInvoiceTransactionResponseItemSchema,
    ChargeRefundInvoiceTransactionResponseItemSchema,
    ChargeInvoiceTransactionResponseItemSchema,
  ],
};
