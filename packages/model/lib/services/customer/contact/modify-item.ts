import { MetadataProperty, PropertiesProperty } from "../../../common";

import { EmailProperty, FirstNameProperty, LastNameProperty } from "./base";

export interface ContactModifyItem
  extends Partial<EmailProperty>,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    Partial<PropertiesProperty>,
    Partial<MetadataProperty> {}
