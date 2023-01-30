import { Chance } from "chance";
import { Import } from "@mondomember/model";

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
  overrides?: Partial<Import.UploadResponseItem>
): Import.UploadResponseItem {
  return {
    ...UrlProperty,
    ...FieldsProperty,
    ...overrides,
  };
}
