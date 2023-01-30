import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Workspace } from "@mondomember/model";

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
      Workspace.MembershipPlan.FREE,
      Workspace.MembershipPlan.ON_DEMAND,
      Workspace.MembershipPlan.BUSINCESS,
    ]),
  },
};

export function createTestTenant(
  overides?: Partial<Workspace.TenantResponseItem>
): Workspace.TenantResponseItem {
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
  overides?: Partial<Workspace.TenantInsertItem>
): Workspace.TenantInsertItem {
  return {
    id: chance.guid(),
    ...NameProperty,
    ...SlugProperty,
    ...createMetadataProperty(),
    ...overides,
  };
}

export function createTestModifyTenant(
  overides?: Partial<Workspace.TenantModifyItem>
): Workspace.TenantModifyItem {
  return {
    ...NameProperty,
    ...SlugProperty,
    ...createMetadataProperty(),
    ...overides,
  };
}
