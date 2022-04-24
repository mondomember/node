import { JsonSchemaType } from "../../../../../../../schema";
import {
  constructUIDSchema,
  constructUIDPropertySchema,
} from "../../../../../../../models";
import { UIDPrefix } from "../../../../../constants";

export const ProductTierIdSchema = constructUIDSchema([UIDPrefix.PRODUCT_TIER]);

export const ProductTierIdPropertySchema = constructUIDPropertySchema(
  UIDPrefix.PRODUCT_TIER
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

export interface PriceProductResponseInterface {
  price: {
    version: number;
    amount: number;
  };
}
