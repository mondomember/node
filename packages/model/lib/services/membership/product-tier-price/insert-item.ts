import { MetadataProperty } from "../../../common";

import { AmountProperty, DescriptionProperty, DefaultProperty } from "./base";

export interface ProductTierPriceInsertItem
  extends AmountProperty,
    Partial<DescriptionProperty>,
    Partial<DefaultProperty>,
    Partial<MetadataProperty> {}
