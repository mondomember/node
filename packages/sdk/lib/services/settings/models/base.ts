import { JsonSchemaType, JsonSchema } from "../../../schema";
import {
  FieldGroupResponseItemSchema,
  FieldResponseItemSchema,
} from "../resources/properties";

const FieldGroupWithFieldsSchema: JsonSchema = {
  ...FieldGroupResponseItemSchema,
  ...{
    properties: {
      ...FieldGroupResponseItemSchema.properties,
      ...{
        fields: {
          type: JsonSchemaType.ARRAY,
          items: FieldResponseItemSchema,
        },
      },
    },
  },
};

export const FieldGroupsSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    groups: {
      type: JsonSchemaType.ARRAY,
      items: FieldGroupWithFieldsSchema,
    },
  },
};
