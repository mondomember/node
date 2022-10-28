import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Account } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const NameProperty = {
  name: chance.company(),
};

const SlugProperty = {
  slug: chance.string({ length: 12 }),
};

const MembershipProperty = {
  membership: {
    plan: chance.pickone([
      Account.MembershipPlan.FREE,
      Account.MembershipPlan.ON_DEMAND,
      Account.MembershipPlan.BUSINCESS,
    ]),
  },
};

export function createTestTenant(
  overides?: Partial<Account.WorkspaceTenantResponseItemInterface>
): Account.WorkspaceTenantResponseItemInterface {
  return {
    id: chance.guid(),
    ...NameProperty,
    ...SlugProperty,
    ...MembershipProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...createMetadataProperty(),
    ...overides,
  };
}

export function createTestInsertTenant(
  overides?: Partial<Account.WorkspaceTenantInsertItemInterface>
): Account.WorkspaceTenantInsertItemInterface {
  return {
    id: chance.guid(),
    ...NameProperty,
    ...SlugProperty,
    ...createMetadataProperty(),
    ...overides,
  };
}

export function createTestModifyTenant(
  overides?: Partial<Account.WorkspaceTenantModifyItemInterface>
): Account.WorkspaceTenantModifyItemInterface {
  return {
    ...NameProperty,
    ...SlugProperty,
    ...createMetadataProperty(),
    ...overides,
  };
}
