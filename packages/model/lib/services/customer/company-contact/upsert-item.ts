import { MetadataProperty, PropertiesProperty } from "../../../common";

export interface CompanyContactUpsertItem
  extends Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
