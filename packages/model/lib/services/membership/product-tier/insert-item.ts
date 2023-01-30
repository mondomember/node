import { MetadataProperty } from "../../../common";

import { LabelProperty, DescriptionProperty } from "./base";

interface Price {
  price: {
    amount: number;
  };
}

export interface ProductTierInsertItem
  extends LabelProperty,
    Partial<DescriptionProperty>,
    Price,
    Partial<MetadataProperty> {}
