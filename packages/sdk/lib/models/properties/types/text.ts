import { JsonSchemaType } from "../../../schema";
import { FieldIdPropertySchema } from "../../common";
import { FieldType } from "@mondomember/model";

const TypeSchema = {
  type: {
    type: JsonSchemaType.STRING,
    enum: [FieldType.TEXT],
  },
};

const ValueSchema = {
  value: {
    type: [JsonSchemaType.STRING, JsonSchemaType.NULL],
  },
};

export const TextSchema = {
  type: JsonSchemaType.OBJECT,
  required: ["id", "type"],
  additionalProperties: false,
  properties: {
    ...FieldIdPropertySchema,
    ...TypeSchema,
    ...ValueSchema,
  },
};
