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
  status: chance.pickone(Membership.MembershipStatusEnum),
};

const ContactsProperty: { contacts: [string, string, string] } = {
  contacts: [
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
    generateTestKSUID(CRM.UIDPrefix.CONTACT),
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
};

export function createTestMembership(
  overide?: Partial<Membership.MembershipResponseItemInterface>
): Membership.MembershipResponseItemInterface {
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
      id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
    },
    {
      id: generateTestKSUID(CRM.UIDPrefix.CONTACT),
    },
  ]),
};

export function createTestInsertMembership(
  overide?: Partial<Membership.MembershipInsertItemInterface>
): Membership.MembershipInsertItemInterface {
  return {
    customer: chance.pickone([
      {
        id: generateTestKSUID(CRM.UIDPrefix.COMPANY),
      },
      {
        id: generateTestKSUID(CRM.UIDPrefix.CONTACT),
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
  overide?: Partial<Membership.MembershipModifyItemInterface>
): Membership.MembershipModifyItemInterface {
  return {
    ...ContactsProperty,
    ...DescriptionProperty,
    ...PeriodProperty,
    ...createMetadataProperty(),
    ...createPropertiesProperty(),
    ...overide,
  };
}
