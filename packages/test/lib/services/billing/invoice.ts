import { Chance } from "chance";
import { Billing, Membership, CRM } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
  createPropertiesProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone(Billing.InvoiceStatusEnum),
};

const PaymentIntentProperty = {
  paymentIntent: chance.pickone(Billing.InvoicePaymentMethodEnum),
};

const CustomerProperty = {
  customer: {
    id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
  },
};

const ContactsProperty: { contacts: [string, string, string] } = {
  contacts: [
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
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
  overrides?: Partial<Billing.InvoiceInsertItemInterface>
): Billing.InvoiceInsertItemInterface {
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
  overrides?: Partial<Billing.InvoiceModifyItemInterface>
): Billing.InvoiceModifyItemInterface {
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
  overrides?: Partial<Billing.InvoiceResponseItemInterface["payment"]>
): Billing.InvoiceResponseItemInterface["payment"] {
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
  overrides?: Partial<Billing.InvoiceResponseItemInterface>
): Billing.InvoiceResponseItemInterface {
  return {
    id: generateTestKSUID(Billing.UIDPrefix.INVOICE),
    ...StatusProperty,
    customer: chance.pickone([
      {
        id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
        type: CRM.CustomerType.COMPANY,
        name: chance.company(),
      },
      {
        id: generateTestKSUID(CRM.UIDPrefix.CONTACT),
        type: CRM.CustomerType.CONTACT,
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
