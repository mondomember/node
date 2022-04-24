import { Chance } from "chance";
import { Import } from "@mondomember/sdk";

import { generateTestKSUID, createCreatedAtProperty } from "../../utils";

const chance: Chance.Chance = new Chance();

const JobProperty = {
  job: generateTestKSUID(Import.UIDPrefix.JOB),
};

const RowProperty = {
  row: JSON.stringify({
    [chance.word()]: chance.string(),
    [chance.word()]: chance.word(),
  }),
};

const OperationProperty = {
  operation: chance.pickone(Import.RowOperationEnum),
};

const ImportedIdProperty = {
  importedId: chance.guid(),
};

export function createTestRow(
  overrides?: Partial<Import.RowResponseItemInterface>
): Import.RowResponseItemInterface {
  return {
    id: generateTestKSUID(Import.UIDPrefix.ROW),
    ...JobProperty,
    ...RowProperty,
    ...OperationProperty,
    ...ImportedIdProperty,
    ...createCreatedAtProperty(),
    ...overrides,
  };
}
