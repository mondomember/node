import { MetadataProperty } from "../../../common";

import { EmailProperty, FirstNameProperty, LastNameProperty } from "./base";

export interface UserInsertItem
  extends EmailProperty,
    Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    Partial<MetadataProperty> {}
