import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDPropertySchema,
  FieldType,
  IdPropertyInterface,
  AnyFieldType,
  UIDPrefix,
} from "../../../../../models";

import { ActivityType, OperationType } from "../../constants";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [ActivityType.DELTA],
  },
};

export interface TypeInterface {
  type: typeof ActivityType.DELTA;
}

export const OperationPropertySchema = {
  operation: {
    type: JsonSchemaType.STRING,
    enum: [
      OperationType.CREATE,
      OperationType.UPDATE,
      OperationType.DELETE,
      OperationType.AUTOMATION,
    ],
  },
};

export interface OperationPropertyInterface {
  operation:
    | typeof OperationType.CREATE
    | typeof OperationType.UPDATE
    | typeof OperationType.DELETE
    | typeof OperationType.AUTOMATION;
}

const AttributesProperty = {
  attributes: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    patternProperties: {
      "^.*$": {
        type: JsonSchemaType.OBJECT,
        required: ["source", "target"],
        properties: {
          source: {
            type: [
              JsonSchemaType.ARRAY,
              JsonSchemaType.BOOLEAN,
              JsonSchemaType.INTEGER,
              JsonSchemaType.NULL,
              JsonSchemaType.NUMBER,
              JsonSchemaType.OBJECT,
              JsonSchemaType.STRING,
            ],
          },
          target: {
            type: [
              JsonSchemaType.ARRAY,
              JsonSchemaType.BOOLEAN,
              JsonSchemaType.INTEGER,
              JsonSchemaType.NULL,
              JsonSchemaType.NUMBER,
              JsonSchemaType.OBJECT,
              JsonSchemaType.STRING,
            ],
          },
        },
        additionalProperties: false,
      },
    },
  },
};

const PropertiesProperty = {
  properties: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    patternProperties: {
      "^.*$": {
        type: JsonSchemaType.OBJECT,
        required: ["id", "type", "source", "target"],
        properties: {
          ...constructUIDPropertySchema(UIDPrefix.FIELD),
          ...{
            type: {
              enum: [FieldType.TEXT, FieldType.TOGGLE, FieldType.NUMERIC],
            },
            source: {
              type: [
                JsonSchemaType.ARRAY,
                JsonSchemaType.BOOLEAN,
                JsonSchemaType.INTEGER,
                JsonSchemaType.NULL,
                JsonSchemaType.NUMBER,
                JsonSchemaType.OBJECT,
                JsonSchemaType.STRING,
              ],
            },
            target: {
              type: [
                JsonSchemaType.ARRAY,
                JsonSchemaType.BOOLEAN,
                JsonSchemaType.INTEGER,
                JsonSchemaType.NULL,
                JsonSchemaType.NUMBER,
                JsonSchemaType.OBJECT,
                JsonSchemaType.STRING,
              ],
            },
          },
        },
        additionalProperties: false,
      },
    },
  },
};

export const DiffSchema = {
  diff: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    properties: {
      ...AttributesProperty,
      ...PropertiesProperty,
    },
  },
};

export interface DiffPropertyInterface {
  diff: {
    attributes?: {
      [k: string]: {
        source:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
        target:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
    };
    properties?: {
      [k: string]: IdPropertyInterface & {
        source:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
        type: AnyFieldType;
        target:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
    };
  };
}
