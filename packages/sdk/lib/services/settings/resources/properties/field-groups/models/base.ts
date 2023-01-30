import { JsonSchemaType } from "../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../models";
import { Settings } from "@mondomember/model";

export const FieldGroupIdSchema = constructUIDSchema([
  Settings.UIDPrefix.FIELD_GROUP,
]);
export const FieldGroupIdPropertySchema = constructUIDPropertySchema(
  Settings.UIDPrefix.FIELD_GROUP
);

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
