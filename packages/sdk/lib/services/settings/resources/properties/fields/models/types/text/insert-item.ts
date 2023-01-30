import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  FieldIdPropertySchema,
  NamePropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  FieldGroupPropertySchema,
  OrderPropertySchema,
} from "../../base";
import { TypePropertySchema, MultilinePropertySchema } from "./base";

export const TextFieldInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "name", "label", "group"],
  ...{
    properties: {
      ...FieldIdPropertySchema,
      ...TypePropertySchema,
      ...NamePropertySchema,
      ...LabelPropertySchema,
      ...DescriptionPropertySchema,
      ...FieldGroupPropertySchema,
      ...OrderPropertySchema,
      ...MultilinePropertySchema,
    },
  },
};
