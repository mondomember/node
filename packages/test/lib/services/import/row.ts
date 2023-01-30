import { Chance } from "chance";
import { Import } from "@mondomember/model";

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
  operation: chance.pickone([
    Import.RowOperation.CREATE,
    Import.RowOperation.UPDATE,
  ]),
};

const ImportedIdProperty = {
  importedId: chance.guid(),
};

export function createTestRow(
  overrides?: Partial<Import.RowResponseItem>
): Import.RowResponseItem {
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
