import { JsonSchemaType, JsonSchema } from "../../../../../../../../schema";
import {
  IdPropertyInterface,
  CreatedAtPropertySchema,
  CreatedAtPropertyInterface,
  UpdatedAtPropertySchema,
  UpdatedAtPropertyInterface,
  DeletedAtPropertySchema,
  DeletedAtPropertyInterface,
  LastUpdatedPropertySchema,
  LastUpdatedPropertyInterface,
} from "../../../../../../../../models";
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

export const NumericFieldResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "type", "name", "label", "group", "createdAt", "updatedAt"],
  properties: {
    ...FieldIdPropertySchema,
    ...TypePropertySchema,
    ...NamePropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...FieldGroupPropertySchema,
    ...OrderPropertySchema,
    ...DecimalPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface NumericFieldResponseItemInterface
  extends IdPropertyInterface,
    TypePropertyInterface,
    NamePropertyInterface,
    LabelPropertyInterface,
    FieldGroupPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<DecimalProertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
