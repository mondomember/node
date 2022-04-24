import { JsonSchemaType, JsonSchema } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  IdPropertyInterface,
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

export const SubscriptionInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["events", "url"],
  properties: {
    ...constructUIDPropertySchema(UIDPrefix.SUBSCRIPTION),
    ...EventsPropertySchema,
    ...UrlPropertySchema,
    ...LabelPropertySchema,
    ...AuthPropertySchema,
  },
};

export interface SubscriptionInsertItemInterface
  extends Partial<IdPropertyInterface>,
    EventsPropertyInterface,
    UrlPropertyInterface,
    Partial<LabelPropertyInterface>,
    Partial<AuthPropertyInterface> {}
