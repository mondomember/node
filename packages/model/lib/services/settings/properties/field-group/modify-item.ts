import { LabelProperty, DescriptionProperty, OrderProperty } from "./base";

export interface FieldGroupModifyItem
  extends Partial<LabelProperty>,
    Partial<DescriptionProperty>,
    Partial<OrderProperty> {}
