import { JsonSchemaType } from "../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../models";
import { Membership } from "@mondomember/model";

export const ProductIdSchema = constructUIDSchema([
  Membership.UIDPrefix.PRODUCT,
]);

export const ProductIdPropertySchema = constructUIDPropertySchema(
  Membership.UIDPrefix.PRODUCT
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
