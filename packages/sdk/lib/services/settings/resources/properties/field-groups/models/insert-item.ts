import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import {
  FieldGroupIdPropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  OrderPropertySchema,
} from "./base";

export const FieldGroupInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["label"],
  properties: {
    ...FieldGroupIdPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...OrderPropertySchema,
  },
};
