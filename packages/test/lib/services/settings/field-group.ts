import { Chance } from "chance";
import { Settings } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const Label = {
  label: chance.word(),
};

const Description = {
  description: chance.sentence(),
};

export function createTestInsertFieldGroup(
  overrides?: Partial<Settings.FieldGroupInsertItemInterface>
): Settings.FieldGroupInsertItemInterface {
  return {
    ...Label,
    ...Description,
    ...overrides,
  };
}

export function createTestModifyFieldGroup(
  overrides?: Partial<Settings.FieldGroupModifyItemInterface>
): Settings.FieldGroupModifyItemInterface {
  return {
    ...Label,
    ...Description,
    ...overrides,
  };
}

export function createTestFieldGroup(): Settings.FieldGroupResponseItemInterface {
  return {
    id: generateTestKSUID(Settings.UIDPrefix.FIELD_GROUP),
    ...Label,
    ...Description,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
  };
}
