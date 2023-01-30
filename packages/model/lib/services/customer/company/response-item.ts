import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
  PropertiesProperty,
} from "../../../common";

import { NameProperty } from "./base";

export interface CompanyResponseItem
  extends IdProperty,
    NameProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
