import { Chance } from "chance";
import { Payment, Customer, Billing } from "@mondomember/model";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone([
    Payment.ChargeStatus.PROCESSING,
    Payment.ChargeStatus.SUCCEEDED,
    Payment.ChargeStatus.FAILED,
    Payment.ChargeStatus.CANCELED,
    Payment.ChargeStatus.REFUNDED,
    Payment.ChargeStatus.REQUIRES_ACTION,
    Payment.ChargeStatus.PARTIALLY_REFUNDED,
  ]),
};

const RefundableAmountProperty = {
  refundableAmount: chance.natural({ min: 1, max: 9999 }),
};

const AmountProperty = {
  amount: chance.natural({ min: 1, max: 9999 }),
};

const InvoiceProperty = {
  invoice: generateTestKSUID(Billing.UIDPrefix.INVOICE),
};

const PaymentProperty = {
  payment: {
    type: Payment.ChargePaymentType.SOURCE,
    id: generateTestKSUID(Payment.UIDPrefix.SOURCE),
  },
};

const GatewayProperty = {
  gateway: {
    provider: Payment.Provider.STRIPE,
    id: chance.guid(),
  },
};

const StripeObjectProperty = {
  object: {
    id: chance.guid(),
    status: "succeeded",
  },
};

const ReferenceProperty = {
  reference: chance.string(),
};

export function createTestInsertChargeSession(
  overrides?: Partial<Payment.ChargeSessionInsertItem>
): Payment.ChargeSessionInsertItem {
  return {
    customer: {
      id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
    },
    invoice: generateTestKSUID(Billing.UIDPrefix.INVOICE),
    ...GatewayProperty,
    ...overrides,
  };
}

export function createTestInsertCharge(
  overrides?: Payment.ChargeInsertItem
): Payment.ChargeInsertItem {
  return {
    type: Payment.ChargeType.INVOICE,
    ...PaymentProperty,
    ...InvoiceProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyCharge(
  overrides?: Partial<Payment.ChargeModifyItem>
): Payment.ChargeModifyItem {
  return {
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestStripeCharge(
  overrides?: Partial<Payment.StripeChargeResponseItem>
): Payment.StripeChargeResponseItem {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.CHARGE),
    type: "Invoice",
    ...StatusProperty,
    ...PaymentProperty,
    ...RefundableAmountProperty,
    ...AmountProperty,
    ...GatewayProperty,
    ...StripeObjectProperty,
    ...ReferenceProperty,
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
    ...InvoiceProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestCharge(
  overrides?: Partial<Payment.ChargeResponseItem>
): Payment.ChargeResponseItem {
  return chance.pickone([createTestStripeCharge(overrides)]);
}
