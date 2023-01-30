import {
  LabelProperty,
  DescriptionProperty,
  OrderProperty,
  FieldGroupProperty,
} from "../../base";
import { TypeProperty, AutoSelectProperty } from "./base";

export interface ToggleFieldModifyItem
  extends TypeProperty,
    Partial<FieldGroupProperty>,
    Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<AutoSelectProperty> {}
