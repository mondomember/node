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
  AutoSelectPropertySchema,
  AutoSelectPropertyInterface,
} from "./base";

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

export interface ToggleFieldModifyItemInterface
  extends TypePropertyInterface,
    Partial<FieldGroupPropertyInterface>,
    Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<AutoSelectPropertyInterface> {}
