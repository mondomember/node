import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  LabelPropertySchema,
  DescriptionPropertySchema,
  OrderPropertySchema,
  FieldGroupPropertySchema,
} from "../../base";
import { TypePropertySchema, MultilinePropertySchema } from "./base";

export const TextFieldModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    ...TypePropertySchema,
    ...FieldGroupPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...OrderPropertySchema,
    ...MultilinePropertySchema,
  },
};
