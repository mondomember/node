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
import { TypeProperty, DecimalProerty } from "./base";

export interface NumericFieldResponseItem
  extends IdProperty,
    TypeProperty,
    NameProperty,
    LabelProperty,
    FieldGroupProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<DecimalProerty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
