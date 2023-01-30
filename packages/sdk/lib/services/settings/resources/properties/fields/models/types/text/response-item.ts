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
import { TypePropertySchema, MultilinePropertySchema } from "./base";

export const TextFieldResponseItemSchema: JsonSchema = {
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
    ...MultilinePropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
