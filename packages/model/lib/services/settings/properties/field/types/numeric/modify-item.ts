import {
  LabelProperty,
  DescriptionProperty,
  OrderProperty,
  FieldGroupProperty,
} from "../../base";
import { TypeProperty, DecimalProerty } from "./base";

export interface NumericFieldModifyItem
  extends TypeProperty,
    Partial<FieldGroupProperty>,
    Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<DecimalProerty> {}
