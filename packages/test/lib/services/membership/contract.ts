import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createPropertiesProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { CRM, Membership } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone(Membership.ContractStatusEnum),
};

const ContactsProperty: { contacts: [string, string, string] } = {
  contacts: [
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
  ],
};

const PeriodDatesProperty = {
  period: {
    startAt: chance.date().toISOString(),
    endAt: chance.date().toISOString(),
  },
};

const TestContractProps: Membership.ContractResponseItemInterface = {
  id: generateTestKSUID(Membership.UIDPrefix.CONTRACT),
  ...StatusProperty,
  ...PeriodDatesProperty,
  ...ContactsProperty,
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
  lines: [
    {
      quantity: 1,
      label: chance.word(),
      amount: chance.natural({ min: 1, max: 9999 }),
      product: {
        id: generateTestKSUID(Membership.UIDPrefix.PRODUCT),
        label: chance.word(),
        tier: {
          id: generateTestKSUID(Membership.UIDPrefix.PRODUCT_TIER),
          label: chance.word(),
          price: {
            version: chance.integer(),
            amount: chance.natural({ min: 1, max: 9999 }),
          },
        },
      },
    },
  ],
  ...createCreatedAtProperty(),
  ...createUpdatedAtProperty(),
  ...createMetadataProperty(),
  ...createPropertiesProperty(),
};

export function createTestContract(
  overides?: Partial<Membership.ContractResponseItemInterface>
): Membership.ContractResponseItemInterface {
  return {
    ...TestContractProps,
    ...overides,
  };
}

export function createTestInsertContract(
  overides?: Partial<Membership.ContractInsertItemInterface>
): Membership.ContractInsertItemInterface {
  return {
    ...PeriodDatesProperty,
    ...ContactsProperty,
    customer: {
      id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
    },
    lines: [
      {
        product: {
          id: generateTestKSUID(Membership.UIDPrefix.PRODUCT),
          tier: {
            id: generateTestKSUID(Membership.UIDPrefix.PRODUCT_TIER),
            price: {
              version: chance.integer(),
            },
          },
        },
      },
    ],
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overides,
  };
}

export function createTestModifyContract(
  overides?: Partial<Membership.ContractModifyItemInterface>
): Membership.ContractModifyItemInterface {
  return {
    ...PeriodDatesProperty,
    ...ContactsProperty,
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overides,
  };
}
