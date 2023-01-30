import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  LastUpdatedProperty,
} from "../../../common";

import {
  StatusProperty,
  FilenameProperty,
  TypeProperty,
  OwnerProperty,
  TotalCountProperty,
  ImportCountProperty,
  ErrorCountProperty,
} from "./base";

export interface JobResponseItem
  extends IdProperty,
    StatusProperty,
    FilenameProperty,
    TypeProperty,
    TotalCountProperty,
    ImportCountProperty,
    ErrorCountProperty,
    Partial<OwnerProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<LastUpdatedProperty> {}
