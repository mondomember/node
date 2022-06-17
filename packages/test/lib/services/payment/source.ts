import { Chance } from "chance";
import { Payment, CRM } from "@mondomember/sdk";

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
  overrides?: Partial<Payment.StripeSourceInsertItemInterface>
): Payment.StripeSourceInsertItemInterface {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.SOURCE),
    customer: {
      id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
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
  overrides?: Partial<Payment.SourceSessionInsertItemInterface>
): Payment.SourceSessionInsertItemInterface {
  return {
    customer: {
      id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
    },
    ...GatewayProperty,
    ...overrides,
  };
}

export function createTestInsertSource(
  overrides?: Partial<Payment.SourceInsertItemInterface>
): Payment.SourceInsertItemInterface {
  return chance.pickone([createTestInsertStripeSource(overrides)]);
}

export function createTestModifyStripeSource(
  overrides?: Partial<Payment.StripeSourceModifyItemInterface>
): Payment.StripeSourceModifyItemInterface {
  return {
    ...LabelProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifySource(
  overrides?: Partial<Payment.SourceModifyItemInterface>
): Payment.SourceModifyItemInterface {
  return chance.pickone([createTestModifyStripeSource(overrides)]);
}

export function createTestStripeSource(
  overrides?: Partial<Payment.StripeSourceResponseItemInterface>
): Payment.StripeSourceResponseItemInterface {
  return {
    id: generateTestKSUID(Payment.UIDPrefix.SOURCE),
    ...LabelProperty,
    ...GatewayProperty,
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
    ...DefaultProperty,
    ...StripeTypeProperty,
    ...StripeObjectProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestSource(
  overrides?: Partial<Payment.SourceResponseItemInterface>
): Payment.SourceResponseItemInterface {
  return chance.pickone([createTestStripeSource(overrides)]);
}
