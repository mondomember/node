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
  AutoSelectPropertySchema,
  AutoSelectPropertyInterface,
} from "./base";

export const ToggleFieldResponseItemSchema: JsonSchema = {
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
    ...AutoSelectPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};

export interface ToggleFieldResponseItemInterface
  extends IdPropertyInterface,
    TypePropertyInterface,
    NamePropertyInterface,
    LabelPropertyInterface,
    FieldGroupPropertyInterface,
    Partial<DescriptionPropertyInterface>,
    Partial<OrderPropertyInterface>,
    Partial<AutoSelectPropertyInterface>,
    CreatedAtPropertyInterface,
    UpdatedAtPropertyInterface,
    Partial<DeletedAtPropertyInterface>,
    Partial<LastUpdatedPropertyInterface> {}
