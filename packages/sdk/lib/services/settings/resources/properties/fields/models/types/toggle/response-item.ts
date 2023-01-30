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
import { TypePropertySchema, AutoSelectPropertySchema } from "./base";

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
