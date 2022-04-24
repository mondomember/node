import { JsonSchemaType } from "../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../models";
import { UIDPrefix } from "../../../../constants";

export const FieldGroupIdSchema = constructUIDSchema([UIDPrefix.FIELD_GROUP]);
export const FieldGroupIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.FIELD_GROUP
);

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
