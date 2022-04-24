import { Chance } from "chance";
import { Import } from "@mondomember/sdk";

const chance: Chance.Chance = new Chance();

const UrlProperty = {
  url: chance.url(),
};

const FieldsProperty = {
  fields: {
    [chance.word()]: chance.string(),
    [chance.word()]: chance.string(),
    [chance.word()]: chance.string(),
  },
};

export function createTestUpload(
  overrides?: Partial<Import.UploadResponseItemInterface>
): Import.UploadResponseItemInterface {
  return {
    ...UrlProperty,
    ...FieldsProperty,
    ...overrides,
  };
}
