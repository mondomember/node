import {
  LabelProperty,
  DescriptionProperty,
  OrderProperty,
  FieldGroupProperty,
} from "../../base";
import { TypeProperty, MultilineProperty } from "./base";

export interface TextFieldModifyItem
  extends TypeProperty,
    Partial<FieldGroupProperty>,
    Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<MultilineProperty> {}
