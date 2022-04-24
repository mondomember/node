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
  MultilinePropertySchema,
  MultilinePropertyInterface,
} from "./base";

export const TextFieldInsertItemSchema: JsonSchema = {
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
      ...MultilinePropertySchema,
    },
  },
};

export interface TextFieldInsertItemInterface
  extends Partial<IdPropertyInterface>,
    TypePropertyInterface,
    NamePropertyInterface,
    LabelPropertyInterface,
    FieldGroupPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<MultilinePropertyInterface> {}
