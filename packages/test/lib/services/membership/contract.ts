import { Chance } from "chance";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createMetadataProperty,
  createPropertiesProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Customer, Membership } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone([
    Membership.ContractStatus.UPCOMING,
    Membership.ContractStatus.ACTIVE,
    Membership.ContractStatus.FULFILLED,
    Membership.ContractStatus.CANCELED,
  ]),
};

const ContactsProperty: { contacts: [string, string, string] } = {
  contacts: [
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
  ],
};

const PeriodDatesProperty = {
  period: {
    startAt: chance.date().toISOString(),
    endAt: chance.date().toISOString(),
  },
};

const TestContractProps: Membership.ContractResponseItem = {
  id: generateTestKSUID(Membership.UIDPrefix.CONTRACT),
  ...StatusProperty,
  ...PeriodDatesProperty,
  ...ContactsProperty,
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
  lines: [
    {
      type: "Product",
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
  overides?: Partial<Membership.ContractResponseItem>
): Membership.ContractResponseItem {
  return {
    ...TestContractProps,
    ...overides,
  };
}

export function createTestInsertContract(
  overides?: Partial<Membership.ContractInsertItem>
): Membership.ContractInsertItem {
  return {
    ...PeriodDatesProperty,
    ...ContactsProperty,
    customer: {
      id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
    },
    lines: [
      {
        type: "Product",
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
  overides?: Partial<Membership.ContractModifyItem>
): Membership.ContractModifyItem {
  return {
    ...PeriodDatesProperty,
    ...ContactsProperty,
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overides,
  };
}
