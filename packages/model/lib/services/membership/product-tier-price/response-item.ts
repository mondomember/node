import {
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../common";
import { AmountProperty, DescriptionProperty, VersionProperty } from "./base";

export interface ProductTierPriceResponseItem
  extends VersionProperty,
    AmountProperty,
    Partial<DescriptionProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
