import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../common";
import {
  UrlProperty,
  EventsProperty,
  LabelProperty,
  AuthProperty,
} from "./base";

export interface SubscriptionResponseItem
  extends IdProperty,
    EventsProperty,
    UrlProperty,
    Partial<LabelProperty>,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty>,
    Partial<AuthProperty> {}
