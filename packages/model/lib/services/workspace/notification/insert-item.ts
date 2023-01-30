import { IdProperty } from "../../../common";
import { MessageProperty, TitleProperty, TypeProperty } from "./base";

export interface NotificationInsertItem
  extends Partial<IdProperty>,
    TypeProperty,
    MessageProperty,
    Partial<TitleProperty> {}
