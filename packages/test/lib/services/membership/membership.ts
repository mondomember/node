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
    Membership.MembershipStatus.ACTIVE,
    Membership.MembershipStatus.CANCELED,
    Membership.MembershipStatus.LAPSED,
    Membership.MembershipStatus.PENDING,
  ]),
};

const ContactsProperty: { contacts: [string, string, string] } = {
  contacts: [
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
    generateTestKSUID(Customer.UIDPrefix.CONTACT),
  ],
};

const PeriodProperty = {
  period: {
    startAt: chance.date().toISOString(),
    endAt: chance.date().toISOString(),
  },
};

const DescriptionProperty = {
  description: chance.paragraph({ sentences: 3 }),
};

const CustomerProperty = {
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
};

export function createTestMembership(
  overide?: Partial<Membership.MembershipResponseItem>
): Membership.MembershipResponseItem {
  return {
    id: generateTestKSUID(Membership.UIDPrefix.MEMBERSHIP),
    ...StatusProperty,
    ...CustomerProperty,
    product: {
      id: generateTestKSUID(Membership.UIDPrefix.PRODUCT),
      label: chance.word(),
    },
    ...ContactsProperty,
    ...DescriptionProperty,
    ...PeriodProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overide,
  };
}

export const CustomerRequestProperty = {
  customer: chance.pickone([
    {
      id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
    },
    {
      id: generateTestKSUID(Customer.UIDPrefix.CONTACT),
    },
  ]),
};

export function createTestInsertMembership(
  overide?: Partial<Membership.MembershipInsertItem>
): Membership.MembershipInsertItem {
  return {
    customer: chance.pickone([
      {
        id: generateTestKSUID(Customer.UIDPrefix.COMPANY),
      },
      {
        id: generateTestKSUID(Customer.UIDPrefix.CONTACT),
      },
    ]),
    product: {
      id: generateTestKSUID(Membership.UIDPrefix.PRODUCT),
    },
    ...ContactsProperty,
    ...PeriodProperty,
    ...DescriptionProperty,
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overide,
  };
}

export function createTestModifyMembership(
  overide?: Partial<Membership.MembershipModifyItem>
): Membership.MembershipModifyItem {
  return {
    ...ContactsProperty,
    ...DescriptionProperty,
    ...PeriodProperty,
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overide,
  };
}
