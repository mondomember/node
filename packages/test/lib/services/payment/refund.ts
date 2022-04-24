import { Chance } from "chance";
import { Payment, CRM } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone(Payment.RefundStatusEnum),
};

const ChargeProperty = {
  charge: generateTestKSUID(Payment.UIDPrefix.CHARGE),
};

const SourceProperty = {
  source: generateTestKSUID(Payment.UIDPrefix.SOURCE),
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
  overrides?: Partial<Payment.RefundInsertItemInterface>
): Payment.RefundInsertItemInterface {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.REFUND),
    ...AmountProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyRefund(
  overrides?: Partial<Payment.RefundModifyItemInterface>
): Payment.RefundModifyItemInterface {
  return {
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestStripeRefund(
  overrides?: Partial<Payment.StripeRefundResponseItemInterface>
): Payment.StripeRefundResponseItemInterface {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.REFUND),
    ...StatusProperty,
    ...AmountProperty,
    ...ChargeProperty,
    ...SourceProperty,
    ...GatewayProperty,
    ...StripeObjectProperty,
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
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestRefund(
  overrides?: Partial<Payment.RefundResponseItemInterface>
): Payment.RefundResponseItemInterface {
  return chance.pickone([createTestStripeRefund(overrides)]);
}
