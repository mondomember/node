import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import { IdPropertyInterface } from "../../../../../../models";
import {
  FieldGroupIdPropertySchema,
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  OrderPropertySchema,
  OrderPropertyInterface,
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

export interface FieldGroupInsertItemInterface
  extends Partial<IdPropertyInterface>,
    LabelPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface> {}
