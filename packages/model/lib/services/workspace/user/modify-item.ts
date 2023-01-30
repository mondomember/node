import { MetadataProperty } from "../../../common";

import { FirstNameProperty, LastNameProperty } from "./base";

export interface UserModifyItem
  extends Partial<FirstNameProperty>,
    Partial<LastNameProperty>,
    Partial<MetadataProperty> {}
