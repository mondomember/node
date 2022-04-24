import { Chance } from "chance";
import { Payment } from "@mondomember/sdk";

import {
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

const DescriptionProperty = {
  description: chance.sentence(),
};

const StripeCodeProperty = {
  code: chance.guid(),
};

const StripeProviderProperty = {
  provider: Payment.Provider.STRIPE,
};

export function createTestInsertStripeGateway(
  overrides?: Partial<Payment.StripeGatewayInsertItemInterface>
): Payment.StripeGatewayInsertItemInterface {
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
  overrides?: Partial<Payment.GatewayInsertItemInterface>
): Payment.GatewayInsertItemInterface {
  return createTestInsertStripeGateway(overrides);
}

export function createModifyStripeGateway(
  overrides?: Partial<Payment.StripeGatewayModifyItemInterface>
): Payment.StripeGatewayModifyItemInterface {
  return {
    ...LabelProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestModifyGateway(
  overrides?: Partial<Payment.GatewayModifyItemInterface>
): Payment.GatewayModifyItemInterface {
  return chance.pickone([createModifyStripeGateway(overrides)]);
}

export function createTestStripeGateway(
  overrides?: Partial<Payment.StripeGatewayResponseItemInterface>
): Payment.StripeGatewayResponseItemInterface {
  return {
    id: chance.guid(),
    ...DefaultProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...StripeProviderProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overrides,
  };
}

export function createTestGateway(
  overrides?: Partial<Payment.GatewayResponseItemInterface>
): Payment.GatewayResponseItemInterface {
  return chance.pickone([createTestStripeGateway(overrides)]);
}
