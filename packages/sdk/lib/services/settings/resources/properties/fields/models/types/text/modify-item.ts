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
  MultilinePropertySchema,
  MultilinePropertyInterface,
} from "./base";

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

export interface TextFieldModifyItemInterface
  extends TypePropertyInterface,
    Partial<FieldGroupPropertyInterface>,
    Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<MultilinePropertyInterface> {}
