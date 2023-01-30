import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  FieldIdPropertySchema,
  NamePropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  FieldGroupPropertySchema,
  OrderPropertySchema,
} from "../../base";
import { TypePropertySchema, DecimalPropertySchema } from "./base";

export const NumericFieldInsertItemSchema: JsonSchema = {
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
      ...DecimalPropertySchema,
    },
  },
};
