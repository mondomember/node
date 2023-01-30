import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  LabelPropertySchema,
  DescriptionPropertySchema,
  OrderPropertySchema,
  FieldGroupPropertySchema,
} from "../../base";
import { TypePropertySchema, AutoSelectPropertySchema } from "./base";

export const ToggleFieldModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    ...TypePropertySchema,
    ...FieldGroupPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...OrderPropertySchema,
    ...AutoSelectPropertySchema,
  },
};
