import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  LabelPropertySchema,
  DescriptionPropertySchema,
  OrderPropertySchema,
  FieldGroupPropertySchema,
} from "../../base";
import { TypePropertySchema, DecimalPropertySchema } from "./base";

export const NumericFieldModifyItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type"],
  properties: {
    ...TypePropertySchema,
    ...FieldGroupPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...OrderPropertySchema,
    ...DecimalPropertySchema,
  },
};
