import { JsonSchemaType } from "../../../../../../schema";
import { FieldGroupIdSchema } from "../../field-groups/models/base";
export { FieldIdSchema, FieldIdPropertySchema } from "../../../../../../models";

export const NamePropertySchema = {
  name: {
    type: JsonSchemaType.STRING,
  },
};

export interface NamePropertyInterface {
  name: string;
}

export const FieldGroupPropertySchema = {
  group: FieldGroupIdSchema,
};

export interface FieldGroupPropertyInterface {
  group: string;
}

export const LabelPropertySchema = {
  label: {
    type: JsonSchemaType.STRING,
  },
};

export interface LabelPropertyInterface {
  label: string;
}

export const DescriptionPropertySchema = {
  description: {
    type: JsonSchemaType.STRING,
  },
};

export interface DescriptionPropertyInterface {
  description: string;
}

export const OrderPropertySchema = {
  order: {
    type: JsonSchemaType.NUMBER,
  },
};

export interface OrderPropertyInterface {
  order: number;
}
