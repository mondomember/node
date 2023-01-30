import { MetadataProperty } from "../../../common";

import { LabelProperty, DescriptionProperty } from "./base";

interface Price {
  price: {
    version: number;
  };
}

export interface ProductTierModifyItem
  extends Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<Price>,
    Partial<MetadataProperty> {}
