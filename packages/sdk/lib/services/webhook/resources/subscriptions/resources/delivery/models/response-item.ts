import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../../../models";

import {
  EventPropertySchema,
  EventPropertyInterface,
  DataPropertySchema,
  DataPropertyInterface,
  ResponsePropertySchema,
  ResponsePropertyInterface,
  DeliveryIdPropertySchema,
  SubscriptionPropertyInterface,
} from "./base";
import { SubscriptionIdPropertySchema } from "../../../models";

export const DeliveryResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "subscription", "event", "data", "createdAt", "deletedAt"],
  properties: {
    ...DeliveryIdPropertySchema,
    ...SubscriptionIdPropertySchema,
    ...EventPropertySchema,
    ...DataPropertySchema,
    ...ResponsePropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface DeliveryResponseItemInterface
  extends IdPropertyInterface,
    SubscriptionPropertyInterface,
    EventPropertyInterface,
    DataPropertyInterface,
    ResponsePropertyInterface,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
