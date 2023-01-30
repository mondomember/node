import { IdProperty } from "../../../common";
import {
  UrlProperty,
  EventsProperty,
  LabelProperty,
  AuthProperty,
} from "./base";

export interface SubscriptionInsertItem
  extends Partial<IdProperty>,
    EventsProperty,
    UrlProperty,
    Partial<LabelProperty>,
    Partial<AuthProperty> {}
