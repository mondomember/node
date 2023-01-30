import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import {
  LabelPropertySchema,
  DescriptionPropertySchema,
  OrderPropertySchema,
} from "./base";

export const FieldGroupModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...OrderPropertySchema,
  },
};
