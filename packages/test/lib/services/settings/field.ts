import { Chance } from "chance";
import { Settings, FieldType } from "@mondomember/sdk";

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
  overrides?: Partial<Settings.TextFieldInsertItemInterface>
): Settings.TextFieldInsertItemInterface {
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
  overrides?: Partial<Settings.NumericFieldInsertItemInterface>
): Settings.NumericFieldInsertItemInterface {
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
  overrides?: Partial<Settings.ToggleFieldInsertItemInterface>
): Settings.ToggleFieldInsertItemInterface {
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
export function createTestModifyField(): Settings.FieldModifyItemInterface {
  return chance.pickone([
    createTestModifyTextField(),
    createTestModifyNumericField(),
    createTestModifyToggleField(),
  ]);
}

export function createTestModifyTextField(
  overrides?: Partial<Settings.TextFieldModifyItemInterface>
): Settings.TextFieldModifyItemInterface {
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
  overrides?: Partial<Settings.NumericFieldModifyItemInterface>
): Settings.NumericFieldModifyItemInterface {
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
  overrides?: Partial<Settings.ToggleFieldModifyItemInterface>
): Settings.ToggleFieldModifyItemInterface {
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
export function createTestField(): Settings.FieldResponseItemInterface {
  return chance.pickone([
    createTestTextField(),
    createTestNumericField(),
    createTestToggleField(),
  ]);
}

export function createTestTextField(
  overrides?: Partial<Settings.TextFieldResponseItemInterface>
): Settings.TextFieldResponseItemInterface {
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
  overrides?: Partial<Settings.NumericFieldResponseItemInterface>
): Settings.NumericFieldResponseItemInterface {
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
  overrides?: Partial<Settings.ToggleFieldResponseItemInterface>
): Settings.ToggleFieldResponseItemInterface {
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
