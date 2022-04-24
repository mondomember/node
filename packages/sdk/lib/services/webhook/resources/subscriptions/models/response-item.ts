import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../models";
import {
  UrlPropertySchema,
  UrlPropertyInterface,
  EventsPropertySchema,
  EventsPropertyInterface,
  LabelPropertySchema,
  LabelPropertyInterface,
  AuthPropertySchema,
  AuthPropertyInterface,
} from "./base";
import { UIDPrefix } from "../../../constants";

export const SubscriptionResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "events", "url", "createdAt", "deletedAt"],
  properties: {
    ...constructUIDPropertySchema(UIDPrefix.SUBSCRIPTION),
    ...EventsPropertySchema,
    ...UrlPropertySchema,
    ...LabelPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
    ...AuthPropertySchema,
  },
};

export interface SubscriptionResponseItemInterface
  extends IdPropertyInterface,
    EventsPropertyInterface,
    UrlPropertyInterface,
    Partial<LabelPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface>,
    Partial<AuthPropertyInterface> {}
