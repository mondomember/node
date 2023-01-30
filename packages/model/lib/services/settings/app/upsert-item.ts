import { BrandingProperty, IntegrationsProperty } from "./base";

export interface AppUpsertItem
  extends Partial<BrandingProperty>,
    Partial<IntegrationsProperty> {}
