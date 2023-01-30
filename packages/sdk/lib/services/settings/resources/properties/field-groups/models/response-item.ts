import { JsonSchemaType, JsonSchema } from "../../../../../../schema";
import {
  CreatedAtPropertySchema,
  UpdatedAtPropertySchema,
  DeletedAtPropertySchema,
  LastUpdatedPropertySchema,
} from "../../../../../../models";
import {
  FieldGroupIdPropertySchema,
  LabelPropertySchema,
  DescriptionPropertySchema,
  OrderPropertySchema,
} from "./base";

export const FieldGroupResponseItemSchema: JsonSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  required: ["id", "label", "createdAt", "updatedAt"],
  properties: {
    ...FieldGroupIdPropertySchema,
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...OrderPropertySchema,
    ...CreatedAtPropertySchema,
    ...UpdatedAtPropertySchema,
    ...DeletedAtPropertySchema,
    ...LastUpdatedPropertySchema,
  },
};
