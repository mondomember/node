import { Chance } from "chance";
import { Billing, Membership, Customer } from "@mondomember/model";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
  createPropertiesProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone([
    Billing.InvoiceStatus.DRAFT,
    Billing.InvoiceStatus.OPEN,
    Billing.InvoiceStatus.PAID,
    Billing.InvoiceStatus.PROCESSING,
    Billing.InvoiceStatus.VOID,
    Billing.InvoiceStatus.PAST_DUE,
  ]),
};

const PaymentIntentProperty = {
  paymentIntent: chance.pickone([
    Billing.InvoicePaymentMethodType.CHECK,
    Billing.InvoicePaymentMethodType.CASH,
    Billing.InvoicePaymentMethodType.SOURCE,
    Billing.InvoicePaymentMethodType.TOKEN,
    Billing.InvoicePaymentMethodType.WIRE,
  ]),
};

const CustomerProperty = {
  customer: {
    id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
  },
};

const ContactsProperty: { contacts: [string, string, string] } = {
  contacts: [
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
  ],
};

const ContractProperty = {
  contract: generateTestKSUID(Membership.UIDPrefix.CONTRACT),
};

const AdjustmentsTotal = {
  adjustmentsTotal: chance.natural({ min: 1, max: 9999 }),
};

const ProductTotal = {
  linesTotal: chance.natural({ min: 1, max: 9999 }),
};

const PayableTotal = {
  payableTotal: chance.natural({ min: 1, max: 9999 }),
};

const AdjustedTotal = {
  adjustedTotal: chance.natural({ min: 1, max: 9999 }),
};

const Discount = {
  discount: {
    amount: chance.natural({ min: 1, max: 9999 }),
    description: chance.paragraph({ sentences: 3 }),
  },
};

const DueAt = {
  dueAt: chance.date().toISOString(),
};

export function createTestInsertInvoice(
  overrides?: Partial<Billing.InvoiceInsertItem>
): Billing.InvoiceInsertItem {
  return {
    ...CustomerProperty,
    ...ContractProperty,
    ...DueAt,
    ...Discount,
    ...PaymentIntentProperty,
    ...createPropertiesProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyInvoice(
  overrides?: Partial<Billing.InvoiceModifyItem>
): Billing.InvoiceModifyItem {
  return {
    ...DueAt,
    ...Discount,
    ...PaymentIntentProperty,
    ...createPropertiesProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestInvoicePayment(
  overrides?: Partial<Billing.InvoiceResponseItem["payment"]>
): Billing.InvoiceResponseItem["payment"] {
  return {
    status: Billing.InvoicePaymentStatus.SUCCCESSFUL,
    method: {
      type: Billing.InvoicePaymentMethodType.CASH,
    },
    receipt: {
      type: Billing.InvoicePaymentReceiptType.MANUAL,
    },
    paidAt: new Date().toISOString(),
    lastActivityAt: new Date().toISOString(),
    ...overrides,
  };
}

export function createTestInvoice(
  overrides?: Partial<Billing.InvoiceResponseItem>
): Billing.InvoiceResponseItem {
  return {
    id: generateTestKSUID(Billing.UIDPrefix.INVOICE),
    ...StatusProperty,
    customer: chance.pickone([
      {
        id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
        type: Customer.CustomerType.COMPANY,
        name: chance.company(),
      },
      {
        id: generateTestKSUID(Customer.UIDPrefix.CONTACT),
        type: Customer.CustomerType.CONTACT,
        email: chance.email(),
        firstName: chance.first(),
        lastName: chance.last(),
      },
    ]),
    ...ContractProperty,
    ...ContactsProperty,
    ...Discount,
    ...DueAt,
    ...AdjustmentsTotal,
    ...ProductTotal,
    ...PayableTotal,
    ...AdjustedTotal,
    ...PaymentIntentProperty,
    payment: createTestInvoicePayment(),
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overrides,
  };
}
