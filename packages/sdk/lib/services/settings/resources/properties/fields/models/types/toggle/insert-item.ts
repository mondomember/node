import { JsonSchema, JsonSchemaType } from "../../../../../../../../schema";
import { IdPropertyInterface } from "../../../../../../../../models";
import {
  FieldIdPropertySchema,
  NamePropertySchema,
  NamePropertyInterface,
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
  FieldGroupPropertySchema,
  FieldGroupPropertyInterface,
  OrderPropertySchema,
  OrderPropertyInterface,
} from "../../base";
import {
  TypePropertySchema,
  TypePropertyInterface,
  AutoSelectPropertySchema,
  AutoSelectPropertyInterface,
} from "./base";

export const ToggleFieldInsertItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["type", "name", "label", "group"],
  ...{
    properties: {
      ...FieldIdPropertySchema,
      ...TypePropertySchema,
      ...NamePropertySchema,
      ...LabelPropertySchema,
      ...DescriptionPropertySchema,
      ...FieldGroupPropertySchema,
      ...OrderPropertySchema,
      ...AutoSelectPropertySchema,
    },
  },
};

export interface ToggleFieldInsertItemInterface
  extends Partial<IdPropertyInterface>,
    TypePropertyInterface,
    NamePropertyInterface,
    LabelPropertyInterface,
    FieldGroupPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<AutoSelectPropertyInterface> {}
