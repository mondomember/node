import { UIDPrefix, FieldType } from "@mondomember/model";
import { JsonSchemaType } from "../../../../../schema";
import { constructUIDPropertySchema } from "../../../../../models";
import { Activity } from "@mondomember/model";

export const TypePropertySchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [Activity.ActivityType.DELTA],
  },
};

export const OperationPropertySchema = {
  operation: {
    type: JsonSchemaType.STRING,
    enum: [
      Activity.OperationType.CREATE,
      Activity.OperationType.UPDATE,
      Activity.OperationType.DELETE,
      Activity.OperationType.AUTOMATION,
    ],
  },
};

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
