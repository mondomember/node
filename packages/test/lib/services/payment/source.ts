import { Chance } from "chance";
import { Payment, Customer } from "@mondomember/model";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

import Stripe from "stripe";

const chance: Chance.Chance = new Chance();

const LabelProperty = {
  label: chance.word(),
};

const DefaultProperty = {
  default: chance.bool(),
};

const ReferenceProperty = {
  reference: chance.guid(),
};

const TokenProperty = {
  token: chance.guid(),
};

const GatewayProperty = {
  gateway: {
    provider: Payment.Provider.STRIPE,
    id: chance.guid(),
  },
};

const StripeTypeProperty = {
  type: Payment.StripeSourceType.CARD,
};

const StripeObjectProperty: { object: Stripe.PaymentMethod } = {
  object: {
    id: "pm_1LBkORHpnRxnBMANbmn4Ejx6",
    object: "payment_method",
    billing_details: {
      address: {
        city: "San Francisco",
        country: "US",
        line1: "1234 Fake Street",
        line2: null,
        postal_code: "94102",
        state: null,
      },
      email: "jenny@example.com",
      name: null,
      phone: "+15555555555",
    },
    card: {
      brand: "visa",
      checks: {
        address_line1_check: null,
        address_postal_code_check: null,
        cvc_check: "pass",
      },
      country: "US",
      exp_month: 8,
      exp_year: 2023,
      fingerprint: "Rh0y8foVMHCZx21g",
      funding: "credit",
      // generated_from: null,
      last4: "4242",
      networks: {
        available: ["visa"],
        preferred: null,
      },
      three_d_secure_usage: {
        supported: true,
      },
      wallet: null,
    },
    created: 123456789,
    customer: null,
    livemode: false,
    metadata: {
      order_id: "123456789",
    },
    type: "card",
  },
};

export function createTestInsertStripeSource(
  overrides?: Partial<Payment.StripeSourceInsertItem>
): Payment.StripeSourceInsertItem {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.SOURCE),
    customer: {
      id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
    },
    ...GatewayProperty,
    ...DefaultProperty,
    ...LabelProperty,
    ...TokenProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestInsertSourceSession(
  overrides?: Partial<Payment.SourceSessionInsertItem>
): Payment.SourceSessionInsertItem {
  return {
    customer: {
      id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
    },
    ...GatewayProperty,
    ...overrides,
  };
}

export function createTestInsertSource(
  overrides?: Partial<Payment.SourceInsertItem>
): Payment.SourceInsertItem {
  return chance.pickone([createTestInsertStripeSource(overrides)]);
}

export function createTestModifyStripeSource(
  overrides?: Partial<Payment.StripeSourceModifyItem>
): Payment.StripeSourceModifyItem {
  return {
    ...LabelProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifySource(
  overrides?: Partial<Payment.SourceModifyItem>
): Payment.SourceModifyItem {
  return chance.pickone([createTestModifyStripeSource(overrides)]);
}

export function createTestStripeSource(
  overrides?: Partial<Payment.StripeSourceResponseItem>
): Payment.StripeSourceResponseItem {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.SOURCE),
    ...LabelProperty,
    ...GatewayProperty,
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
    ...DefaultProperty,
    ...ReferenceProperty,
    ...StripeTypeProperty,
    ...StripeObjectProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestSource(
  overrides?: Partial<Payment.SourceResponseItem>
): Payment.SourceResponseItem {
  return chance.pickone([createTestStripeSource(overrides)]);
}
