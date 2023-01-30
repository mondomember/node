import {
  MetadataProperty,
  PropertiesProperty,
  ExternalIdsProperty,
} from "../../../common";

import { EmailProperty, FirstNameProperty, LastNameProperty } from "./base";

export interface ContactInsertItem
  extends EmailProperty,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty>,
    Partial<ExternalIdsProperty> {}
