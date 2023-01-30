import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
  PropertiesProperty,
} from "../../../common";

import { EmailProperty, FirstNameProperty, LastNameProperty } from "./base";

export interface ContactResponseItem
  extends IdProperty,
    EmailProperty,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
