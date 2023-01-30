import {
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
  PropertiesProperty,
} from "../../../common";

import { Contact, Company } from "./base";

export interface CompanyContactResponseItem
  extends CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {
  contact: Contact;
  company: Company;
}
