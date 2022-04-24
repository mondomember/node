import { JsonSchemaType } from "../../../../../../../schema";
import {
  MetadataPropertySchema,
  MetadataPropertyInterface,
} from "../../../../../../../models";
import {
  LabelPropertySchema,
  LabelPropertyInterface,
  DescriptionPropertySchema,
  DescriptionPropertyInterface,
} from "../../base";

export const StripeGatewayModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
  },
};

export interface StripeGatewayModifyItemInterface
  extends Partial<LabelPropertyInterface>,
    Partial<DescriptionPropertyInterface>,
    Partial<MetadataPropertyInterface> {}
