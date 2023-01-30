import { IdProperty } from "../../../../../../common";
import {
  NameProperty,
  LabelProperty,
  DescriptionProperty,
  FieldGroupProperty,
  OrderProperty,
} from "../../base";
import { TypeProperty, DecimalProerty } from "./base";

export interface NumericFieldInsertItem
  extends Partial<IdProperty>,
    TypeProperty,
    NameProperty,
    LabelProperty,
    FieldGroupProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<DecimalProerty> {}
