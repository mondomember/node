import { IdProperty } from "../../../../common";
import { LabelProperty, DescriptionProperty, OrderProperty } from "./base";

export interface FieldGroupInsertItem
  extends Partial<IdProperty>,
    LabelProperty,
    Partial<DescriptionProperty>,
    Partial<OrderProperty> {}
