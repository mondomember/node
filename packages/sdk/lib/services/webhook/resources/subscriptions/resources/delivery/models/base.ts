import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../../models";
import { Webhook } from "@mondomember/model";

export const DeliveryIdSchema = constructUIDSchema([
  Webhook.UIDPrefix.DELIVERY,
]);

export const DeliveryIdPropertySchema = constructUIDPropertySchema(
  Webhook.UIDPrefix.DELIVERY
);

export const EventSchema = {
  type: JsonSchemaType.STRING,
};

export const EventPropertySchema = {
  event: EventSchema,
};

export const DataSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  patternProperties: {
    "^.*$": {
      type: JsonSchemaType.STRING,
    },
  },
};

export const DataPropertySchema = {
  metadata: DataSchema,
};

export const ResponseSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    statusCode: { type: JsonSchemaType.NUMBER },
    message: { type: JsonSchemaType.STRING },
  },
};

export const ResponsePropertySchema = {
  response: ResponseSchema,
};
