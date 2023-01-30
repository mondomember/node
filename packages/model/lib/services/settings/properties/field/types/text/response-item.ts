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
import { TypeProperty, MultilineProperty } from "./base";

export interface TextFieldResponseItem
  extends IdProperty,
    TypeProperty,
    NameProperty,
    LabelProperty,
    FieldGroupProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<MultilineProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
