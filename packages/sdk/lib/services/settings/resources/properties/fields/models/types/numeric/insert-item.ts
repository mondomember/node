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
  DecimalPropertySchema,
  DecimalProertyInterface,
} from "./base";

export const NumericFieldInsertItemSchema: JsonSchema = {
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
      ...DecimalPropertySchema,
    },
  },
};

export interface NumericFieldInsertItemInterface
  extends Partial<IdPropertyInterface>,
    TypePropertyInterface,
    NamePropertyInterface,
    LabelPropertyInterface,
    FieldGroupPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<DecimalProertyInterface> {}
