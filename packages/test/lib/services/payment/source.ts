import { Chance } from "chance";
import { Payment, CRM } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

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
  type: Payment.SourceType.CARD,
};

const StripeCardProperty = {
  card: {
    brand: chance.cc_type(),
    lastFour: chance.natural({ min: 1000, max: 9999 }),
    expirationMonth: chance.natural({ min: 1, max: 12 }),
    expirationYear: chance.natural({ min: 2020, max: 2030 }),
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
    ...StripeCardProperty,
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
