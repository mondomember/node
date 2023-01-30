import { JsonSchemaType } from "../../../../../../../schema";
import { MetadataPropertySchema } from "../../../../../../../models";
import { LabelPropertySchema, DescriptionPropertySchema } from "../../base";

export const StripeGatewayModifyItemSchema = {
  type: JsonSchemaType.OBJECT,
  additionalProperties: false,
  properties: {
    ...LabelPropertySchema,
    ...DescriptionPropertySchema,
    ...MetadataPropertySchema,
  },
};
