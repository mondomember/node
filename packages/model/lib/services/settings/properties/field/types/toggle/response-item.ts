import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../../../../common";
import {
  NameProperty,
  LabelProperty,
  DescriptionProperty,
  FieldGroupProperty,
  OrderProperty,
} from "../../base";
import { TypeProperty, AutoSelectProperty } from "./base";

export interface ToggleFieldResponseItem
  extends IdProperty,
    TypeProperty,
    NameProperty,
    LabelProperty,
    FieldGroupProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<AutoSelectProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
