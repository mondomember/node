import { JsonSchemaType } from "../../../schema";
import {
  FieldGroupResponseItemSchema,
  FieldResponseItemSchema,
} from "../resources/properties";

const FieldGroupWithFieldsSchema = {
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

export const FieldGroupsSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    groups: {
      type: JsonSchemaType.ARRAY,
      items: FieldGroupWithFieldsSchema,
    },
  },
};
