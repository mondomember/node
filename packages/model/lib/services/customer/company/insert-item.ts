import {
  MetadataProperty,
  PropertiesProperty,
  ExternalIdsProperty,
} from "../../../common";

import { NameProperty } from "./base";

export interface CompanyInsertItem
  extends NameProperty,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty>,
    Partial<ExternalIdsProperty> {}
