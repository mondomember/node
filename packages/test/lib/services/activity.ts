import { Chance } from "chance";
import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../utils";

import { Activity, FieldType, UIDPrefix } from "@mondomember/model";

const chance: Chance.Chance = new Chance();

const NoteActivity = {
  type: Activity.ActivityType.NOTE,
  message: chance.sentence(),
};

const OperationActivity = {
  type: Activity.ActivityType.OPERATION,
  operation: Activity.OperationType.AUTOMATION,
  message: chance.sentence(),
  target: generateTestKSUID("trgt"),
};

const DeltaActivity = {
  type: Activity.ActivityType.DELTA,
  operation: Activity.OperationType.AUTOMATION,
  diff: {
    attributes: {
      [chance.word()]: {
        source: chance.string(),
        target: chance.string(),
      },
    },
    properties: {
      [chance.word()]: {
        id: generateTestKSUID(UIDPrefix.FIELD),
        type: FieldType.TEXT,
        source: chance.string(),
        target: chance.string(),
      },
    },
  },
};

function createActivitySource(override?: string): string {
  return override || generateTestKSUID("srce");
}

function createSourceProperty(override?: string) {
  return {
    source: createActivitySource(override),
  };
}

function createTestPerformedBy(override?: any) {
  return {
    identifier: chance.guid(),
    type: Activity.PerformerType.SYSTEM,
    ...override,
  };
}

function createPerformedByProperty(override?: any) {
  return {
    performedBy: createTestPerformedBy(override),
  };
}

export function createTestActivity(): Activity.ActivityResponseItem {
  return chance.pickone([
    createTestNoteActivity(),
    createTestOperationActivity(),
    createTestDeltaActivity(),
  ]);
}

export function createTestNoteActivity(
  overrides?: Partial<Activity.NoteActivityResponseItem>
): Activity.NoteActivityResponseItem {
  return {
    id: generateTestKSUID(Activity.UIDPrefix.ACTIVITY),
    ...NoteActivity,
    ...createPerformedByProperty(),
    ...createSourceProperty(),
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createTestOperationActivity(
  overrides?: Partial<Activity.OperationActivityResponseItem>
): Activity.OperationActivityResponseItem {
  return {
    id: generateTestKSUID(Activity.UIDPrefix.ACTIVITY),
    ...OperationActivity,
    ...createPerformedByProperty(),
    ...createSourceProperty(),
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createTestDeltaActivity(
  overrides?: Partial<Activity.DeltaActivityResponseItem>
): Activity.DeltaActivityResponseItem {
  return {
    id: generateTestKSUID(Activity.UIDPrefix.ACTIVITY),
    ...DeltaActivity,
    ...createPerformedByProperty(),
    ...createSourceProperty(),
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}

export function createTestInsertActivity(
  overrides?: Partial<Activity.ActivityInsertItem>
): Activity.ActivityInsertItem {
  return createTestInsertNoteActivity(overrides);
}

export function createTestInsertNoteActivity(
  overrides?: Partial<Activity.NoteActivityInsertItem>
): Activity.NoteActivityInsertItem {
  return {
    ...NoteActivity,
    ...overrides,
  };
}

export function createTestModifyActivity(
  overrides?: Partial<Activity.ActivityModifyItem>
): Activity.ActivityModifyItem {
  return createTestModifyNoteActivity(overrides);
}

export function createTestModifyNoteActivity(
  overrides?: Partial<Activity.NoteActivityModifyItem>
): Activity.NoteActivityModifyItem {
  return {
    message: chance.sentence(),
    ...overrides,
  };
}
