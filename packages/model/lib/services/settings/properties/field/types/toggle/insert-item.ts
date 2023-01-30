import { IdProperty } from "../../../../../../common";
import {
  NameProperty,
  LabelProperty,
  DescriptionProperty,
  FieldGroupProperty,
  OrderProperty,
} from "../../base";
import { TypeProperty, AutoSelectProperty } from "./base";

export interface ToggleFieldInsertItem
  extends Partial<IdProperty>,
    TypeProperty,
    NameProperty,
    LabelProperty,
    FieldGroupProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<AutoSelectProperty> {}
