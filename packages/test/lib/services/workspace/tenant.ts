import { Chance } from "chance";
import {
  createCreatedAtProperty,
  createMetadataProperty,
  createUpdatedAtProperty,
} from "../../utils";
import { Workspace } from "@mondomember/sdk";

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
  overides?: Partial<Workspace.TenantResponseItemInterface>
): Workspace.TenantResponseItemInterface {
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
  overides?: Partial<Workspace.TenantInsertItemInterface>
): Workspace.TenantInsertItemInterface {
  return {
    id: chance.guid(),
    ...NameProperty,
    ...SlugProperty,
    ...createMetadataProperty(),
    ...overides,
  };
}

export function createTestModifyTenant(
  overides?: Partial<Workspace.TenantModifyItemInterface>
): Workspace.TenantModifyItemInterface {
  return {
    ...NameProperty,
    ...SlugProperty,
    ...createMetadataProperty(),
    ...overides,
  };
}
