import { JsonSchemaType, JsonSchema } from "../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../../../models";

import {
  EventPropertySchema,
  DataPropertySchema,
  ResponsePropertySchema,
  DeliveryIdPropertySchema,
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
