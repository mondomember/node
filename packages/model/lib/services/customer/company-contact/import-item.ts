import { ContactUpsert, CompanyUpsert } from "./base";

import { MetadataProperty, PropertiesProperty } from "../../../common";

export interface CompanyContactImportItem
  extends Partial<MetadataProperty>,
    Partial<PropertiesProperty> {
  contact: ContactUpsert;
  company: CompanyUpsert;
}
