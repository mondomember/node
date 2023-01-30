import { MetadataProperty, ExternalIdsProperty } from "../../../common";

import { LabelProperty, DescriptionProperty } from "./base";

export interface ProductInsertItem
  extends LabelProperty,
    Partial<DescriptionProperty>,
    Partial<MetadataProperty>,
    Partial<ExternalIdsProperty> {}
