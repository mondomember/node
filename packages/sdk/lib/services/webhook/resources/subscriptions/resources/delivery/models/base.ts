import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../../models";
import { UIDPrefix } from "../../../../../constants";

export const DeliveryIdSchema = constructUIDSchema([UIDPrefix.DELIVERY]);

export const DeliveryIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.DELIVERY
);

export interface SubscriptionPropertyInterface {
  subscription: string;
}

export const EventSchema = {
  type: JsonSchemaType.STRING,
};

export const EventPropertySchema = {
  event: EventSchema,
};

export interface EventPropertyInterface {
  event: string;
}

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

export type DataType = {
  [k: string]: string;
};

export interface DataPropertyInterface {
  data: DataType;
}

export type ResponseType = {
  statusCode: number;
  message: string;
};

export interface ResponsePropertyInterface {
  response: ResponseType;
}

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
