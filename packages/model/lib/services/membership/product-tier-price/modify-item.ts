import { MetadataProperty } from "../../../common";

import { DescriptionProperty } from "./base";

export interface ProductTierPriceModifyItem
  extends Partial<DescriptionProperty>,
    Partial<MetadataProperty> {}
