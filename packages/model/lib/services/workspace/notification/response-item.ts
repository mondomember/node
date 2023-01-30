import {
  IdProperty,
  CreatedAtProperty,
  UpdatedAtProperty,
  DeletedAtProperty,
  LastUpdatedProperty,
} from "../../../common";

import { MessageProperty, TitleProperty, TypeProperty } from "./base";

export interface NotificationResponseItem
  extends IdProperty,
    Partial<TitleProperty>,
    MessageProperty,
    TypeProperty,
    CreatedAtProperty,
    UpdatedAtProperty,
    Partial<DeletedAtProperty>,
    Partial<LastUpdatedProperty> {}
