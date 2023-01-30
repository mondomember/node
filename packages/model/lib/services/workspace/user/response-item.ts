import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../common";

import { EmailProperty, FirstNameProperty, LastNameProperty } from "./base";

export interface UserResponseItem
  extends IdProperty,
    EmailProperty,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
