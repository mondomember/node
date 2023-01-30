import { Chance } from "chance";
import { Settings } from "@mondomember/model";

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
  overrides?: Partial<Settings.FieldGroupInsertItem>
): Settings.FieldGroupInsertItem {
  return {
    ...Label,
    ...Description,
    ...overrides,
  };
}

export function createTestModifyFieldGroup(
  overrides?: Partial<Settings.FieldGroupModifyItem>
): Settings.FieldGroupModifyItem {
  return {
    ...Label,
    ...Description,
    ...overrides,
  };
}

export function createTestFieldGroup(): Settings.FieldGroupResponseItem {
  return {
    id: generateTestKSUID(Settings.UIDPrefix.FIELD_GROUP),
    ...Label,
    ...Description,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
  };
}
