import { JsonSchemaType } from "../../../../../schema";

export const UrlPropertySchema = {
  url: {
    type: JsonSchemaType.STRING,
  },
};

export interface UrlPropertyInterface {
  url: string;
}

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

export interface FieldsPropertyInterface {
  fields: { [key: string]: string };
}
