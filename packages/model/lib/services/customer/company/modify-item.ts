import { MetadataProperty, PropertiesProperty } from "../../../common";

import { NameProperty } from "./base";

export interface CompanyModifyItem
  extends Partial<NameProperty>,
    Partial<PropertiesProperty>,
    Partial<MetadataProperty> {}
