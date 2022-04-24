import { Chance } from "chance";
import {
  UIDPrefix,
  LastUpdatedInterface,
  LastUpdatedPropertyInterface,
  MetadataInterface,
  MetadataPropertyInterface,
  PropertiesInterface,
  PropertiesPropertyInterface,
  FieldType,
} from "@mondomember/sdk";
import { generateTestKSUID } from "./ids";

const chance: Chance.Chance = new Chance();

export function createCreatedAt(override?: string): string {
  return override || chance.date().toISOString();
}

export function createCreatedAtProperty(override?: string): {
  createdAt: string;
} {
  return {
    createdAt: createCreatedAt(override),
  };
}

export function createUpdatedAt(override?: string): string {
  return override || chance.date().toISOString();
}

export function createUpdatedAtProperty(override?: string): {
  updatedAt: string;
} {
  return {
    updatedAt: createUpdatedAt(override),
  };
}

export function createDeletedAt(override?: string): string {
  return override || chance.date().toISOString();
}

export function createDeletedAtProperty(override?: string): {
  deletedAt: string;
} {
  return {
    deletedAt: createDeletedAt(override),
  };
}

export function createLastUpdated(
  override?: Partial<LastUpdatedInterface>
): LastUpdatedInterface {
  return {
    ...{
      at: chance.date().toISOString(),
      by: {
        type: chance.pickone(["System", "Identity", "Automation"]),
        identifier: chance.guid(),
      },
    },
    ...override,
  };
}

export function createLastUpdatedProperty(
  override?: Partial<LastUpdatedInterface>
): LastUpdatedPropertyInterface {
  return {
    lastUpdated: createLastUpdated(override),
  };
}

export function createMetadata(): MetadataInterface {
  return {
    [chance.word()]: chance.word(),
    [chance.word()]: chance.sentence(),
    [chance.word()]: chance.date().toISOString(),
  };
}

export function createMetadataProperty(): MetadataPropertyInterface {
  return {
    metadata: createMetadata(),
  };
}

export function createProperties(): PropertiesInterface {
  return {
    [chance.word()]: {
      type: FieldType.NUMERIC,
      value: chance.integer(),
      id: generateTestKSUID(UIDPrefix.FIELD),
    },
    [chance.word()]: {
      type: FieldType.TOGGLE,
      value: chance.bool(),
      id: generateTestKSUID(UIDPrefix.FIELD),
    },
    [chance.word()]: {
      type: FieldType.TEXT,
      value: chance.sentence(),
      id: generateTestKSUID(UIDPrefix.FIELD),
    },
  };
}

export function createPropertiesProperty(): PropertiesPropertyInterface {
  return {
    properties: createProperties(),
  };
}
