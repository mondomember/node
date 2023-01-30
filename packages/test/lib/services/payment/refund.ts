import { Chance } from "chance";
import { Payment, Customer } from "@mondomember/model";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone([
    Payment.RefundStatus.PROCESSING,
    Payment.RefundStatus.SUCCEEDED,
    Payment.RefundStatus.FAILED,
  ]),
};

const ChargeProperty = {
  charge: generateTestKSUID(Payment.UIDPrefix.CHARGE),
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
  },
};

const AmountProperty = {
  amount: chance.natural({ min: 1, max: 9999 }),
};

export function createTestInsertRefund(
  overrides?: Partial<Payment.RefundInsertItem>
): Payment.RefundInsertItem {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.REFUND),
    charge: generateTestKSUID(Payment.UIDPrefix.CHARGE),
    ...AmountProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyRefund(
  overrides?: Partial<Payment.RefundModifyItem>
): Payment.RefundModifyItem {
  return {
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestStripeRefund(
  overrides?: Partial<Payment.StripeRefundResponseItem>
): Payment.StripeRefundResponseItem {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.REFUND),
    ...StatusProperty,
    ...AmountProperty,
    ...ChargeProperty,
    ...PaymentProperty,
    ...GatewayProperty,
    ...StripeObjectProperty,
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
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestRefund(
  overrides?: Partial<Payment.RefundResponseItem>
): Payment.RefundResponseItem {
  return chance.pickone([createTestStripeRefund(overrides)]);
}
