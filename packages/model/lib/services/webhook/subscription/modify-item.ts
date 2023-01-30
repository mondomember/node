import {
  UrlProperty,
  EventsProperty,
  LabelProperty,
  AuthProperty,
} from "./base";

export interface SubscriptionModifyItem
  extends Partial<EventsProperty>,
    Partial<UrlProperty>,
    Partial<LabelProperty>,
    Partial<AuthProperty> {}
