import { Chance } from "chance";
import { Payment, CRM, Billing } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone(Payment.ChargeStatusEnum),
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
    status: "succeeded",
  },
};

const ReferenceProperty = {
  reference: chance.string(),
};

export function createTestInsertCharge(
  overrides?: Partial<Payment.ChargeInsertItemInterface>
): Payment.ChargeInsertItemInterface {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.CHARGE),
    ...AmountProperty,
    ...SourceProperty,
    customer: {
      id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
    },
    ...InvoiceProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyCharge(
  overrides?: Partial<Payment.ChargeModifyItemInterface>
): Payment.ChargeModifyItemInterface {
  return {
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestStripeCharge(
  overrides?: Partial<Payment.StripeChargeResponseItemInterface>
): Payment.StripeChargeResponseItemInterface {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.CHARGE),
    ...StatusProperty,
    ...RefundableAmountProperty,
    ...AmountProperty,
    ...SourceProperty,
    ...GatewayProperty,
    ...StripeObjectProperty,
    ...ReferenceProperty,
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
    ...InvoiceProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestCharge(
  overrides?: Partial<Payment.ChargeResponseItemInterface>
): Payment.ChargeResponseItemInterface {
  return chance.pickone([createTestStripeCharge(overrides)]);
}
