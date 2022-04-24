import { Chance } from "chance";
import { Import } from "@mondomember/sdk";

import {
  generateTestKSUID,
  createCreatedAtProperty,
  createUpdatedAtProperty,
} from "../../utils";

const chance: Chance.Chance = new Chance();

const StatusProperty = {
  status: chance.pickone(Import.JobStatusEnum),
};

const FilenameProperty = {
  filename: `${chance.word()}.csv`,
};

const TypeProperty = {
  type: `${chance.word()}`,
};

const OwnerProperty = {
  owner: `${chance.guid()}`,
};

const TotalCountProperty = {
  totalCount: chance.natural(),
};

const ImportCountProperty = {
  importCount: chance.natural(),
};

const ErrorCountProperty = {
  errorCount: chance.natural(),
};

export function createTestJob(
  overrides?: Partial<Import.JobResponseItemInterface>
): Import.JobResponseItemInterface {
  return {
    id: generateTestKSUID(Import.UIDPrefix.JOB),
    ...StatusProperty,
    ...FilenameProperty,
    ...TypeProperty,
    ...OwnerProperty,
    ...TotalCountProperty,
    ...ImportCountProperty,
    ...ErrorCountProperty,
    ...createCreatedAtProperty(),
    ...createUpdatedAtProperty(),
    ...overrides,
  };
}
