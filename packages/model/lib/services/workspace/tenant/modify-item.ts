import { MetadataProperty } from "../../../common";
import { NameProperty, SlugProperty } from "./base";

export interface TenantModifyItem
  extends Partial<NameProperty>,
    Partial<SlugProperty>,
    Partial<MetadataProperty> {}
