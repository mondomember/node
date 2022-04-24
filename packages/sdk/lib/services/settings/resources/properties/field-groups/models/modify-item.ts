import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import {
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  OrderPropertySchema,
  OrderPropertyInterface,
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

export interface FieldGroupModifyItemInterface
  extends Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface> {}
