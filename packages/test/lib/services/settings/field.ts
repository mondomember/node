import { Chance } from "chance";
import { FieldType, Settings } from "@mondomember/model";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const TextTypeProperty = {
  type: FieldType.TEXT,
};

const NumericTypeProperty = {
  type: FieldType.NUMERIC,
};

const ToggleTypeProperty = {
  type: FieldType.TOGGLE,
};

const GroupProperty = {
  group: generateTestKSUID(Settings.UIDPrefix.FIELD_GROUP),
};

const NameProperty = {
  name: chance.string(),
};

const LabelProperty = {
  label: chance.word(),
};

const DescriptionProperty = {
  description: chance.sentence(),
};

// INSERT
export function createTestInsertField() {
  return chance.pickone([
    createTestInsertTextField(),
    createTestInsertNumericField(),
    createTestInsertToggleField(),
  ]);
}

export function createTestInsertTextField(
  overrides?: Partial<Settings.TextFieldInsertItem>
): Settings.TextFieldInsertItem {
  return {
    ...TextTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...overrides,
  };
}

export function createTestInsertNumericField(
  overrides?: Partial<Settings.NumericFieldInsertItem>
): Settings.NumericFieldInsertItem {
  return {
    ...NumericTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...overrides,
  };
}

export function createTestInsertToggleField(
  overrides?: Partial<Settings.ToggleFieldInsertItem>
): Settings.ToggleFieldInsertItem {
  return {
    ...ToggleTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...overrides,
  };
}

// MODIFY
export function createTestModifyField(): Settings.FieldModifyItem {
  return chance.pickone([
    createTestModifyTextField(),
    createTestModifyNumericField(),
    createTestModifyToggleField(),
  ]);
}

export function createTestModifyTextField(
  overrides?: Partial<Settings.TextFieldModifyItem>
): Settings.TextFieldModifyItem {
  return {
    ...TextTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...overrides,
  };
}

export function createTestModifyNumericField(
  overrides?: Partial<Settings.NumericFieldModifyItem>
): Settings.NumericFieldModifyItem {
  return {
    ...NumericTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...overrides,
  };
}

export function createTestModifyToggleField(
  overrides?: Partial<Settings.ToggleFieldModifyItem>
): Settings.ToggleFieldModifyItem {
  return {
    ...ToggleTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...overrides,
  };
}

// RESPONSE
export function createTestField(): Settings.FieldResponseItem {
  return chance.pickone([
    createTestTextField(),
    createTestNumericField(),
    createTestToggleField(),
  ]);
}

export function createTestTextField(
  overrides?: Partial<Settings.TextFieldResponseItem>
): Settings.TextFieldResponseItem {
  return {
    id: generateTestKSUID(Settings.UIDPrefix.FIELD),
    ...TextTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createTestNumericField(
  overrides?: Partial<Settings.NumericFieldResponseItem>
): Settings.NumericFieldResponseItem {
  return {
    id: generateTestKSUID(Settings.UIDPrefix.FIELD),
    ...NumericTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createTestToggleField(
  overrides?: Partial<Settings.ToggleFieldResponseItem>
): Settings.ToggleFieldResponseItem {
  return {
    id: generateTestKSUID(Settings.UIDPrefix.FIELD),
    ...ToggleTypeProperty,
    ...NameProperty,
    ...GroupProperty,
    ...LabelProperty,
    ...DescriptionProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}
