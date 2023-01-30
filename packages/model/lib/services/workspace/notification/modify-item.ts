import { MessageProperty, TitleProperty, TypeProperty } from "./base";

export interface NotificationModifyItem
  extends Partial<TitleProperty>,
    Partial<MessageProperty>,
    Partial<TypeProperty> {}
