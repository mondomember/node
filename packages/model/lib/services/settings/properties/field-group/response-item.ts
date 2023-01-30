import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../../common";
import { LabelProperty, DescriptionProperty, OrderProperty } from "./base";

export interface FieldGroupResponseItem
  extends IdProperty,
    LabelProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
