import { MetadataProperty, PropertiesProperty } from "../../../common";
import { ContactsProperty, DescriptionProperty, PeriodProperty } from "./base";

import { DeepPartial } from "utility-types";

export interface MembershipModifyItem
  extends DeepPartial<PeriodProperty>,
    Partial<ContactsProperty>,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty>,
    Partial<PropertiesProperty> {}
