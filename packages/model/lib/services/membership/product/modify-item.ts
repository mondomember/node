import { MetadataProperty } from "../../../common";

import { LabelProperty, DescriptionProperty } from "./base";

export interface ProductModifyItem
  extends Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty> {}
