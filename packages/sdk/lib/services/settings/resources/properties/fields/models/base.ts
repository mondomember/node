import { JsonSchemaType } from "../../../../../../schema";
import { FieldGroupIdSchema } from "../../field-groups/models/base";
export { FieldIdSchema, FieldIdPropertySchema } from "../../../../../../models";

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
  },
};

export const FieldGroupPropertySchema = {
  group: FieldGroupIdSchema,
};

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
  },
};

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export const OrderPropertySchema = {
  order: {
    type: JsonSchemaType.NUMBER,
  },
};
