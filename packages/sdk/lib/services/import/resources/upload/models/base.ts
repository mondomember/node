import { JsonSchemaType } from "../../../../../schema";

export const UrlPropertySchema = {
  url: {
    type: JsonSchemaType.STRING,
  },
};

export const FieldsPropertySchema = {
  fields: {
    type: JsonSchemaType.OBJECT,
    patternProperties: {
      "^.*$": {
        type: JsonSchemaType.STRING,
      },
    },
  },
};
