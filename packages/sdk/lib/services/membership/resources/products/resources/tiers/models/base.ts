import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../../models";
import { Membership } from "@mondomember/model";

export const ProductTierIdSchema = constructUIDSchema([
  Membership.UIDPrefix.PRODUCT_TIER,
]);

export const ProductTierIdPropertySchema = constructUIDPropertySchema(
  Membership.UIDPrefix.PRODUCT_TIER
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

export const PricePropertyResponseSchema = {
  price: {
    type: JsonSchemaType.OBJECT,
    additionalProperties: false,
    required: ["version", "amount"],
    properties: {
      version: {
        type: JsonSchemaType.NUMBER,
      },
      amount: {
        type: JsonSchemaType.NUMBER,
      },
    },
  },
};
