import { JsonSchemaType, JsonSchema } from "../../../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../../../../models";
import {
  FieldIdPropertySchema,
  NamePropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  FieldGroupPropertySchema,
  OrderPropertySchema,
} from "../../base";
import { TypePropertySchema, DecimalPropertySchema } from "./base";

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
