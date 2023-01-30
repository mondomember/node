import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  FieldIdPropertySchema,
  NamePropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  FieldGroupPropertySchema,
  OrderPropertySchema,
} from "../../base";
import { TypePropertySchema, AutoSelectPropertySchema } from "./base";

export const ToggleFieldInsertItemSchema: JsonSchema = {
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
      ...AutoSelectPropertySchema,
    },
  },
};
