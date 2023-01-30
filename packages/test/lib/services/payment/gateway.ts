import { Chance } from "chance";
import { Payment } from "@mondomember/model";

import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const IntegrationIdProperty = {
  integrationId: chance.guid(),
};

const LabelProperty = {
  label: chance.word(),
};

const DefaultProperty = {
  default: chance.bool(),
};

const DescriptionProperty = {
  description: chance.sentence(),
};

const StripeCodeProperty = {
  code: chance.guid(),
};

const StripeProviderProperty = {
  provider: Payment.Provider.STRIPE,
};

const StripeSettingsProviderProperty = {
  settings: {
    publishableKey: chance.guid(),
  },
};

export function createTestInsertStripeGateway(
  overrides?: Partial<Payment.StripeGatewayInsertItem>
): Payment.StripeGatewayInsertItem {
  return {
    id: chance.guid(),
    ...DefaultProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...StripeProviderProperty,
    ...StripeCodeProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestInsertGateway(
  overrides?: Partial<Payment.GatewayInsertItem>
): Payment.GatewayInsertItem {
  return createTestInsertStripeGateway(overrides);
}

export function createModifyStripeGateway(
  overrides?: Partial<Payment.StripeGatewayModifyItem>
): Payment.StripeGatewayModifyItem {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyGateway(
  overrides?: Partial<Payment.GatewayModifyItem>
): Payment.GatewayModifyItem {
  return chance.pickone([createModifyStripeGateway(overrides)]);
}

export function createTestStripeGateway(
  overrides?: Partial<Payment.StripeGatewayResponseItem>
): Payment.StripeGatewayResponseItem {
  return {
    id: chance.guid(),
    ...IntegrationIdProperty,
    ...DefaultProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...StripeProviderProperty,
    ...StripeSettingsProviderProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestGateway(
  overrides?: Partial<Payment.GatewayResponseItem>
): Payment.GatewayResponseItem {
  return chance.pickone([createTestStripeGateway(overrides)]);
}
