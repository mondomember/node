import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../common";

import {
  EventProperty,
  DataProperty,
  ResponseProperty,
  SubscriptionProperty,
} from "./base";

export interface DeliveryResponseItem
  extends IdProperty,
    SubscriptionProperty,
    EventProperty,
    DataProperty,
    ResponseProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
