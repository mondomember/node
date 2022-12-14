import { Chance } from "chance";
import { Billing, Payment } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone([
    Billing.InvoiceTransactionStatus.PENDING,
    Billing.InvoiceTransactionStatus.SUCCESS,
    Billing.InvoiceTransactionStatus.FAIL,
  ]),
};

const NotesProperty = {
  notes: chance.paragraph({ sentences: 3 }),
};

const AmountProperty = {
  amount: chance.natural({ min: 1, max: 9999 }),
};

export function createTestAdjustmentInvoiceTransaction(
  props?: Partial<Billing.BasicInvoiceTransactionResponseItemInterface>
): Billing.BasicInvoiceTransactionResponseItemInterface {
  return {
    id: generateTestKSUID(Billing.UIDPrefix.INVOICE_TRANSACTION),
    ...{
      invoice: generateTestKSUID(Billing.UIDPrefix.INVOICE),
      type: Billing.InvoiceTransactionType.ADJUSTMENT,
    },
    ...StatusProperty,
    ...AmountProperty,
    ...NotesProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...props,
  };
}

export function createTestManualRefundInvoiceTransaction(
  props?: Partial<Billing.BasicInvoiceTransactionResponseItemInterface>
): Billing.BasicInvoiceTransactionResponseItemInterface {
  return {
    id: generateTestKSUID(Billing.UIDPrefix.INVOICE_TRANSACTION),
    ...{
      invoice: generateTestKSUID(Billing.UIDPrefix.INVOICE),
      type: Billing.InvoiceTransactionType.MANUAL_REFUND,
    },
    ...StatusProperty,
    ...AmountProperty,
    ...NotesProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...props,
  };
}

export function createTestChargeRefundInvoiceTransaction(
  props?: Partial<Billing.ChargeRefundInvoiceTransactionResponseItemInterface>
): Billing.ChargeRefundInvoiceTransactionResponseItemInterface {
  return {
    id: generateTestKSUID(Billing.UIDPrefix.INVOICE_TRANSACTION),
    ...{
      invoice: generateTestKSUID(Billing.UIDPrefix.INVOICE),
      charge: generateTestKSUID(Payment.UIDPrefix.CHARGE),
      refund: generateTestKSUID(Payment.UIDPrefix.REFUND),
      type: Billing.InvoiceTransactionType.CHARGE_REFUND,
    },
    ...StatusProperty,
    ...AmountProperty,
    ...NotesProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...props,
  };
}

export function createTestChargeInvoiceTransaction(
  props?: Partial<Billing.ChargeInvoiceTransactionResponseItemInterface>
): Billing.ChargeInvoiceTransactionResponseItemInterface {
  return {
    id: generateTestKSUID(Billing.UIDPrefix.INVOICE_TRANSACTION),
    ...{
      invoice: generateTestKSUID(Billing.UIDPrefix.INVOICE),
      charge: generateTestKSUID(Payment.UIDPrefix.CHARGE),
      type: Billing.InvoiceTransactionType.CHARGE,
    },
    ...StatusProperty,
    ...AmountProperty,
    ...NotesProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...props,
  };
}

export function createTestInvoiceTransaction(): Billing.InvoiceTransactionResponseItemInterface {
  return chance.pickone([
    createTestAdjustmentInvoiceTransaction(),
    createTestManualRefundInvoiceTransaction(),
    createTestChargeRefundInvoiceTransaction(),
    createTestChargeInvoiceTransaction(),
  ]);
}
