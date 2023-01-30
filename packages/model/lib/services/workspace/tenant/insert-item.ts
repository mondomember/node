import { IdProperty, MetadataProperty } from "../../../common";
import { NameProperty, SlugProperty, SandboxProperty } from "./base";

export interface TenantInsertItem
  extends Partial<IdProperty>,
    NameProperty,
    Partial<SlugProperty>,
    Partial<SandboxProperty>,
    Partial<MetadataProperty> {}
