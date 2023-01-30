import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../common";
import {
  PriceProductResponse,
  LabelProperty,
  DescriptionProperty,
} from "./base";

export interface ProductTierResponseItem
  extends IdProperty,
    LabelProperty,
    PriceProductResponse,
    Partial<DescriptionProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
