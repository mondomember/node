import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
  MetadataProperty,
} from "../../../common";
import { LabelProperty, DescriptionProperty } from "./base";

export interface ProductResponseItem
  extends IdProperty,
    LabelProperty,
    Partial<DescriptionProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<MetadataProperty> {}
