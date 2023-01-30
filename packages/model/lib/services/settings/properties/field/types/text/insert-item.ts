import { IdProperty } from "../../../../../../common";
import {
  NameProperty,
  LabelProperty,
  DescriptionProperty,
  FieldGroupProperty,
  OrderProperty,
} from "../../base";
import { TypeProperty, MultilineProperty } from "./base";

export interface TextFieldInsertItem
  extends Partial<IdProperty>,
    TypeProperty,
    NameProperty,
    LabelProperty,
    FieldGroupProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty>,
    Partial<MultilineProperty> {}
