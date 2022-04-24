import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import {
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  OrderPropertySchema,
  OrderPropertyInterface,
  FieldGroupPropertySchema,
  FieldGroupPropertyInterface,
} from "../../base";
import {
  TypePropertySchema,
  TypePropertyInterface,
  DecimalPropertySchema,
  DecimalProertyInterface,
} from "./base";

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

export interface NumericFieldModifyItemInterface
  extends TypePropertyInterface,
    Partial<FieldGroupPropertyInterface>,
    Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<DecimalProertyInterface> {}
