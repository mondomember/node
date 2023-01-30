import { JsonSchemaType } from "../../../../../schema";

export const ViewsSchema = {
  views: {
    type: JsonSchemaType.OBJECT,
    patternProperties: {
      "^.*$": {
        type: JsonSchemaType.OBJECT,
        required: ["columns"],
        properties: {
          columns: {
            type: JsonSchemaType.ARRAY,
            items: {
              type: JsonSchemaType.STRING,
            },
          },
        },
        additionalProperties: false,
      },
    },
  },
};
