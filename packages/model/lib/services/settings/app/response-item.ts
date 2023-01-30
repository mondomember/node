import {
  NameProperty,
  AppProperty,
  BrandingProperty,
  IntegrationsProperty,
} from "./base";

export interface AppResponseItem
  extends NameProperty,
    AppProperty,
    Partial<BrandingProperty>,
    Partial<IntegrationsProperty> {}
