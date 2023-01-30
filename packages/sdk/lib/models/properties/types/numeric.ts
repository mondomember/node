import { JsonSchemaType } from "../../../schema";
import { FieldIdPropertySchema } from "../../common";
import { FieldType } from "@mondomember/model";

const TypeSchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.NUMERIC],
  },
};

const ValueSchema = {
  value: {
    type: [
      JsonSchemaType.INTEGER,
      JsonSchemaType.NUMBER,
      JsonSchemaType.STRING,
      JsonSchemaType.NULL,
    ],
  },
};

export const NumericSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["id", "type"],
  additionalProperties: false,
  properties: {
    ...FieldIdPropertySchema,
    ...TypeSchema,
    ...ValueSchema,
  },
};
