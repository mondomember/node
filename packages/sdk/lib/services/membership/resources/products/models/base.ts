import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../models";
import { UIDPrefix } from "../../../constants";

export const ProductIdSchema = constructUIDSchema([UIDPrefix.PRODUCT]);

export const ProductIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.PRODUCT
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
